import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(6, 20)
    @Matches(/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/, {
        message: 'Your password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character (!@#$%^&*()\-__+.), and be between 6 and 20 characters long.'
    })
    password: string;
}
