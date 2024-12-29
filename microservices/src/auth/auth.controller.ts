/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { email: string; password: string }) {
    console.log(body.email)
    return this.authService.signup(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Get('users')
  async findAll() {
    return this.authService.findAll();
  }

  @Get('users/:id')
  async findOne(@Param('id') id: string) {
    return this.authService.findOne(id);
  }

  @Put('users/:id')
  async update(@Param('id') id: string, @Body() body: { email: string; password: string }) {
    return this.authService.update(id, body.email, body.password);
  }

  @Delete('users/:id')
  async delete(@Param('id') id: string) {
    return this.authService.delete(id);
  }
}
