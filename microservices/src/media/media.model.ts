/* eslint-disable prettier/prettier */
import { Schema,Document,model } from 'mongoose';

export interface Media extends Document {
  readonly name: string;
  readonly publisher: string;
  readonly description: string;
  readonly type: string;
  readonly price: number;
}

export const MediaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

export const MediaModel = model<Media>('Media', MediaSchema);