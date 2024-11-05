import { Controller, Get, Param } from '@nestjs/common';
import { RacesService } from './races.service';

@Controller('races')
export class RacesController {
    constructor(private readonly raceService: RacesService) {}

    @Get()
    findAll() {
        return this.raceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.raceService.findOne(+id);
    }
}
