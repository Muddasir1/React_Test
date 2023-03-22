import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Public from "./Public";

import Home from "../Pages/Home";
import EmployeeUpdate from "../Pages/EmployeeUpdate";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Public>
              <Home />
            </Public>
          }
        />
        <Route
          path="/update"
          element={
            <Public>
              <EmployeeUpdate />
            </Public>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
