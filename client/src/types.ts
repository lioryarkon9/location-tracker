import { type } from "os";

export interface UsersInCountry {
  country: string;
  users: number;
}

export type AddUsersInCountry = (usersInCountry: UsersInCountry) => void;
