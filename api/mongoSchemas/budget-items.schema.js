import mongoose from "mongoose";

const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);

export const budgetItem = new Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    img: {
      src: String,
    },
    price: Number,
    img: {
      src: String,
    },
    score: {
      total: {
        type: Number,
        default: function () {
          return this.score.upd.length - this.score.dissd.length;
        },
      },
      upd: [String],
      dissd: [String],
    },
    created_on: {
      type: Date,
      default: Date.now(),
    },
  },
  { strict: false }
);
