export interface User {
  id: number;
  name: string;
}

export interface Team {
  leader: User;
  members: User[];
  score: null | number;
}