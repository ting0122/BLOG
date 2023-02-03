import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Body, Query, Redirect } from '@nestjs/common/decorators';
import { CreateNewsDto } from './dtos/create-news.dto';
import { BlogsService } from './blogs.service';
import { UpdateNewsDto } from './dtos/update-news.dto';

@Controller('blogs')
export class BlogsController {
    constructor(private blogsService : BlogsService){}

    @Get()
    findAll(){
        return this.blogsService.findAllNews();
    }

    @Get(':userid')
    findOne(@Param('userid') id:number){
        return this.blogsService.findNews(id);
    }

    @Post()
    async create(@Body() createNewsDto : CreateNewsDto) {
         return this.blogsService.createNews(createNewsDto);
    }

    @Put(':id')
    async update(@Param('id') id:number,@Body() updateNewsDto:UpdateNewsDto){
        return this.blogsService.updateNews(id,updateNewsDto);
    }

    @Delete(':id')
    async remove(@Param('id') id:number){
        return this.blogsService.delNews(id);
    }

}
