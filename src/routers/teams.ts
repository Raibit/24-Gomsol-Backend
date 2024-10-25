import { Router } from "express";
import { getTeams } from "../db/db";

export const TeamsRouter = Router();

TeamsRouter.get("/", (req, res) => {
  res.status(200).json(getTeams())
})