require("dotenv").config()
const mongoose = require("mongoose")

const {
  demoSchema,
  wordSchema,
  groupSchema
} = require("./mongoSchemas")

console.log(process.env)
var MONGO_URI = process.env.MONGO_URI
// if (process.env.NODE_ENV === "development") {
//   MONGO_URI = process.env.PROD_MONGO_URI //DEVELOPMENT_MONGO_URI
// } else {
//   MONGO_URI = process.env.MONGO_URI || process.env.PROD_MONGO_URI
// }
console.log({
  MONGO_URI: MONGO_URI
});

//Mongo connection
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Demo = mongoose.model("demo", demoSchema)
const Word = mongoose.model("word", wordSchema)
const Group = mongoose.model("group", groupSchema)

export {
  Demo,
  Word,
  Group
}