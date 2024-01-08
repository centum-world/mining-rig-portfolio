import { Button } from "@mui/material";
import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";

const Heropage = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <Features />
    </div>
  );
};

export default Heropage;
