import { IP } from "../dbConnectors";

const replaceIP = async (ipData) => {
  let newIP = await IP.findOneAndUpdate({}, ipData, {
    new: true,
    upsert: true,
  });
  console.log(newIP);
  await newIP.save();
  return newIP;
};

const getIP = async () => {
  try {
    let ips = await IP.find();

    return ips;
  } catch (err) {
    return err;
  }
};

export { replaceIP, getIP };
