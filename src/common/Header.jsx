import React from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import logo from "../assets/png/clogo.png";
import Drawer from "./Drawer";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex w-full p-2 shadow-md justify-between">
      <div className="flex w-64 items-center flex-row-reverse">
        <img src={logo} alt="Dummy Logo" className="h-14 w-14" />
        <Drawer />
      </div>
      <div className="flex gap-5 w-2/5 items-center relative">
        <Link to="/" className="cursor-pointer">
          Hero Page
        </Link>
        <Link to="/documentation" className="cursor-pointer">
          Documentation
        </Link>
        <Button
          aria-controls="login-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          style={{background:"#00AB55", cursor:"pointer", color:"white"}}
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
