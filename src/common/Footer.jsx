import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/png/clogo.png";
import brochurePDF from "../assets/pdf/brochure.pdf";
import { saveAs } from "file-saver";

const Footer = () => {
  const { selectedColor } = useSelector((state) => state.colors);

  const handlePurchaseNow = () => {
    window.open("https://apps.centumworldrig.com/mininglogin", "_blank");
  };

  const handleDownload = () => {
    const pdfFileName = "brochure.pdf";
    saveAs(brochurePDF, pdfFileName);
  };
  return (
    <div className="p-4 space-y-10">
      <div className="flex md:flex-row flex-col items-center justify-between space-y-4">
        <div>
          <img src={logo} alt="Dummy Logo" className="h-14 w-14" />
        </div>
        <div className="flex  md:flex-row flex-col gap-6">
          <Button
            onClick={handleDownload}
            style={{
              background: selectedColor,
              cursor: "pointer",
              color: "white",
            }}
          >
            Documents
          </Button>
          <Button
            variant="outlined"
            onClick={handlePurchaseNow}
            style={{
              borderColor: selectedColor,
              cursor: "pointer",
              color: selectedColor,
            }}
          >
            Purchase now
          </Button>
        </div>
      </div>
      <div className="felx flex-col justify-center items-center space-y-1">
        <div className="text-center font-semibold font-tomorrow text-gray-500">
          © 2024 CENTUM WORLD, All rights reserved
        </div>
        <div className="text-center text-gray-500 text-sm">
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for
        </div>
        <div className="text-center text-gray-500 text-sm">
          marketing purposes.
        </div>
      </div>
    </div>
  );
};

export default Footer;
