import { Body, ConflictException, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../user/create-user.dto';
import { getAuth } from 'firebase-admin/auth';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
    Auth,
    getAuth as fGetAuth,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './login.dto';
import { AuthGuard } from './auth.guard';
import { UsersService } from '../user/user.service';

@Controller('auth')
export class AuthController {
    app: FirebaseApp;
    fAuth: Auth;

    constructor(private configService: ConfigService, private usersService: UsersService) {
        this.app = initializeApp({
            apiKey: configService.get('apiKey'),
            authDomain: configService.get('authDomain'),
            projectId: configService.get('projectId'),
            storageBucket: configService.get('storageBucket'),
            messagingSenderId: configService.get('messagingSenderId'),
            appId: configService.get('appId'),
            measurementId: configService.get('measurementId'),
        });
        this.fAuth = fGetAuth(this.app);
    }

    @Post('create-account')
    async createAccount(@Body() createUserDto: CreateUserDto) {
        return getAuth()
            .createUser(createUserDto)
            .then(async res => {
                return this.usersService.create({uid: res.uid, email: res.email})
                    .then(() => {
                        return {
                            message: 'Your account has been successfully created!',
                        };
                    }).catch(error => {
                    if (error.errno === 1062) {
                        throw new ConflictException();
                    }
                });
            });
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return signInWithEmailAndPassword(
            this.fAuth,
            loginDto.email,
            loginDto.password,
        ).then(async (res) => {
            return {
                accessToken: await res.user.getIdToken(),
                uid: res.user.uid
            };
        });
    }

    @UseGuards(AuthGuard)
    @Get('test')
    async authTest() {
        return { guessWhat: 'it works!' };
    }
}
