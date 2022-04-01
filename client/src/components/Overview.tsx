import React from "react";

import { Country } from "../types";

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

function Overview({ countries, setCountries }: Props): JSX.Element {
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
      <div>Countries</div>
      {countries?.map((country) => (
        <div key={country.name}>{country.name}</div>
      ))}
    </div>
  );
}

export default Overview;
