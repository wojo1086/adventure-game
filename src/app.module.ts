import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { configuration } from '../config/configuration';

@Module({
  imports: [
      AuthModule,
      ConfigModule.forRoot({
          envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
          load: [configuration],
          cache: true
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
