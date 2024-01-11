import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Landing from "./DemoFeatures";
import Supporting from "./Supporting";
import brochurePDF from '../assets/pdf/brochure.pdf';
import { saveAs } from 'file-saver';

export const DemoSection = () => {

  const { selectedColor } = useSelector((state) => state.colors);

  const handlePurchaseNow = () => {
    window.open("https://apps.centumworldrig.com/mininglogin", "_blank");
  };


  const handleDownload = () => {
    const pdfFileName = 'brochure.pdf';
    saveAs(brochurePDF, pdfFileName);
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="flex items-center justify-center flex-col space-y-4">
        {/* <div className="text-gray-500 pt-10 text-center">DEMO PAGES</div> */}
        <div className="text-gray-700  md:text-4xl text-3xl font-semibold font-roboto text-center pt-10">
          DESTRIBUTION MANAGEMENT ECOSYSTEM (DMS)
        </div>
        <div className="text-gray-500 md:text-2xl font-calibri text-center">
          Optimize operations with our Management System. Streamlined,
          cost-effective, and precise control for<br/> excellence in your industry.
          Join us for unparalleled efficiency!
        </div>
        <div className="flex md:flex-row flex-col  gap-4 md:w-auto w-full">
          <Button
            onClick={handlePurchaseNow}
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
            View documents
          </Button>
        </div>
      </div>
      <div>
        <Landing />
      </div>
      <div>
        <Supporting />
      </div>
    </div>
  );
};
