import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Countries from "../pages/Countries";
import CountryName from "../pages/CountryName";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/countries" element={<Countries />} />
      <Route path="/countries/:id" element={<CountryName />} />
      <Route path="*" element={<Navigate to="/countries" />} />
    </Routes>
  );
};

export default AppRouter;
