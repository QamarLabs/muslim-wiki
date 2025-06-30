import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleRequest, ArticleRequestSchema } from 'src/schemas/articlerequest.schema';
import { WikipagerequestsService } from 'src/wikipagerequests/wikipagerequests.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ArticleRequest.name, schema: ArticleRequestSchema }]),
  ],
  providers: [WikipagerequestsService],
  exports: [WikipagerequestsService],
})
export class WikiPageRequestsModule {}