import { Request, Router } from "express";
import { addTeams, getTeams } from "../db/db";
import { Team } from "../models/Teams";

export const ReserveRouter = Router();

function checkNumber(number: number) {
  if (Number.isNaN(number)) return false;
  if (Math.floor(number) !== number) return false;
  if (number < 1100 || number > 3500) return false;
  if (Math.floor(number / 1000) > 3) return false;
  if (Math.floor(number / 100) % 10 > 4) return false;
  if (Math.floor(number / 10) % 10 > 2) return false;
  return true;
}

function checkString(string: string) {
  return /^[가-힣]{2,4}$/.test(string)
}


ReserveRouter.post("/", (req: Request<{}, {}, Omit<Team, "score">>, res) => {
  const ids = req.body.members.map(member => member.id)
  const names = req.body.members.map(member => member.name)
  
  if (
    req.body.members.some(member => 
      member.id === 0 
      || member.name === ""
      || !checkNumber(member.id)
      || !checkString(member.name)
    ) 
    // Self-duplicated
    || new Set(ids).size !== ids.length
    || new Set(names).size !== names.length
  ) res.status(202)
  
  else if (
    req.body.members.some(member => 
      // Duplicated with already reserved data
      getTeams().some(team =>  
        team.members.some(original => original.id ===  member.id && original.name == member.name)
      )
    )
  ) res.status(200)
  
  else {
    addTeams({ ...req.body, score: null })
    res.status(201)
  }

  console.log(req.body)
  res.send()
})