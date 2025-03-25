export interface User {
  id: number;
  name: string;
}

export interface Team {
  members: User[];
  score: null | number;
  note: string;
}

export interface ManagingData { 
  password: string, 
  leader: string, 
  score: string 
}
