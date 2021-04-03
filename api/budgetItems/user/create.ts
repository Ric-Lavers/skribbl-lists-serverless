import cors from "../../../utils/microCors";
import { updateUser } from "../../models/user.model";
import { allBudgetItems } from "../../models/budget-items.model";
import { makeUserVotes } from "./utils/makeUserVotes";

module.exports = cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.status(200);
    res.send();
    return;
  }

  try {
    const user = await updateUser(req.body);
    let items = await allBudgetItems();
    user.votes = makeUserVotes(items, user._id);

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});
