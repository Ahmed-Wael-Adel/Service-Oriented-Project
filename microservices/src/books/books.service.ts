/* eslint-disable prettier/prettier */
import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Book } from './book.model'; 

@Injectable()
export class BookService {
  constructor(@Inject('BookModel') private readonly bookModel: Model<Book>) {}

  async create(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    return await newBook.save();
  }

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }

  async update(id: string, book: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.bookModel.deleteOne({ _id: id }).exec();
  }
}