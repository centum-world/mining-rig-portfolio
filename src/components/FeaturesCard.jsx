import React from "react";
import {
  SignalCellularNoSim,
  Power,
  Business,
  PeopleAlt,
  AccountBalance,
} from "@mui/icons-material";


const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-4 hover:scale-105 duration-500 shadow-lg rounded-md w-80">
      {icon}
      <h3 className="text-lg font-semibold font-roboto ">{title}</h3>
      <p className="text-gray-600 font-tomorrow ">{description}</p>
    </div>
  );
};

const FeaturesCard = () => {
  return (
    <div className="flex justify-center flex-wrap gap-10">
      <FeatureCard
        icon={<SignalCellularNoSim className="text-blue-500 mb-2" size={24} />}
        title="No Technical High Cost Device or, Setup needed"
        description="Easy-to-use solution without the need for complex technical devices or setups."
        // className="font-calibri"
      />
      <FeatureCard
        icon={<Power className="text-green-500 mb-2" size={24} />}
        title="NO Electricity Cost needed"
        description="Everything will be taken care of from our side"
      />
      <FeatureCard
        icon={<Business className="text-yellow-500 mb-2" size={24} />}
        title="No Office Cost needed"
        description="Stay productive without the need for a dedicated office space, saving costs."
      />
      <FeatureCard
        icon={<PeopleAlt className="text-purple-500 mb-2" size={24} />}
        title="No Technical experts needed"
        description="No technical expertise required, ensuring a smooth user experience."
      />
      <FeatureCard
        icon={<AccountBalance className="text-red-500 mb-2" size={24} />}
        title="No Risk of lossing your Financial assests"
        description="Secure your financial assets without the Risk of loss."
      />
    </div>
  );
};

export default FeaturesCard;
