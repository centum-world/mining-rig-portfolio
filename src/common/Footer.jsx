import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/png/clogo.png";

const Footer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { selectedColor } = useSelector((state) => state.colors);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="p-4 space-y-10">
      <div className="flex md:flex-row flex-col items-center justify-between space-y-4">
        <div>
          <img src={logo} alt="Dummy Logo" className="h-14 w-14" />
        </div>
        <div className="flex  md:flex-row flex-col gap-6">
          <Button
            onClick={handleMenuClick}
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
            onClick={() => {}}
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
        <div className="text-center font-semibold font-tomorrow text-gray-800">
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
