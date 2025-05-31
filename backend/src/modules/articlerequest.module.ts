import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleRequest, ArticleRequestSchema } from 'src/schemas/articlerequest.schema';
import { ArticleRequestService } from 'src/articlerequest.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ArticleRequest.name, schema: ArticleRequestSchema }]),
  ],
  providers: [ArticleRequestService],
  exports: [ArticleRequestService],
})
export class ArticleRequestsModule {}