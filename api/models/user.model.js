import { User } from "../dbConnectors";

export const createUser = async (data) => {
  console.log("create user");
  const newUser = new User(data);
  await newUser.save();

  return newUser;
};

export const findUser = async (id) => {
  console.log("find user");
  const { name, number, _id } = await User.findById(id);

  return { name, number, _id };
};

export const allUsers = async () => {
  console.log("all users");
  const users = await User.find({});

  return users;
};

export const updateUser = async (data) => {
  if (data._id) {
    await User.updateOne({ _id: data?._id }, data, {
      upsert: true,
    });
    const { name, number, _id } = await User.findById(data._id);
    return { name, number, _id };
  }
  const { name, number, _id } = await createUser(data);
  return { name, number, _id };
};
