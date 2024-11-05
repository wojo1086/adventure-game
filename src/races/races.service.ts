import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Race } from './entities/race.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RacesService {
    constructor(
        @InjectRepository(Race) private raceRepository: Repository<Race>,
    ) {}

    findAll(): Promise<Race[]> {
        return this.raceRepository.find();
    }

    findOne(id: number) {
        return this.raceRepository.findOneBy({id})
    }
}
