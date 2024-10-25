import { Request, Router } from "express";
import { addTeams, getTeams } from "../db/db";
import { Team } from "../models/Teams";

export const ReserveRouter = Router();

ReserveRouter.post("/", (req: Request<{}, {}, Omit<Team, "score">>, res) => {
  if (getTeams().find(team => team.leader === req.body.leader)) res.status(400)
  else {
    addTeams({ ...req.body, score: null })
    res.status(200)
  }
})