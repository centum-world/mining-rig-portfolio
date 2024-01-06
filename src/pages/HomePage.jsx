// HomePage.jsx
import React from "react";
import { Outlet } from "react-router-dom";

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
