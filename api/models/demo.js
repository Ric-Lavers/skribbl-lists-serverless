import { Demo } from '../dbConnectors'

const createDemo = async ({input} ) => {
  try {
    let newDemo = new Demo({
      ...input
    });
    newDemo.id = newDemo._id
    return await newDemo.save()
  }catch (err){
    return err
  }
}

export {
	createDemo,
}