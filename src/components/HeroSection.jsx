import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import rocket from "../assets/png/Rocket-2.gif";
import brochurePDF from '../assets/pdf/brochure.pdf';
import { saveAs } from 'file-saver';

const HeroSection = () => {
  const { selectedColor } = useSelector((state) => state.colors);

  const handleDownload = () => {
    const pdfFileName = 'brochure.pdf';
    saveAs(brochurePDF, pdfFileName);
  };

  return (
    <section className="flex  md:flex flex-col md:flex-row  bg-gray-50 md:h-[90vh]  p-6">
      <div className="gap-10 flex items-center justify-center md:w-[50%] w-full md:pb-24 md:pl-24  slide-in-left">
        <div className="space-y-6">
          <div className="md:text-6xl  text-5xl font-bold text-gray-700 font-sans">
            Welcome to <br />
            <span
              style={{
                color: selectedColor,
              }}
            >
              Centum World
            </span>
          </div>

          <p className="text-gray-500 flex text-start md:text-2xl  font-sans">
            CRYPTO MUTUAL RIG MINING INFRASTRUCTURE DEVELOPMENT AND SERVICES
            PARTNERSHIP PROGRAM(Iaas)
          </p>
          <div
            style={{
              color: selectedColor,
            }}
            className=""
          >
            Be The Smart Rig Partner and maximize Your Liquidity{" "}
          </div>
          <div className="flex md:flex-row flex-col gap-4 w-full">
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
              onClick={handleDownload}
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
