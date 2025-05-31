import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true, // Adds createdAt and updatedAt fields automatically
})
export class ArticleRequest extends Document {
  @Prop({ required: true })
  title: string;
  
  @Prop({ required: true, unique: true })
  pageid: number;

  @Prop({ required: true })
  revid: number;
  
  @Prop({ required: true })
  newtext: string;

  @Prop({ required: true })
  oldtext: string;
  
  @Prop()
  newsummary: string;
  
  @Prop()
  oldsummary: string;

  @Prop({ required: true })
  new_word_count: number;

  @Prop({ required: true })
  contributors: string[];

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  timestamp: Date; // Changed from 'any' to Date type for better typing
}

export const ArticleRequestSchema = SchemaFactory.createForClass(ArticleRequest);