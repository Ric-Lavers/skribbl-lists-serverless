import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const demoSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  created_on: {
    type: Date,
    default: Date.now
  }
});