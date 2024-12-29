/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './auth.model';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Controller, Get, Post, Body, Param, Put, Delete, HttpStatus, HttpException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(email: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ email, password: hashedPassword });
    await newUser.save();
    return { message: 'User successfully registered' };
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return{
        message: "Invalid Username or Password"
      }
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return{
        message: "Invalid Username or Password"
      }
      throw new Error('Invalid credentials');
    }

    const payload = { email: user.email, sub: user._id };
    const accessToken = this.jwtService.sign(payload);
    
    return {
      message: 'Login successfully',  // Added message
      //access_token: accessToken,     // Return access token
      email: email
    };
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, email: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userModel.findByIdAndUpdate(
      id,
      { email, password: hashedPassword },
      { new: true },
    ).exec();
  }

  async delete(id: string): Promise<any> {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    
    // Check if user was found and deleted
    if (user) {
      console.log(`User with ID ${id} deleted successfully`);  // Log the deletion
      return { message: 'User deleted successfully' };         // Return success message
    } else {
      console.log(`User with ID ${id} not found`);              // Log if user is not found
      return { message: 'User not found' };                     // Return error message if user not found
    }
  }
}
