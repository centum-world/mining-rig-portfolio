// HomePage.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Heropage from "./Heropage";

const HomePage = () => {
  return (
    <div className="">
      <div className=" overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
