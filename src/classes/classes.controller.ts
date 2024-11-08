import { Controller, Get, Param } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
    constructor(private readonly classesService: ClassesService) {}

    // @Post()
    // create(@Body() createClassDto: CreateClassDto) {
    //     return this.classesService.create(createClassDto);
    // }

    @Get()
    findAll() {
        return this.classesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.classesService.findOne(id);
    }
    //
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    //     return this.classesService.update(+id, updateClassDto);
    // }
    //
    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.classesService.remove(+id);
    // }
}
