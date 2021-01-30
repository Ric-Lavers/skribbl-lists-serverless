const cors = require("micro-cors")();

import { allBudgetItems } from "../models/budget-items.model";

module.exports = cors(async (req, res) => {
  try {
    let items = await allBudgetItems();

    res.send(items);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
