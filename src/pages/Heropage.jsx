import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import rocket from "../assets/png/rocket.png";

const Heropage = () => {
  return (
    <>
      <HeroSection />
      <Features/>
    </>
  );
};

export default Heropage;
