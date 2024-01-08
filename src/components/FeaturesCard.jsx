import React from "react";
import { AirplayOutlined, AttachMoney, Build } from "@mui/icons-material";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-4 hover:scale-105 duration-500 shadow-lg rounded-md max-w-sm">
      {icon}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesCard = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <FeatureCard
        icon={<AirplayOutlined className="text-blue-500 mb-2" size={24} />}
        title="Card Title 1"
        description="This is a sample card description. You can replace it with your own content."
      />
      <FeatureCard
        icon={<AttachMoney className="text-green-500 mb-2" size={24} />}
        title="Card Title 2"
        description="Another sample card description. Customize it to suit your needs."
      />
      <FeatureCard
        icon={<Build className="text-yellow-500 mb-2" size={24} />}
        title="Card Title 3"
        description="Yet another sample card description. Modify as per your requirements."
      />
      {/* Add more FeatureCard components as needed */}
    </div>
  );
};

export default FeaturesCard;
