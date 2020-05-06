import mongoose from "mongoose"

import {
  wordSchema
} from './word.schema'


const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)

export const groupSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  words: [{
    type: mongoose.ObjectId,
    ref: 'word',
    index: true,
  }],
  created_on: {
    type: Date,
    default: Date.now(),
  },
})