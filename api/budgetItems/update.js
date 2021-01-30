const cors = require("micro-cors")();

import { updateBudgetItem } from "../models/budget-items.model";

module.exports = cors(async (req, res) => {
  try {
    const item = await updateBudgetItem(req.body);

    res.send(item);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
