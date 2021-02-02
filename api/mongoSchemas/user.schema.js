import mongoose from "mongoose";

const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);

export const userSchema = new Schema({
  name: {
    type: String,
  },
  number: { type: String },
  created_on: {
    type: Date,
    default: Date.now(),
  },
});
