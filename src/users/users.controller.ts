import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AddUserDto } from './dtos/adduser.dto';
import { UsersService } from './users.service';
import { CheckUserDto } from './dtos/checkuser.dto';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){}

    @Get()
    async checkuser(){
        return this.userService.findusers();
    }

    @Post('signup')
    async signup(@Body(new ValidationPipe()) addUserDto:AddUserDto){
        return this.userService.adduser(addUserDto);
    }

    @Post('signin')
    async signin(@Body(new ValidationPipe()) checkUserDto:CheckUserDto){
        return this.userService.checkuser(checkUserDto);
    }

}   

