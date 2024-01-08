import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Landing from "./Landing";
import Supporting from "./Supporting";

export const DemoSection = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { selectedColor } = useSelector((state) => state.colors);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className="bg-gray-50 p-4">
      <div className="flex items-center justify-center flex-col space-y-4">
        <div className="text-gray-500">DEMO PAGES</div>
        <div className="text-gray-700 text-5xl font-semibold">
          Webbee in action
        </div>
        <div className="text-gray-500 text-2xl font-sans">
          All examples you find below are included in the download package.
        </div>
        <div className="flex gap-4">
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
          <Button
            onClick={handleMenuClick}
            style={{
              background: selectedColor,
              cursor: "pointer",
              color: "white",
            }}
          >
            View documents
          </Button>
        </div>
      </div>
      <div>
        <Supporting />
      </div>
      <div>
        <Landing />
      </div>
    </div>
  );
};
