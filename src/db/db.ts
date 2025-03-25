import { readFileSync, writeFileSync } from "fs";
import { Team } from "../models/Teams";

export function getTeams() {
  return JSON.parse(readFileSync("src/db/teams.json").toString()) as Team[]
}

export function saveTeams(teams: Team[]) { 
  writeFileSync("src/db/teams.json", JSON.stringify(teams, null, 2))
}

export function addTeams(team: Team) {
  const teams = getTeams()
  teams.push(team)
  saveTeams(teams)
}