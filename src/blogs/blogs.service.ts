import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateNewsDto } from './dtos/create-news.dto';
import { UpdateNewsDto } from './dtos/update-news.dto';
import { news } from './entity/news';

@Injectable()
export class BlogsService {
    constructor(
        @InjectRepository(news)
        private blogsRepository : Repository<news>,
    ){}

    async findAll(){
        return this.blogsRepository.find();
    }

    async findNews(Id) : Promise<news> {
        return this.blogsRepository.findOneOrFail(Id);
    }

    async createNews(createNewsDto : CreateNewsDto) : Promise<news> {
        return this.blogsRepository.save(createNewsDto);
    }

    async updateNews(id:number ,updateNewsDTO:UpdateNewsDto){
        return this.blogsRepository.update(id,updateNewsDTO);
    }

}
