import { Button, IconButton } from "@mui/material";
import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material";
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
    <div className="p-4 md:p-8 space-y-4 bg-gray-700 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4">
        <div className="flex items-center justify-center md:justify-start gap-4">
          <img src={logo} alt="Dummy Logo" className="h-14 w-14" />
          <h3 className="text-2xl font-bold">Centum World</h3>
        </div>

        <div className="flex md:flex-row flex-col gap-6">
          <Button
            onClick={handleDownload}
            style={{
              background: selectedColor,
              cursor: "pointer",
              color: "white",
            }}
          >
            View Documentation
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
            Add liquidity
          </Button>
        </div>
      </div>
      <div className="mx-auto space-y-4  flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="flex flex-col items-start mt-4 md:mt-0 md:w-1/3 ">
          <h4 className="text-lg font-semibold mb-2 ml-2">Connect With Us</h4>
          <div className="flex gap-4">
            <IconButton
              target="_blank"
              href="https://twitter.com/centumworld?t=1XYIFt8eoKUo1HyZQUzd3Q&s=08"
              className="text-gray-300 hover:text-white mr-4"
              aria-label="Twitter"
              style={{ color: selectedColor }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://wwww.facebook.com/CENTUMWORLD?mibextid=ZbWKeL"
              className="text-gray-300 hover:text-white mr-4"
              aria-label="Facebook"
              style={{ color: selectedColor }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/centumworld"
              className="text-gray-300 hover:text-white"
              aria-label="LinkedIn"
              style={{ color: selectedColor }}
            >
              <LinkedIn />
            </IconButton>
          </div>
        </div>
        <div className="text-center">
          Office{" "}
          <span style={{ color: selectedColor }}>
            <br /> HSR Layout, Bangalore, Karnataka
            <br />
            NewTown,Kolkata, West Bengal <br />
            Jamshedpur, Jharkhand
          </span>
        </div>
        {/* Copyright and Disclaimer */}
        <div className="mt-4 md:w-1/3 text-center">
          <p className="text-sm">
            &copy; 2024 Centum World. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
