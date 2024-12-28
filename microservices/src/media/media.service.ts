/* eslint-disable prettier/prettier */
import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Media } from './media.model';

@Injectable()
export class MediaService {
    constructor(@Inject('MediaModel') private readonly MediaModel: Model<Media>) {}

    
    async create(media: Media): Promise<Media>{
        const newMedia = new this.MediaModel(media);
        return await newMedia.save()
    }

    
    async findOne(name: string): Promise<Media> {
        const media = await this.MediaModel.findOne({name}).exec();
        return media
    }

    async findAll(): Promise<Media[]> {
        return await this.MediaModel.find().exec();
    }
    
    async update(name: string, media: Media): Promise<Media> {
        return await this.MediaModel.findOneAndUpdate({name}, media, { new: true }).exec();
    }

    
    async delete(name: string): Promise<boolean> {
        const isDeleted = await this.MediaModel.deleteOne({name}).exec();
        if (isDeleted)
        {
            return  true
        }
        return false
    }
}
