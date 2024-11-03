import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [TypeOrmModule.forFeature([User]), ConfigModule],
    controllers: [UserController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}
