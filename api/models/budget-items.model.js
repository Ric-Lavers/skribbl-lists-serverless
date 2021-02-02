import { BudgetItem } from "../dbConnectors";

export const createBudgetItem = async (data) => {
  console.log("create Budget Item");
  const newItem = new BudgetItem(data);
  await newItem.save();

  return newItem;
};

export const allBudgetItems = async () => {
  console.log("all Budget Items");
  const items = await BudgetItem.find({});

  return items;
};

export const updateBudgetItem = async (data) => {
  console.log("update Budget Item");
  await BudgetItem.updateOne({ _id: data._id }, data, { upsert: true });
  const updatedBudgetItem = await BudgetItem.findById(data._id);

  return updatedBudgetItem;
};

export const updateBudgetScoreItem = async (data) => {
  console.log("update Budget Score Item");
  const { score, _id } = data;
  await BudgetItem.updateOne({ _id }, { score });
  const updatedBudgetItem = await BudgetItem.findById(_id);

  return updatedBudgetItem;
};
