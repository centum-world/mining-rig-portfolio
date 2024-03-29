import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import { DemoSection } from "../components/DemoSection";
import GetStarted from "../components/GetStarted";
import Contact from "./Contact";

const Heropage = () => {
  return (
    <div className="">
      <HeroSection />
      <Features />
      <DemoSection />
      <GetStarted />
      <Contact />
    </div>
  );
};

export default Heropage;
