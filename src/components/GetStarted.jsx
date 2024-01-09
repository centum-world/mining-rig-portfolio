import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const GetStarted = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { selectedColor } = useSelector((state) => state.colors);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <div className="text-gray-500 text-center">GET STARTED</div>
      <div className="md:text-5xl  text-4xl text-gray-700 font-semibold text-center">
        Get started with Webbee today
      </div>
      <div className="text-gray-500 md:text-2xl text-center font-sans mb-10 ">
        Build a beautiful, modern website with flexible, fully customizable,
        atomic Material-UI components.
      </div>
      <div>
        <Button
          onClick={handleMenuClick}
          style={{
            background: selectedColor,
            cursor: "pointer",
            color: "white",
          }}
        >
          Purchase now
        </Button>
      </div>
      <div className="w-full border-t border-gray-300"></div>
    </div>
  );
};

export default GetStarted;
