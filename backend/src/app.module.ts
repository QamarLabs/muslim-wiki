import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleService } from './article.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ArticleService],
})
export class AppModule {}
