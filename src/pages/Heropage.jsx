import { Button } from "@mui/material";
import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import { DemoSection } from "../components/DemoSection";
import GetStarted from "../components/GetStarted";

const Heropage = () => {
  return (
    <div className="">
      <HeroSection />
      <Features />
      {/* <DemoSection/>
      <GetStarted/> */}
    </div>
  );
};

export default Heropage;
