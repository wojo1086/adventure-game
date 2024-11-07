import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Request,
    Param,
    Delete, UseGuards
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from '../auth/auth.guard';

@ApiBearerAuth()
@Controller('character')
export class CharactersController {
    constructor(private readonly characterService: CharactersService) {}

    @Post()
    @UseGuards(AuthGuard)
    create(@Request() req: any, @Body() createCharacterDto: CreateCharacterDto) {
        return this.characterService.create(createCharacterDto, req.uid);
    }

    @Get()
    findAll() {
        return this.characterService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.characterService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateCharacterDto: UpdateCharacterDto,
    ) {
        return this.characterService.update(+id, updateCharacterDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.characterService.remove(+id);
    }
}
