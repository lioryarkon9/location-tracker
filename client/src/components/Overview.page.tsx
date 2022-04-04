import React from "react";
import styled from "styled-components";
import Chart from "react-google-charts";

import { UsersByCountry } from "../types";
import * as utils from "../utils";
import * as apis from "../apis";
import { theme } from "../theme";

interface Props {
  usersByCountries: UsersByCountry[];
  setUsersByCountries: (countries: UsersByCountry[]) => void;
}

function Overview({
  usersByCountries,
  setUsersByCountries,
}: Props): JSX.Element {
  const totalUsers = utils.getTotalUsers(usersByCountries ?? []);
  const uiUsersByCountries = utils.getUiUSersByCountries(usersByCountries);

  async function fetchUsersByCountries() {
    try {
      const response = await apis.getUsersByCountries();

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
