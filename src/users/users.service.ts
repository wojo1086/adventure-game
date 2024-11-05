import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from "./entities/users.entity";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private configService: ConfigService
    ) {}

    async create(data: DeepPartial<User>): Promise<User> {
        const user = await this.findOne(data.uid);
        if (user) {
            throw new ConflictException();
        }
        return this.usersRepository.save(data);
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(uid: string): Promise<User | null> {
        return this.usersRepository.findOneBy({ uid });
    }

    findByEmail(email: string): Promise<User | null> {
        return this.usersRepository.findOneBy({email});
    }

    async update(data: any, id: number, uid: string): Promise<UpdateResult> {
        return this.usersRepository.update({
            id,
            uid
        }, data);
    }

    async remove(uid: string): Promise<DeleteResult> {
        const user = await this.findOne(uid);
        if (!user) {
            throw new NotFoundException();
        }
        return this.usersRepository.delete({id: user.id});
    }
}
