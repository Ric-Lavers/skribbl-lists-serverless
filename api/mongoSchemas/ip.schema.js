import mongoose from "mongoose"

const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)

export const ipSchema = new Schema({
  ip: {
    type: String,
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
})
