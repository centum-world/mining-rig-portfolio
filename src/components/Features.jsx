import React from "react";
import { Button } from "@mui/material";
import purchase from "../assets/png/purchase.png";
import { useSelector } from "react-redux";
import FeaturesCard from "./FeaturesCard";
import World from "../assets/png/World.gif";
import World1 from "../assets/png/World1.gif";

import {
  AirplayOutlined,
  MonetizationOnOutlined, // Change to a different icon
  ComputerOutlined,// Change to a different icon
} from "@mui/icons-material";
import { selectDarkMode } from "../redux/darkModeSlice";

const FeatureCard = ({ icon, title, description ,darkModeEnabled}) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-60 w-full space-y-3 slide-in-left1">
      <div className="bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">
        {icon}
      </div>
      <div className={`${darkModeEnabled ? 'text-white ': 'text-gray-700' } text-2xl text-center `}>{title}</div>
      <p className={`${darkModeEnabled ? 'text-gray-400': 'text-gray-500' } text-center font-roboto `}>{description}</p>
    </div>
  );
};


const Features = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const darkModeEnabled = useSelector(selectDarkMode);
  
  const handlePurchaseNow = () => {
    window.open("https://apps.centumworldrig.com/mininglogin", "_blank");
  };
  
  const featuresData = [
    {
      icon: <AirplayOutlined className="text-blue-500" size={24} />,
      title: "Distribution Management Ecosystem (DMS)",
      description:
      "It refers to Distribution Management Ecosystem. We aim that we work, we earn and we share.",
    },
    {
      icon: <MonetizationOnOutlined className="text-green-500" size={24} />, // Change to a different icon
      title: "Infrastructure as a Services (IaaS)",
      description:
      "It refers to Infrastructure as a Service (IaaS). We build such a relationship with technology that grows rapidly and dynamically with us.",
    },
    {
      icon: <ComputerOutlined className="text-yellow-500" size={24} />, // Change to a different icon
      title: "GPU MINING RIG",
      description:
      "GPU states the Graphics Processing Unit. It’s a technology that assists in the development of Infrastructure as a Service (IaaS) with great growth and efficiency.",
    },
  ];


  const heroWorld = darkModeEnabled ? World1 : World
  
  return (
    <div
    className={`${
      darkModeEnabled ? "bg-gray-800" : "bg-white"
      } flex flex-col items-center space-y-10 p-4`}
    >
      <div className="flex md:flex-row flex-col items-center w-full font-tomorrow ">
        {featuresData.map((data, index) => (
          <FeatureCard
            key={index}
            icon={data.icon}
            title={data.title}
            description={data.description}
            darkModeEnabled ={darkModeEnabled}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <img src={heroWorld} alt="world gif" />
        <div className={`${darkModeEnabled ? 'text-gray-400':'text-gray-600 '}  text-xl font-roboto `}>FEATURES</div>
        <div className={`${darkModeEnabled ? 'text-white':'text-gray-700'} md:text-5xl text-4xl  font-semibold text-center font-roboto `}>
          Experience the Power of Crypto
          <br /> Advanced Mutual RIG with Us
        </div>
        {/* <div className="text-gray-500 md:text-xl font-medium text-center font-calibri "> */}
        <div className={`${darkModeEnabled ? 'text-gray-400' : 'text-gray-500'} md:text-xl font-medium text-center font-calibri`}>
          Superior Performance and Efficiency Our crypto mutual RIG is equipped
          with state-of-the-art GPU technology,
          <br /> ensuring exceptional performance and efficiency in
          cryptocurrency mining.
        </div>

        <Button
          onClick={handlePurchaseNow}
          style={{
            background: selectedColor,
            cursor: "pointer",
            color: "white",
          }}
        >
          Add liquidity
        </Button>
        <img src={purchase} alt="purchase" className="md:w-1/3 w-full" />
      </div>
      <div className="">
        <FeaturesCard />
      </div>
    </div>
  );
};

export default Features;
