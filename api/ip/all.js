const cors = require("micro-cors")()

import { getIP } from "../models/ip.model"

module.exports = cors(async (req, res) => {
  try {
    const ips = await getIP()

    res.send(ips)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})
