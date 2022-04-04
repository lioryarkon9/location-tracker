import React from "react";
import styled from "styled-components";
import Chart from "react-google-charts";

import { UsersByCountry } from "../types";
import { theme } from "../theme";

import usersByCountriesMock from "../response.mock.json";

interface Props {
  usersByCountries: UsersByCountry[];
  setUsersByCountries: (countries: UsersByCountry[]) => void;
}

interface MockResponse {
  json: () => UsersByCountry[];
}

function getUsersByCountries(): Promise<Response | MockResponse> {
  // return new Promise((resolve) =>
  //   setTimeout(() => resolve({ json: () => usersByCountriesMock }), 1500)
  // );
  return fetch("http://52.3.78.233/users");
}

function getTotalUsers(usersByCountries: UsersByCountry[]): number {
  return usersByCountries.reduce(
    (sumUsers, usersByCountry) => (sumUsers += usersByCountry.users),
    0
  );
}

function Overview({
  usersByCountries,
  setUsersByCountries,
}: Props): JSX.Element {
  const totalUsers = getTotalUsers(usersByCountries ?? []);
  const uiUsersByCountries = Array.isArray(usersByCountries)
    ? usersByCountries.map((usersByCountry) => [
        usersByCountry.country,
        usersByCountry.users,
      ])
    : [];

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
      <Container>
        <Chart
          chartType="GeoChart"
          data={[["Country", "Users"], ...uiUsersByCountries]}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 10px 0;
`;

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
