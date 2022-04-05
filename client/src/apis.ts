import { UsersByCountry } from "./types";
import usersByCountriesMock from "./response.mock.json";

interface MockResponse {
  json: () => UsersByCountry[];
}

export function getUsersByCountries(): Promise<Response | MockResponse> {
  // return new Promise((resolve) =>
  //   setTimeout(() => resolve({ json: () => usersByCountriesMock }), 1500)
  // );
  return fetch("http://52.3.78.233/users");
}

export async function addUsersByCountry(
  country: string,
  users: string
): Promise<any> {
  const response = await fetch("http://52.3.78.233/users", {
    method: "POST",
    body: JSON.stringify({
      country,
      users: parseInt(users),
    }),
  });

  return response.json();
}
