const cors = require("micro-cors")()

import { replaceIP } from "../models/ip.model"

module.exports = cors(async (req, res) => {
  try {
    console.log('here',( req.body));
    const ip = await replaceIP((req.body))

    res.send(ip)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})
