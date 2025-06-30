import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    return this.authService.register(body.email, body.password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('changePassword')
  async changePassword(@Body() body: { email: string; newPassword: string }) {
    return this.authService.changePassword(body.email, body.newPassword);
  }


  @Post('mfa/generate')
  async generateMfa(@Body() body: { userId: string }) {
    const user = await this.authService.getUserById(body.userId);
    return this.authService.generateMfaSecret(user);
  }

  @Post('mfa/enable')
  async enableMfa(@Body() body: { userId: string; token: string }) {
    return this.authService.enableMfa(body.userId, body.token);
  }

  @Post('mfa/verify')
  async verifyMfa(@Body() body: { userId: string; token: string }) {
    const user = await this.authService.getUserById(body.userId);
    return this.authService.verifyMfaToken(user, body.token);
  }
}