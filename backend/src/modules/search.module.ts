import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from '../schemas/article.schema';
import { SearchService } from 'src/search/search.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}