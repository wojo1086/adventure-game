import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp } from 'firebase-admin/app';
import * as developmentServiceAccount from './development.serviceAccountKey.json';
import { credential, ServiceAccount } from "firebase-admin";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const port = process.env.PORT || 3000;
    let accountKey: ServiceAccount;
    switch (process.env.NODE_ENV) {
        case 'development':
        default:
            accountKey = developmentServiceAccount as ServiceAccount;
            break;
    }
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    initializeApp({
        credential: credential.cert(accountKey),
    });

    const config = new DocumentBuilder()
        .setTitle('The Fractured Realms')
        .setDescription('API endpoints for the Fractured Realms game.')
        .setVersion('0.0')
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);

    await app.listen(port, '0.0.0.0');
}

bootstrap();
