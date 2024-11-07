import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { UsersService } from '../users/users.service';
import { RacesService } from '../races/races.service';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';
import { ClassesService } from '../classes/classes.service';

@Injectable()
export class CharactersService {

    constructor(private usersService: UsersService,
                private characterRepository: Repository<Character>,
                private classesService: ClassesService,
                private racesService: RacesService) {
    }

    async create(createCharacterDto: CreateCharacterDto, uid: string) {
        const char = new Character();
        char.name = createCharacterDto.name;
        char.race = await this.racesService.findOne(createCharacterDto.race);
        char.class = await this.classesService.findOne(createCharacterDto.class);
        char.user = await this.usersService.findOne(uid);
        return this.characterRepository.create(char);
    }

    findAll() {
        return `This action returns all character`;
    }

    findOne(id: number) {
        return `This action returns a #${id} character`;
    }

    update(id: number, updateCharacterDto: UpdateCharacterDto) {
        return `This action updates a #${id} character`;
    }

    remove(id: number) {
        return `This action removes a #${id} character`;
    }
}
