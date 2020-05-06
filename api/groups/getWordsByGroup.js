const cors = require("micro-cors")();
const {
  getWordsByGroup
} = require("../controllers");

module.exports = cors(getWordsByGroup);