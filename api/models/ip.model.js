import { IP } from "../dbConnectors"

const replaceIP = async (ipData) => {
  try {
    let newIP = await IP.findOneAndUpdate({},ipData, {
      new: true,
      upsert: true
    })
    console.log(newIP);
    await newIP.save()
    return newIP
  }catch (err){
    return err
  }
}

const getIP = async () => {
  try {
    let ips = await IP.find()

    return ips
  }catch (err){
    return err
  }
}

export {
  replaceIP,
  getIP
}