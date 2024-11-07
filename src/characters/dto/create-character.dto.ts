import { ApiProperty } from '@nestjs/swagger';
import {
    ArrayContains,
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsIn,
    IsNotEmpty, IsOptional,
    Length
} from "class-validator";

export class CreateCharacterDto {
    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 20)
    name: string;

    @ApiProperty()
    @IsIn([1, 2, 3, 4])
    class: number;

    @ApiProperty()
    @IsIn([1, 2, 3, 4, 5])
    race: number;

    @ApiProperty()
    @IsArray()
    @ArrayContains([1, 2, 3, 4, 5])
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    @IsOptional()
    humanAbilities: number[];
}
