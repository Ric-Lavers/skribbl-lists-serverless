import mongoose from "mongoose"

const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)

export const teamSchema = new Schema({
  teamName: {
    type: String,
  },
  guests: [
    {
      type: String,
    },
  ],
  numbers: [
    {
      type: String,
    },
  ],
  created_on: {
    type: Date,
    default: Date.now(),
  },
})
