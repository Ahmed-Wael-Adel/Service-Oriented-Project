/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';
import { stationeryModule } from './stationery/stationery.module';
import * as dotenv from 'dotenv'; // Import dotenv
dotenv.config();


@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB),
    MediaModule,
    stationeryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}