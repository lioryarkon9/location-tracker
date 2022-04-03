import React from "react";
import styled from "styled-components";

import { Country } from "../types";
import { theme } from "../theme";

import countriesList from "../response.mock.json";

interface Props {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
}

function getCountries(): Promise<Country[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(countriesList), 1500)
  );
}

function getTotalUsers(countries: Country[]): number {
  return countries.reduce((sumUsers, country) => sumUsers += country.users, 0);
}

function Overview({ countries, setCountries }: Props): JSX.Element {
  const totalUsers = getTotalUsers(countries ?? []);

  async function fetchCountries() {
    try {
      return await getCountries();
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    async function initializePage() {
      const response = await fetchCountries();

      setCountries(response);
    }

    initializePage();
  }, []);

  return (
    <div>
      <TotalUsers>
        Total users: {totalUsers}
      </TotalUsers>
      {countries?.map((country) => (
        <div key={country.name}>{country.name}</div>
      ))}
    </div>
  );
}

const TotalUsers = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 1px 1px ${theme.colors.totalUsersBoxBorder};
  background-color: ${theme.colors.totalUsersBoxBackground};
  padding: 20px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: block
  }
`;

export default Overview;
