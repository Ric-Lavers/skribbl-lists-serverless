const cors = require("micro-cors")()

import { allTeams } from "../models/team.model"

module.exports = cors(async (req, res) => {
  try {
    const teams = await allTeams()

    res.send(teams)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})
