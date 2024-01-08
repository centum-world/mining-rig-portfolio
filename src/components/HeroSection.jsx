import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import rocket from "../assets/png/rocket.png";

const HeroSection = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { selectedColor } = useSelector((state) => state.colors);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <section className="flex bg-gray-50 h-[90vh]">
      <div className=" gap-10 flex  items-center justify-center w-[50%] mb-32">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold  text-gray-700 font-sans ">
            Turn your ideas <br /> into a success.
          </h1>
          <p className="text-gray-500 text-2xl font-sans">
            Webbee will make your product look modern <br /> professional while
            saving you precious time.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={handleMenuClick}
              style={{
                background: selectedColor,
                cursor: "pointer",
                color: "white",
              }}
            >
              Purhcase now
            </Button>
            <Button
              onClick={handleMenuClick}
              style={{
                background: selectedColor,
                cursor: "pointer",
                color: "white",
              }}
            >
              View Docmentation
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[50%]">
        <img src={rocket} alt="heroImg" className="w-3/4" />
      </div>
    </section>
  );
};

export default HeroSection;
