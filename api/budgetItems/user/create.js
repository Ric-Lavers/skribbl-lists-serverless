const cors = require("micro-cors")();

import { updateUser } from "../../models/user.model";

module.exports = cors(async (req, res) => {
  try {
    const user = await updateUser(req.body);

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});
