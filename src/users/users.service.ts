import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddUserDto } from './dtos/adduser.dto';
import { CheckUserDto } from './dtos/checkuser.dto';
import { Users } from './entity/users';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ){}

    async findusers(){
        return this.usersRepository.find();
    }

    async adduser(addUserDto:AddUserDto){
        return this.usersRepository.save(addUserDto);
    }

    async checkuser(checkUserDto:CheckUserDto){
        const user = this.usersRepository.findOneBy({name : checkUserDto.name});
        if((await user).password === checkUserDto.password)
            return 'sign in success';
        else
            return 'sign in fail';
    }
}
