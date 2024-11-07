import { Injectable } from '@nestjs/common';

@Injectable()
export class AttributesService {
    findAll() {
        return `This action returns all attributes`;
    }

    findOne(id: number) {
        return `This action returns a #${id} attribute`;
    }
}
