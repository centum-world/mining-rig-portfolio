import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import rocket from "../assets/png/Rocket-2.gif";

const HeroSection = () => {
  const { selectedColor } = useSelector((state) => state.colors);

  return (
    <section className="flex md:flex flex-col md:flex-row  bg-gray-50 h-[90vh]  p-6">
      <div className="gap-10 flex items-center justify-center md:w-[50%] w-full md:pb-24 md:pl-24  slide-in-left">
        <div className="space-y-6">
          <h1 className="md:text-6xl text-5xl font-bold text-gray-700 font-sans">
            Welcome to <br />
            <span
              style={{
                color: selectedColor,
              }}
            >
              Centum World
            </span>
          </h1>
          <p className="text-gray-500 flex text-start md:text-2xl  font-sans">
            Your Success, Our Priority: Join the journey to unparalleled success
            with the assurance of our unwavering commitment to your prosperity!
          </p>
          <div className="flex md:flex-row flex-col gap-4">
            <Button
              onClick={() => {}}
              style={{
                background: selectedColor,
                cursor: "pointer",
                color: "white",
              }}
            >
              Purchase now
            </Button>
            <Button
              variant="outlined"
              onClick={() => {}}
              style={{
                borderColor: selectedColor,
                cursor: "pointer",
                color: selectedColor,
              }}
            >
              View Documentation
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-[50%] w-full">
        <img src={rocket} alt="heroImg" className="md:w-3/4" />
      </div>
    </section>
  );
};

export default HeroSection;
