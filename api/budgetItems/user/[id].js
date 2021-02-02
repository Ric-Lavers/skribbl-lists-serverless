const cors = require("micro-cors")();

import { findUser } from "../../models/user.model";

module.exports = cors(async (req, res) => {
  try {
    const user = await findUser(req.query.id);

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
