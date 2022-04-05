import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import Layout from "./Layout";
import Overview from "./Overview.page";
import Add from "./Add.page";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/add" element={<Add />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
