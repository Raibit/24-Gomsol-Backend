export interface User {
  id: number;
  name: string;
}

export interface Team {
  members: User[];
  score: null | number;
}