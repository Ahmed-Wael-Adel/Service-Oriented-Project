import { Injectable,Inject ,NotFoundException} from '@nestjs/common';
import { Model } from 'mongoose';
import { Book} from './book.schema'; // Path to your Book schema

@Injectable()
export class BooksService {
  constructor(
    @Inject('BookModel') private  readonly bookModel: Model<Book>, // Injecting model with the connection name
  ) {}
  
  // Find all books
  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  // Create a new book
  async create(createBookDto: { title: string; author: string; publishedYear: number }): Promise<Book> {
    const newBook = new this.bookModel(createBookDto);
    return newBook.save();
  }

  // Update a book
  async update(id: string, updateBookDto: { title?: string; author?: string; publishedYear?: number }): Promise<Book> {
    const book = await this.bookModel.findByIdAndUpdate(id, updateBookDto, { new: true });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  // Delete a book
  async remove(id: string): Promise<{ message: string }> {
    const deletedBook = await this.bookModel.findByIdAndDelete(id);
    if (!deletedBook) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return { message: `Book with ID ${id} deleted successfully` };
  }
}
