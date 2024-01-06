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

  const colorButtons = ["#00AB55", "#FF6347", "#4169E1", "#FFD700", "#800080"];

  return (
    <div className="flex w-full p-2 shadow-md justify-between">
      <div className="flex w-64 items-center flex-row-reverse">
        <img src={logo} alt="Dummy Logo" className="h-14 w-14" />
        <Drawer />
      </div>
      <div className="flex gap-5 w-2/5 items-center relative">
        <div className="flex gap-2 items-center relative">
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
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        <Link to="/about" className="cursor-pointer">
          About
        </Link>
        <Link to="/contact" className="cursor-pointer">
          Contact
        </Link>
        <Link to="/documentation" className="cursor-pointer">
          Documentation
        </Link>
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
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 4</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
