import { Body, Controller, Get, Post, Redirect, Req, Res, ValidationPipe } from '@nestjs/common';
import { AddUserDto } from './dtos/adduser.dto';
import { UsersService } from './users.service';
import { CheckUserDto } from './dtos/checkuser.dto';
import { BlogsController } from 'src/blogs/blogs.controller';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){}

    @Get()
    async checkuser(@Req() req){
        console.log(req.cookies);
        return this.userService.findusers();
    }

    @Post('signup')
    async signup(@Body(new ValidationPipe()) addUserDto:AddUserDto){
        return this.userService.adduser(addUserDto);
    }

    @Post('signin')
    async signin(@Res() res, @Req() req,@Body(new ValidationPipe()) checkUserDto:CheckUserDto){
        const result = this.userService.checkuser(checkUserDto);
        if(await result === 'success'){
                req.session.visits = req.session.visits? req.session.visits+1:1;
                console.log('sign in success');
                res.redirect('/blogs');
        }
        else{
                res.redirect('/');
                return 'sign in failed';
        } 
    }
}   

