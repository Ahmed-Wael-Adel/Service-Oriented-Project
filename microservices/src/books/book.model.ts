/* eslint-disable prettier/prettier */
import { Schema,Document,model } from 'mongoose';

export interface Book extends Document {
  readonly name: string;
  readonly description: string;
  readonly price: Number;
}

export const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

export const BookModel = model<Book>('ProductSchema',BookSchema);