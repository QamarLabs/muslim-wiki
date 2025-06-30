import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WikiPagesModule } from './modules/wikipage.module';
import { WikiPageRequestsModule } from './modules/wikipagerequest.module';
import { SearchController } from './search/search.controller';
import { SearchModule } from './modules/search.module';
import { WikipagesController } from './wikipages/wikipages.controller';
import { WikipagerequestsController } from './wikipagerequests/wikipagerequests.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://HWfKySOT:xMCQRM5xMyTM7hft@us-east-1.ufsuw.mongodb.net/Muslim-Wiki', {
    }),
    WikiPagesModule,
    WikiPageRequestsModule,
    SearchModule,
    AuthModule
  ],
  controllers: [AppController, SearchController, WikipagesController, WikipagerequestsController],
  providers: [AppService],
})
export class AppModule {}
