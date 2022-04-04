import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import { UsersByCountry } from "../types";

import Layout from "./Layout";
import Overview from "./Overview";
import Add from "./Add";

function App(): JSX.Element {
  const [usersByCountries, setUsersByCountries] = React.useState<
    null | UsersByCountry[]
  >(null);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/add" element={<Add />} />
          <Route
            path="/overview"
            element={
              <Overview
                usersInCountries={usersByCountries}
                setUsersByCountries={setUsersByCountries}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
