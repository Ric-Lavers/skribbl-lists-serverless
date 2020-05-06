import mongoose from "mongoose"

const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)

export const wordSchema = new Schema({
  groupId: String,
  word: {
    type: String,
    unique: true
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
})