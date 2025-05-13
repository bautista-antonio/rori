export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserName = Pick<User, "name">;
