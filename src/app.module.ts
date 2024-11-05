import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from "./auth/auth.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { configuration } from '../config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CharactersModule } from './characters/characters.module';
import { RacesModule } from './races/races.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [
      AuthModule,
      ConfigModule.forRoot({
          envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
          load: [configuration],
          cache: true
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
              type: 'mysql',
              host: configService.get('host'),
              port: +configService.get('db_port'),
              username: configService.get('db_username'),
              password: configService.get('db_password'),
              database: configService.get('database'),
              synchronize: configService.get('synchronize') === 'true',
              autoLoadEntities: configService.get('autoLoadEntities') === 'true',
          }),
          inject: [ConfigService]
      }),
      UsersModule,
      CharactersModule,
      RacesModule,
      ClassesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
