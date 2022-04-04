import React from "react";
import styled from "styled-components";

import { UsersByCountry } from "../types";
import { theme } from "../theme";

import usersByCountriesMock from "../response.mock.json";

interface Props {
  usersInCountries: UsersByCountry[];
  setUsersByCountries: (countries: UsersByCountry[]) => void;
}

interface MockResponse {
  json: () => UsersByCountry[];
}

function getUsersByCountries(): Promise<Response | MockResponse> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ json: () => usersByCountriesMock }), 1500)
  );
  // return fetch("http://52.3.78.233/users");
}

function getTotalUsers(usersInCountries: UsersByCountry[]): number {
  return usersInCountries.reduce(
    (sumUsers, usersInCountry) => (sumUsers += usersInCountry.users),
    0
  );
}

function Overview({
  usersInCountries,
  setUsersByCountries,
}: Props): JSX.Element {
  const totalUsers = getTotalUsers(usersInCountries ?? []);

  async function fetchUsersByCountries() {
    try {
      const response = await getUsersByCountries();

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    async function initializePage() {
      const response = await fetchUsersByCountries();

      setUsersByCountries(response);
    }

    initializePage();
  }, []);

  return (
    <>
      <TotalUsers>Total users: {totalUsers}</TotalUsers>
      {usersInCountries?.map((usersInCountry) => (
        <div key={usersInCountry.country}>{usersInCountry.users}</div>
      ))}
    </>
  );
}

const TotalUsers = styled.div`
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.colors.boxBackground};
  padding: 20px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export default Overview;
