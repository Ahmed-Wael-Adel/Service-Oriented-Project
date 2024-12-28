import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from './media.model';

@Module({
  imports: [
      MongooseModule.forFeature([{name: 'Media', schema: MediaSchema}]),
    ],
  providers: [MediaService],
  controllers: [MediaController]
})
export class MediaModule {}
