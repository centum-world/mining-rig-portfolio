import React from "react";
import { useSelector } from "react-redux";

const Card = ({ title, description, selectedColor }) => (
  <div className="flex flex-col border h-40 md:w-1/3 w-full overflow-hidden shadow-md rounded-md">
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-t-md">
      <div className="text-base font-semibold text-gray-700 font-roboto ">{title}</div>
    </div>
    <div className=" bg-white p-2 max-h-24 rounded-b-md overflow-y-auto scrollbar-hide overflow-hidden">
      <div className="text-base text-gray-500 font-calibri">{description}</div>
    </div>
  </div>
);

const Supporting = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const cards = [
    {
      title: "IaaS Virtual RIG Partnership",
      description:
        "This is an Infrastructure as a Service Virtual RIG PARTNERSHIP program.",
    },
    {
      title: "High-Cost GPU Integration",
      description:
        "WE Integrating high-cost GPU Mining Devices for the CENTUM WORLD RIG PARTNERSHIP PROGRAM and configuring them as per Node.",
    },
    {
      title: "Electricity Bill Payment",
      description: "We pay the high cost electricity bill.",
    },
    {
      title: "Setup Rent Coverage",
      description: "We pay for the setup rent.",
    },
    {
      title: "24x7 Technical Support",
      description:
        "Our expert technical support team works 24x7, monitoring systems, and enhancing the GPU Mining Ecosystem.",
    },
    {
      title: "Revenue Distribution",
      description:
        "We earn through GPU Mining Rig and distribute earnings to our partners.",
    },
  ];

  return (
    <div className="md:p-24 pt-6">
      <div className="text-2xl font-semibold mb-4">Supporting</div>
      <div className="flex flex-wrap md:flex-row flex-col">
        {cards.map((card, index) => (
          <Card key={index} {...card} selectedColor={selectedColor} />
        ))}
      </div>
    </div>
  );
};

export default Supporting;
