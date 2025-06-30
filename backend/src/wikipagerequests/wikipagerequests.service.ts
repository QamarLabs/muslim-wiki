import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleRequestDto } from 'src/dtos/create-article-request.dto';
import { UpdateArticleRequestDto } from 'src/dtos/update-article-request.dto';
import { ArticleRequest } from 'src/schemas/articlerequest.schema';

@Injectable()
export class WikipagerequestsService {
    constructor(@InjectModel(ArticleRequest.name) private articleRequestModel: Model<ArticleRequest>) { }


    getHello(): string {
        return 'Hello World!';
    }

    async searchArticles(
        qry: string,
        page: number = 1,
        limit: number = 10
    ): Promise<{ results: ArticleRequest[]; total: number }> {
        const query = { title: { $regex: qry, $options: 'i' } };

        const [results, total] = await Promise.all([
            this.articleRequestModel
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .exec(),
            this.articleRequestModel.countDocuments(query).exec(),
        ]);

        return { results, total };
    }


    async create(createArticleRequestDto: CreateArticleRequestDto): Promise<ArticleRequest> {
        const createdArticleRequest = new this.articleRequestModel(createArticleRequestDto);
        return createdArticleRequest.save();
    }


    async findByPageId(pageid: number): Promise<ArticleRequest> {
        return this.articleRequestModel.findOne({ pageid }).exec();
    }

    async update(id: string, updateArticleRequestDto: UpdateArticleRequestDto): Promise<ArticleRequest> {
        return this.articleRequestModel.findByIdAndUpdate(id, updateArticleRequestDto, { new: true }).exec();
    }

    async remove(id: string): Promise<ArticleRequest> {
        return this.articleRequestModel.findByIdAndDelete(id).exec();
    }
}
