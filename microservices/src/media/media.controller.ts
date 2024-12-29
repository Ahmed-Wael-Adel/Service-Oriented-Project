import { Controller, Get, Post, Body, Param, Put, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { Media } from './media.model'; 
import { MediaService } from './media.service';
import { promises } from 'dns';

@Controller('media')
export class MediaController {
    constructor(private readonly MediaService: MediaService) { }
    @Post('add')
    async add(@Body() createMediaDto: Media): Promise<{message: string, media: Media}> {
        const media =  await this.MediaService.create(createMediaDto);
        return{
            message: "Media Added",
            media: media
        }
    }

    @Get('searchByName')
    async search_one(@Body('name') name: string): Promise<{message: string, media: Media}>{
        const media =  await this.MediaService.findOne(name);
        if(!media)
        {
            throw new HttpException(
                "Media Doesn't exist",
                HttpStatus.UNAUTHORIZED
            )
        }
        return{
            message: 'Found Media',
            media: media
        }
    }

    @Get('/')
    async search_all(): Promise<Media[]>{
        return await this.MediaService.findAll();
    }

    @Put('update/:id')
    async update(@Param('id') id: string, @Body() updateMediaDto: Media): Promise<{message: string, media: Media}> {
        const media = await this.MediaService.update(id, updateMediaDto);
        return{
            message: "media Updated",
            media: media
        }
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string): Promise<{message: string}>{
        const media = await this.MediaService.delete(id)
        if(media == true)
        {
            return{
                message: "Media Deleted"
            }
        }
        return{
            message: "Media Does not Exist"
        }
    }
}
