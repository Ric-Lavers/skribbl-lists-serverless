const cors = require("micro-cors")();
import seeder from "mongoose-seed";

import { BudgetItem } from "../dbConnectors";
import { createBudgetItem } from "../models/budget-items.model";
const SeedItemData = require("../../fixtures/seed-budget-items.json");

module.exports = cors(async (req, res) => {
  try {
    if (req.query.pw !== "aeon") throw Error("Unauthorized");
    await BudgetItem.collection.drop();
    const data = await BudgetItem.create(req.body || SeedItemData);

    res.status(200).send(data);
  } catch (error) {
    res
      .status(error.message === "Unauthorized" ? 401 : 400)
      .send({ error: error.message });
  }
});
