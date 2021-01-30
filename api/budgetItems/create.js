const cors = require("micro-cors")();

import { createBudgetItem } from "../models/budget-items.model";

module.exports = cors(async (req, res) => {
  try {
    const item = await createBudgetItem(req.body);

    res.send(item);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
