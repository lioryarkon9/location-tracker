import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import { Country } from "../types";

import Layout from "./Layout";
import Overview from "./Overview";
import Add from "./Add";

import countriesList from "../response.mock.json";

function App(): JSX.Element {
  const [countries, setCountries] = React.useState<null | Country[]>(null);

  function addCountry(country: Country): void {
    setCountries([...countries, country]);
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/add" element={<Add addCountry={addCountry} />} />
          <Route
            path="/overview"
            element={
              <Overview countries={countries} setCountries={setCountries} />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
