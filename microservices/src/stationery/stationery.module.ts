/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { stationeryController } from './stationery.controller';
import { stationeryService } from './stationery.service';
import { MongooseModule } from '@nestjs/mongoose';
import { stationerySchema} from './stationery.model'; // Import the schema



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'stationery', schema: stationerySchema }]), // Provide ItemModel
  ],
  controllers: [stationeryController],
  providers: [stationeryService]
})
export class stationeryModule {}