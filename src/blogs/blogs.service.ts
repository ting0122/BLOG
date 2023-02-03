import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

    async findAllNews(){
        return this.blogsRepository.find();
    }

    async findNews(Id) : Promise<news> {
        return this.blogsRepository.findOneBy({id : Id});
    }

    async createNews(createNewsDto : CreateNewsDto) : Promise<news> {
        return this.blogsRepository.save(createNewsDto);
    }

    async updateNews(id:number ,updateNewsDTO:UpdateNewsDto){
        return this.blogsRepository.update(id,updateNewsDTO);
    }

    async delNews(id:number){
        const newsToDel = await this.blogsRepository.findOneBy({id:id});
        await this.blogsRepository.remove(newsToDel);
        return 'Already removed';
    }

}
