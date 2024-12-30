import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service'; // Path to your BooksService

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // GET all books
  @Get()
  async findAll() {
    return this.booksService.findAll();
  }

  // POST create a new book
  @Post()
  async create(@Body() createBookDto: { title: string; author: string; publishedYear: number }) {
    return this.booksService.create(createBookDto);
  }

  // PUT update a book
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: { title?: string; author?: string; publishedYear?: number }
  ) {
    return this.booksService.update(id, updateBookDto);
  }

  // DELETE a book
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
