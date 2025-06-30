import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as speakeasy from 'speakeasy';
import * as QRCode from 'qrcode';
import * as bcrypt from 'bcrypt';
import { User } from '../schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUserById(id: string) {
    const user: User = await this.userModel.findOne({ id }).exec() as User;
        
    console.log("user:", user);

    return user;
  }

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({ email, password: hashedPassword });
    return user.save();
  }

  async changePassword(email: string, newPassword: string) {
    const user = await this.userModel.findOne({ email });
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    return user.updateOne();
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid ? user : null;
  }

  async generateMfaSecret(user: User) {
    const secret = speakeasy.generateSecret({
      name: `NestMFA:${user.email}`,
    });

    user.mfaSecret = secret.base32;
    await user.save();

    return {
      secret: secret.base32,
      qrCodeUrl: await QRCode.toDataURL(secret.otpauth_url),
    };
  }

  async enableMfa(userId: string, token: string) {
    const user = await this.userModel.findById(userId);
    if (!user || !user.mfaSecret) return false;

    const verified = speakeasy.totp.verify({
      secret: user.mfaSecret,
      encoding: 'base32',
      token,
    });

    if (verified) {
      user.isMfaEnabled = true;
      await user.save();
      return true;
    }

    return false;
  }

  verifyMfaToken(user: User, token: string) {
    return speakeasy.totp.verify({
      secret: user.mfaSecret,
      encoding: 'base32',
      token,
      window: 1,
    });
  }
}