import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Typed from "typed.js";
import rocket from "../assets/png/Rocket-2.gif";

const HeroSection = () => {
  const { selectedColor } = useSelector((state) => state.colors);

  useEffect(() => {
    const options = {
      strings: ["Centum World"],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 100,
      showCursor: true,
      cursorChar: "&nbsp",
      loop: true,
    };

    const typed = new Typed("#typed-text", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row  bg-gray-50 h-[90vh] p-4">
      <div className="gap-10 flex items-center justify-center w-[50%] my-auto mx-auto p-10 mt-10 slide-in-left">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-gray-700 font-sans">
            Welcome to <br />
            <span
              id="typed-text"
              style={{
                color: selectedColor,
              }}
            >
              Centum World
            </span>
          </h1>
          <p className="text-gray-500 flex text-start text-2xl font-sans">
            Your Success, Our Priority: Join the journey to unparalleled success
            with the assurance of our unwavering commitment to your prosperity!
          </p>
          <div className="flex gap-4">
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
      <div className="flex items-center justify-center w-[50%]">
        <img src={rocket} alt="heroImg" className="w-3/4 " />
      </div>
    </section>
  );
};

export default HeroSection;
