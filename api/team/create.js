const cors = require("micro-cors")()

import { createTeam } from "../models/team.model"

module.exports = cors(async (req, res) => {
  try {
    const team = await createTeam(JSON.parse(req.body))

    res.send(team)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})
