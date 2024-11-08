import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Character } from "./entities/character.entity";
import { UsersModule } from '../users/users.module';
import { RacesModule } from '../races/races.module';
import { ClassesModule } from '../classes/classes.module';

@Module({
    imports: [TypeOrmModule.forFeature([Character]), UsersModule, RacesModule, ClassesModule],
    controllers: [CharactersController],
    providers: [CharactersService],
})
export class CharactersModule {}
