const cors = require("micro-cors")();

const {
  postWord
} = require("../controllers/skribbl.controller");

module.exports = cors(postWord);