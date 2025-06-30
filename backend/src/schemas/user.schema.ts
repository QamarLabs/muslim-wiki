import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  mfaSecret: string;

  @Prop({ default: false })
  isMfaEnabled: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);