import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from '../schemas/article.schema';
import { WikipagesService } from 'src/wikipages/wikipages.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  providers: [WikipagesService],
  exports: [WikipagesService],
})
export class WikiPagesModule {}