import { ApiProperty } from '@nestjs/swagger';
import {
    ArrayContains,
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsIn,
    IsNotEmpty, Length, ValidateIf
} from "class-validator";
import { User } from '../../users/entities/users.entity';

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
    @ValidateIf(o => o.race === 1)
    @IsArray()
    @ArrayContains([0, 1, 2, 3, 4])
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    humanAttributes: number[];

    user: User;
}
