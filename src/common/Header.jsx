import React from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import logo from "../assets/png/clogo.png";
import Drawer from "./Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedColor } from "../redux/colorSlice";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import brochurePDF from "../assets/pdf/brochure.pdf";
import { saveAs } from "file-saver";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { selectedColor } = useSelector((state) => state.colors);

  const dispatch = useDispatch();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleColorButtonClick = (color) => {
    dispatch(setSelectedColor(color));
    handleMenuClose();
  };

  const handleDownload = () => {
    const pdfFileName = "brochure.pdf";
    saveAs(brochurePDF, pdfFileName);
  };
  const handlePartner = () => {
    window.open("http://apps.centumworldrig.com/mininglogin", "_blank");
  };
  const handleMember = () => {
    window.open("http://apps.centumworldrig.com/memberlogin", "_blank");
  };
  const handleFranchise = () => {
    window.open("http://apps.centumworldrig.com/franchiselogin", "_blank");
  };
  const handleBmm = () => {
    window.open("http://apps.centumworldrig.com/statelogin", "_blank");
  };

  const colorButtons = ["#00AB55", "#4169E1", "#800080", "#C2185B", "#303F9F"];

  return (
    <div className="flex  w-full p-2 h-[10vh] gap-4 shadow-2xl md:justify-between">
      <div className="flex md:w-64 w-26   items-center justify-center flex-row-reverse">
        <img
          src={logo}
          alt="Dummy Logo"
          className="md:h-14 h-12 md:w-14 w-12"
        />
        <Drawer />
      </div>
      <div className="flex md:gap-5 gap-1 w-2/5 items-center relative">
        <div className="flex gap-2 items-center relative bg-gray-100 rounded-3xl p-2">
          {colorButtons.map((color, index) => (
            <div
              key={index}
              className="color-button"
              style={{
                background: color,
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => handleColorButtonClick(color)}
            >
              {selectedColor === color && (
                <CheckIcon
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    height: "14px",
                    width: "14px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <span style={{ color: selectedColor }}>
          <DarkModeOutlinedIcon />
        </span>

        <Link to="/" className="cursor-pointer  md:flex hidden">
          Home
        </Link>
        <div onClick={handleDownload} className="cursor-pointer md:flex hidden">
          Documentation
        </div>

        <div className="md:flex hidden">
          <Button
            aria-controls="login-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            style={{
              background: selectedColor,
              cursor: "pointer",
              color: "white",
            }}
          >
            Login
          </Button>
        </div>
        <Menu
          id="login-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handlePartner}>Partner</MenuItem>
          <MenuItem onClick={handleMember}>Referral</MenuItem>
          <MenuItem onClick={handleFranchise}>Franchise</MenuItem>
          <MenuItem onClick={handleBmm}>BMM</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
