import React from "react";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import { Button } from "@mui/material";
import purchase from "../assets/png/purchase.png";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="shadow-xl p-4 flex flex-col items-center justify-center h-60 w-96 space-y-3">
      <div className="bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">
        <AirlineStopsIcon />
      </div>
      <div className="text-2xl text-center">{title}</div>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center justify-center gap-32">
        <FeatureCard
          title="Built for developers"
          description="Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components."
        />
        <FeatureCard
          title="Designed to be modern"
          description="Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful."
        />
        <FeatureCard
          title="Documentation for everything"
          description="We've written extensive documentation for components and tools, so you never have to reverse engineer anything."
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-gray-500">FEATURES</div>
        <div className="text-4xl font-semibold">The powerful and flexible theme for all kinds of businesses</div>
        <div>
          Build a beautiful, modern website with flexible, fully customizable,
          atomic Material-UI components. An experience you'd expect from a
          design system.
        </div>
        <div>
          <Button>Purchase now</Button>
        </div>

        <img src={purchase} alt="purchase" className="w-1/2" />
      </div>
    </div>
  );
};

export default Features;
