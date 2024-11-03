import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from '../user/user.module';

@Module({
    imports: [UsersModule],
    controllers: [AuthController],
    providers: [ConfigService],
})
export class AuthModule {}
