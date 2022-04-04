import { UsersByCountry } from "./types";

export function getTotalUsers(usersByCountries: UsersByCountry[]): number {
  return usersByCountries.reduce(
    (sumUsers, usersByCountry) => (sumUsers += usersByCountry.users),
    0
  );
}

type UiUsersByCountries = [string, number][];

export function getUiUSersByCountries(
  usersByCountries: UsersByCountry[]
): UiUsersByCountries | [] {
  if (Array.isArray(usersByCountries)) {
    return usersByCountries.map((usersByCountry) => [
      usersByCountry.country,
      usersByCountry.users,
    ]);
  }

  return [];
}
