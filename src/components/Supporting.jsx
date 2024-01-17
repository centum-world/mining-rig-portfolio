import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";

const Card = ({ title, description, selectedColor, darkModeEnabled }) => (
  <div className="flex flex-col border h-44 md:w-1/3 w-full overflow-hidden shadow-md ">
    <div
      className={`${
        darkModeEnabled ? "bg-gray-900" : "bg-gray-50"
      } flex items-center justify-between p-4  `}
    >
      <div
        className={`${
          darkModeEnabled ? "text-gray-50 " : "text-gray-700 "
        } text-lg md:text-base font-semibold font-roboto `}
      >
        {title}
      </div>
    </div>
    {/* <div className=" "> */}
    <div
      className={`${
        darkModeEnabled ? "bg-gray-900" : "bg-gray-50"
      }  p-2 h-36 overflow-y-auto scrollbar-hide overflow-hidden`}
    >
      <div
        className={`${
          darkModeEnabled ? "text-gray-400" : "text-gray-500"
        } text-lg md:text-base font-calibri`}
      >
        {description}
      </div>
    </div>
  </div>
);

const Supporting = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const darkModeEnabled = useSelector(selectDarkMode);
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
      <div
        className={`${
          darkModeEnabled ? "text-white" : ""
        } text-2xl font-semibold mb-4`}
      >
        Supporting
      </div>
      <div className="flex flex-wrap md:flex-row flex-col">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            selectedColor={selectedColor}
            darkModeEnabled={darkModeEnabled}
          />
        ))}
      </div>
    </div>
  );
};

export default Supporting;
