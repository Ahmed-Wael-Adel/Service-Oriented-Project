/* eslint-disable prettier/prettier */
import { Schema,Document,model } from 'mongoose';

export interface stationery extends Document {
  readonly name: string;
  readonly description: string;
}

export const stationerySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});
export const stationeryModel = model<stationery>('stationerySchema', stationerySchema);