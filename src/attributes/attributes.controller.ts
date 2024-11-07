import { Controller, Get, Param } from '@nestjs/common';
import { AttributesService } from './attributes.service';

@Controller('attributes')
export class AttributesController {
    constructor(private readonly attributesService: AttributesService) {}

    @Get()
    findAll() {
        return this.attributesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.attributesService.findOne(+id);
    }
}
