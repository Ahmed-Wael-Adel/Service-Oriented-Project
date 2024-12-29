/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { stationeryService } from './stationery.service';
import { stationery } from './stationery.model';

@Controller('stationery')
export class stationeryController {
    constructor(private readonly stationeryService: stationeryService) { }
    @Post("add")
    async create(@Body() createstationeryDto: stationery): Promise<stationery> {
        return this.stationeryService.create(createstationeryDto);
    }

    @Get()
    async findAll(): Promise<stationery[]> {
        return this.stationeryService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<stationery> {
        return this.stationeryService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updatestationeryDto: stationery): Promise<stationery> {
        return this.stationeryService.update(id, updatestationeryDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.stationeryService.delete(id);
    }

}