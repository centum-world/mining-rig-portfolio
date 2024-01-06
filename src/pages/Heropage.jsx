import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Heropage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { selectedColor } = useSelector((state) => state.colors);

  const dispatch = useDispatch();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <section className="flex h-[90vh]">
      <div className="flex-1 gap-10 flex items-center flex-col justify-center ml-40 mb-40">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold  text-gray-700 font-sans ">
            Turn your ideas <br /> into a success.
          </h1>
          <p className="text-gray-500 text-2xl font-sans">
            Webbee will make your product look modern and professional while
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
      <div className="flex-1 flex items-center justify-center">
        centum world
      </div>
    </section>
  );
};

export default Heropage;
