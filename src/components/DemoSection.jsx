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
        <div className="text-gray-500 pt-10 text-center">DEMO PAGES</div>
        <div className="text-gray-700 md:text-5xl text-4xl font-semibold text-center">
          Webbee in action
        </div>
        <div className="text-gray-500 md:text-2xl font-sans text-center">
          All examples you find below are included in the download package.
        </div>
        <div className="flex md:flex-row flex-col  gap-4 md:w-auto w-full">
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
            variant="outlined"
            onClick={() => {}}
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
