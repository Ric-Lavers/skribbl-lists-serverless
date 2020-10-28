import { Team } from "../dbConnectors"

export const createTeam = async (data) => {
  console.log("create team")
  const newTeam = new Team(data)
  await newTeam.save()

  return newTeam
}

export const allTeams = async () => {
  console.log("all teams")
  const teams = await Team.find({})

  return teams
}

export const updateTeam = async (data) => {
  console.log("update team")
  await Team.updateOne({ _id: data._id }, data, { upsert: true })
  const updatedTeam = await Team.findById(data._id)

  return updatedTeam
}
