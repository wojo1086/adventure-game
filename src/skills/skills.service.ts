import { Injectable } from '@nestjs/common';

@Injectable()
export class SkillsService {
    findAll() {
        return `This action returns all skills`;
    }

    findOne(id: number) {
        return `This action returns a #${id} skill`;
    }
}
