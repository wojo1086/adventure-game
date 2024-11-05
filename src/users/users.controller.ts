import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) {}

    // @UseGuards(AuthGuard)
    // @Get(':uid')
    // async getUser(@Param() params: any, @Req() req: any) {
    //     if (params.uid !== req.uid) {
    //         throw new UnauthorizedException();
    //     }
    //     return this.usersService.findOne(req.uid).then(user => {
    //         if (!user) {
    //             throw new NotFoundException();
    //         }
    //         return user;
    //     });
    // }
    //
    // @UseGuards(AuthGuard)
    // @Patch(':id')
    // async updateUser(@Param() params: any, @Body() body: any, @Req() req: any) {
    //     return this.usersService.update(body, params.id, req.uid);
    // }
    //
    // @UseGuards(AuthGuard)
    // @Delete(':uid')
    // async deleteUser(@Param() params: any, @Req() req: any) {
    //     if (params.uid !== req.uid) {
    //         throw new UnauthorizedException();
    //     }
    //     return this.usersService.remove(params.uid).then(() => {
    //         return getAuth().deleteUser(params.uid);
    //     });
    // }
}
