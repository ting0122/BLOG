import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Body, Query } from '@nestjs/common/decorators';

@Controller('blogs')
export class BlogsController {

    @Get()
    findAll(): string {
        return 'you want to find something';
    }

    @Get(':id')
    findOne(@Query('yourname') yourname:string){
        return `you want to find ${yourname}`;
    }

    @Post()
    create(
        @Body('title') title: string,
        @Body('description') description: string
    ) {
        return {title, description};
    }

    @Put(':id')
    update(): string {
        return 'you want to update something';
    }

    @Delete(':id')
    remove(): string {
        return 'you want to remove something';
    }

}
