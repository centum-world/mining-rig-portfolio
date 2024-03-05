import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Data1 from "../assets/png/Data1.gif";
import Data2 from "../assets/png/Data2.gif";
import brochurePDF from "../assets/pdf/brochure.pdf";

import partnerdocs from '../assets/pdf/cw-partnerdocs.pdf'
import { saveAs } from "file-saver";
import { selectDarkMode } from "../redux/darkModeSlice";

const HeroSection = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const darkModeEnabled = useSelector(selectDarkMode);

  const handleDownload = () => {
    const pdfFileName = "brochure.pdf";
    saveAs(brochurePDF, pdfFileName);
  };

    
  const downloadPartnerDocs = () => {
    const pdfFileName = "cw-partnerdocs.pdf";
    saveAs(partnerdocs, pdfFileName);
  };

  const handlePurchaseNow = () => {
    window.open("https://apps.centumworldrig.com/mininglogin", "_blank");
  };

  const heroImg = darkModeEnabled ? Data2 : Data1;

  return (
    <section
      className={`flex  md:flex flex-col md:flex-row  ${
        darkModeEnabled ? "bg-gray-900" : "bg-gray-50"
      } md:h-[90vh]  p-6`}
    >
      <div className="gap-10 flex items-center justify-center md:w-[50%] w-full md:pb-24 md:pl-24  slide-in-left">
        <div className="space-y-6">
          <div
            className={`md:text-6xl text-4xl font-bold ${
              darkModeEnabled ? "text-white" : "text-gray-700 "
            } font-tomorrow`}
          >
            Welcome to <br />
            <span
              style={{
                color: selectedColor,
              }}
            >
              Centum World
              <br />
              Crypto Mutual RIG
            </span>
          </div>

          <p
            className={`${
              darkModeEnabled ? "text-gray-300" : "text-gray-500"
            } flex text-start md:text-2xl font-tomorrow  `}
          >
            Centum World offers a groundbreaking Infrastructure as a Service
            (IaaS) solution for GPU mining rig enthusiasts. With our innovative
            partnership programme, you can tap into the unlimited potential of
            cryptocurrency mining without the complexities and challenges.
          </p>
          <div className="flex md:flex-row flex-col gap-4 w-full">
            <Button
              onClick={downloadPartnerDocs}
              style={{
                background: selectedColor,
                cursor: "pointer",
                color: "white",
              }}
            >
              CW MUTUAL RIG PARTNER DOCS
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
            <Button
              onClick={handlePurchaseNow}
              style={{
                background: selectedColor,
                cursor: "pointer",
                color: "white",
              }}
            >
              Add liquidity
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-[50%] w-full">
        <img src={heroImg} alt="heroImg" className="md:w-3/4 " />
      </div>
    </section>
  );
};

export default HeroSection;
