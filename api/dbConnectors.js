require("dotenv").config();
const mongoose = require("mongoose");

const {
  demoSchema,
  wordSchema,
  groupSchema,
  teamSchema,
  ipSchema,
  budgetItem,
} = require("./mongoSchemas");

console.log(process.env);
var MONGO_URI =
  "mongodb+srv://ric_lavers:ric123@cluster0.0yqzc.mongodb.net/loops?retryWrites=true&w=majority" ||
  "mongodb://parkham:Boostbeat26@ds143131.mlab.com:43131/skribbl" ||
  "mongodb://localhost/demo";

if (process.env.NODE_ENV === "development") {
  MONGO_URI = "mongodb://localhost/demo";
}
//  else {
//   MONGO_URI = process.env.MONGO_URI || process.env.PROD_MONGO_URI
// }

//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Demo = mongoose.model("demo", demoSchema);
const Word = mongoose.model("word", wordSchema);
const Group = mongoose.model("group", groupSchema);
const Team = mongoose.model("team", teamSchema);
const IP = mongoose.model("ip", ipSchema);
const BudgetItem = mongoose.model("budgetItem", budgetItem);

export { Demo, Word, Group, Team, IP, BudgetItem };
