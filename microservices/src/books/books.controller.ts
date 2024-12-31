/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BookService } from './books.service';
import { Book } from './book.model';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Post("add")
    async create(@Body() createBookDto: Book): Promise<{book: Book, message: String}> {
        const book = await this.bookService.create(createBookDto);
        return{
          book: book,
          message: "Book Added"
        }
    }

    @Get("/")
    async findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: string): Promise<Book> {
        return this.bookService.findOne(id);
    }

    @Put('update/:id')
    async update(@Param('id') id: string, @Body() updateBookDto: Book): Promise<{book: Book, message: String}> {
        const book = await this.bookService.update(id, updateBookDto);
        return{
          message: "Book Updated",
          book: book
        }
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.bookService.delete(id);
    }
}
