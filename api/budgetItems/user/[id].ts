const cors = require("micro-cors")();

import { findUser } from "../../models/user.model";
import { allBudgetItems } from "../../models/budget-items.model";
import { makeUserVotes } from "./utils/makeUserVotes";

module.exports = cors(async (req, res) => {
  try {
    const user = await findUser(req.query.id);
    let items = await allBudgetItems();
    user.votes = makeUserVotes(items, user._id);

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
