import { type } from "os";

export interface Country {
  name: string;
  users: Number;
}

export type AddCountry = (country: Country) => void;
