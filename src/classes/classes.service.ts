import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Class } from './entities/class.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClassesService {
    constructor(
        @InjectRepository(Class)
        private readonly classRepository: Repository<Class>,
    ) {}
    findAll() {
        return this.classRepository.find();
    }

    findOne(id: number) {
        return this.classRepository.findOneBy({id});
    }
}
