import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './modules/article.module';
import { ArticleRequestsModule } from './modules/articlerequest.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://HWfKySOT:xMCQRM5xMyTM7hft@us-east-1.ufsuw.mongodb.net/Muslim-Wiki', {
    }),
    ArticlesModule,
    ArticleRequestsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
