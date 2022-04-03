import React from "react";
import styled from "styled-components";

import { UsersInCountry } from "../types";
import { theme } from "../theme";

import usersInCountriesMock from "../response.mock.json";

interface Props {
  usersInCountries: UsersInCountry[];
  setUsersInCountries: (countries: UsersInCountry[]) => void;
}

function getUsersInCountries(): Promise<UsersInCountry[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(usersInCountriesMock), 1500)
  );
}

function getTotalUsers(usersInCountries: UsersInCountry[]): number {
  return usersInCountries.reduce(
    (sumUsers, usersInCountry) => (sumUsers += usersInCountry.users),
    0
  );
}

function Overview({
  usersInCountries,
  setUsersInCountries,
}: Props): JSX.Element {
  const totalUsers = getTotalUsers(usersInCountries ?? []);

  async function fetchUsersInCountries() {
    try {
      return await getUsersInCountries();
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    async function initializePage() {
      const response = await fetchUsersInCountries();

      setUsersInCountries(response);
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
