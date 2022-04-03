import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import { UsersInCountry } from "../types";

import Layout from "./Layout";
import Overview from "./Overview";
import Add from "./Add";

import countriesList from "../response.mock.json";

function App(): JSX.Element {
  const [usersInCountries, setUsersInCountries] = React.useState<
    null | UsersInCountry[]
  >(null);

  function addUsersInCountry(usersInCountry: UsersInCountry): void {
    setUsersInCountries([...usersInCountries, usersInCountry]);
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route
            path="/add"
            element={<Add addUsersInCountry={addUsersInCountry} />}
          />
          <Route
            path="/overview"
            element={
              <Overview
                usersInCountries={usersInCountries}
                setUsersInCountries={setUsersInCountries}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
