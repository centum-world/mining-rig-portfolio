import React from "react";
import { Button } from "@mui/material";
import purchase from "../assets/png/purchase.png";
import { useSelector } from "react-redux";
import FeaturesCard from "./FeaturesCard";
import {
  AirplayOutlined,
  AttachMoney,
  Build,
  Event,
  Home,
  SportsSoccer,
} from "@mui/icons-material";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-60 w-96 space-y-3">
      <div className="bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-2xl text-center text-gray-700">{title}</div>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

const Features = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { selectedColor } = useSelector((state) => state.colors);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const featuresData = [
    {
      icon: <AirplayOutlined className="text-blue-500 mb-2" size={24} />,
      title: "Built for developers",
      description:
        "Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.",
    },
    {
      icon: <AttachMoney className="text-green-500 mb-2" size={24} />,
      title: "Designed to be modern",
      description:
        "Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.",
    },
    {
      icon: <Build className="text-yellow-500 mb-2" size={24} />,
      title: "Documentation for everything",
      description:
        "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-20 p-4">
      <div className="flex items-center justify-center gap-32">
        {featuresData.map((data, index) => (
          <FeatureCard
            key={index}
            icon={data.icon}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="text-gray-500">FEATURES</div>
        <div className="text-5xl text-gray-700 font-semibold text-center">
          The powerful and flexible theme
          <br /> for all kinds of businesses
        </div>
        <div className="text-gray-500 text-xl font-medium text-center">
          Build a beautiful, modern website with flexible, fully customizable,
          atomic Material-UI components.
          <br /> An experience you'd expect from a design system.
        </div>
        <div className="bg-[#00AB55]">
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
        <img src={purchase} alt="purchase" className="w-1/3" />
      </div>
      <div className="p-20">
        <FeaturesCard />
      </div>
    </div>
  );
};

export default Features;
