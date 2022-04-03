import { type } from "os";

export interface Country {
  name: string;
  users: number;
}

export type AddCountry = (country: Country) => void;
