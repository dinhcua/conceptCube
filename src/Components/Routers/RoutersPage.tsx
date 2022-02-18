import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Header from "../Common/Header/Header";
import Home from "../Pages/Home/Home";
import Works from "../Pages/Works/Works";
import Contact from "../Pages/Contact/Contact";
import Teams from "../Pages/Teams/Teams";
const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
