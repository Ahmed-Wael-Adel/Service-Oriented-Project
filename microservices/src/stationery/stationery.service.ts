/* eslint-disable prettier/prettier */
import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { stationery } from './stationery.model';

@Injectable()
export class stationeryService {
    constructor(@Inject('stationeryModel') private readonly stationeryModel: Model<stationery>) {}

  async create(stationery: stationery): Promise<stationery> {
    const newstationery = new this.stationeryModel(stationery);
    return await newstationery.save();
  }

  async findAll(): Promise<stationery[]> {
    return await this.stationeryModel.find().exec();
  }

  async findOne(id: string): Promise<stationery> {
    return await this.stationeryModel.findById(id).exec();
  }

  async update(id: string, stationery: stationery): Promise<stationery> {
    return await this.stationeryModel.findByIdAndUpdate(id, stationery, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.stationeryModel.deleteOne({ _id: id }).exec();
  }
}
