import { Request, Router } from "express";
import { getTeams, saveTeams } from "../db/db";
import { ManagingData } from "../models/Teams";

export const ManagingRouter = Router();

ManagingRouter.post("/", (req: Request<{}, {}, ManagingData>, res) => {

  if (req.body.password !== process.env.PASSWORD) {
    res.status(403)
    res.send()
    return
  }

  const teams = getTeams()
  const found = teams.findIndex(team => team.members[0].name === req.body.leader)
  if (found === -1) {
    res.status(202)
    res.send()
    return
  }

  const score = parseInt(req.body.score)
  if (isNaN(score)) {
    res.status(202)
    res.send()
    return
  }

  teams[found].score = score;
  saveTeams(teams)

  res.status(200)
  res.send()
  return
})