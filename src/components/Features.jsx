import React from "react";
import { Button } from "@mui/material";
import purchase from "../assets/png/purchase.png";
import { useSelector } from "react-redux";
import FeaturesCard from "./FeaturesCard";
import {
  AirplayOutlined,
  MonetizationOnOutlined, // Change to a different icon
  ComputerOutlined, // Change to a different icon
} from "@mui/icons-material";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-60 w-full space-y-3 slide-in-left1">
      <div className="bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-2xl text-center text-gray-700">{title}</div>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

const Features = () => {
  const { selectedColor } = useSelector((state) => state.colors);

  const handlePurchaseNow = () => {
    window.open("https://apps.centumworldrig.com/mininglogin", "_blank");
  };

  const featuresData = [
    {
      icon: <AirplayOutlined className="text-blue-500" size={24} />,
      title: "Distribution Management Ecosystem",
      description:
        "It refers to Distribution Management Ecosystem. We aim that we work, we earn and we share. The more we share the more we get.",
    },
    {
      icon: <MonetizationOnOutlined className="text-green-500" size={24} />, // Change to a different icon
      title: "Infrastructure as a Services (IaaS)",
      description:
        "It refers to Infrastructure as a Service. We build such a relationship with technology that grows rapidly and dynamically with us.",
    },
    {
      icon: <ComputerOutlined className="text-yellow-500" size={24} />, // Change to a different icon
      title: "GPU Mining Rig",
      description:
        "GPU states the Graphics Processing Unit. It’s a technology that assists in the development of Infrastructure as a Service with great growth and efficiency.",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-10 p-4">
      <div className="flex md:flex-row flex-col items-center w-full">
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
        <div className="md:text-5xl text-4xl text-gray-700 font-semibold text-center">
          Experience the Power of Crypto
          <br /> Advanced Mutual Rig with Us
        </div>
        <div className="text-gray-500 md:text-xl font-medium text-center">
          Superior Performance and Efficiency Our crypto mutual rig is equipped
          with state-of-the-art GPU technology,<br/> ensuring exceptional performance
          and efficiency in cryptocurrency mining.
        </div>

        <Button
          onClick={handlePurchaseNow}
          style={{
            background: selectedColor,
            cursor: "pointer",
            color: "white",
          }}
        >
          Purchase now
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
