import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Robot from "../assets/png/Robot.gif";
import Robot1 from "../assets/png/Robot1.gif";
import { selectDarkMode } from "../redux/darkModeSlice";

const Card = ({ title, description, linkText, linkTo, selectedColor , darkModeEnabled}) => (
  <div className="flex  justify-center border h-46 md:h-44 md:w-1/3 w-full overflow-hidden">
    <div className="flex flex-col  p-5">
      <div className={`${darkModeEnabled ? 'text-gray-50' : 'text-gray-700'} text-lg font-semibold  font-roboto`}>
        {title}
      </div>
      <div className={`${darkModeEnabled ? 'text-gray-400' : 'text-gray-500'} text-lg font-calibri md:text-base`}>
        {description}
      </div>
    </div>
    <div className="flex items-center justify-center p-6">
      <NavLink to={linkTo} className="mt-14" style={{ color: selectedColor }}>
        {linkText}
      </NavLink>
    </div>
  </div>
);

const Landing = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const darkModeEnabled = useSelector(selectDarkMode);
  const cards = [
    {
      title: "Expertise You Can Rely On",
      description:
        "Our team of highly skilled technicians is here to provide you with top-notch technical support for your MINING RIG Partnership. ",
    },
    {
      title: "Optimize Your MINING RIG Performance",
      description:
        "We understand that maximizing the performance of your MINING RIG is crucial for your success. ",
      // linkText: "view demo",
      // linkTo: "/discover/2",
    },
    {
      title: "Efficient Problem Resolution",
      description:
        "Our dedicated support team is available around the clock to quickly identify and resolve any technical problems.",
      // linkText: "view demo",
      // linkTo: "/features/3",
    },
    {
      title: "Maximize your MINING RIG performance",
      description:
        "Our dedicated team of experts will provide you with the technical support and guidance you need to optimize your MINING RIG's performance. ",
      // linkText: "view demo",
      // linkTo: "/learn/4",
    },
    {
      title: "A Partnership Built on Trust",
      description:
        "We understand that your MINING RIG is a valuable asset, and we take our Partnership seriously. ",
      // linkText: "view demo",
      // linkTo: "/inspire/5",
    },
    {
      title: "Stay ahead of the Competition",
      description:
        "In the Competitive world of Crypto Currency MINING, staying ahead is crucial.",
      // linkText: "view demo",
      // inkTo: "/try/6",
    },
    {
      title: "A tailored approach for your needs",
      description:
        "We understand that every MINING MUTUAL RIG Partner is unique, which is why we offer Personalized support based on your specific requirements.",
      // linkText: "view demo",
      // linkTo: "/shop/7",
    },
  ];

  const heroRobot = darkModeEnabled ? Robot1 : Robot

  return (
    <div className="flex flex-col space-y-4 mt-6 mx-auto my-auto justify-center md:px-24">
      <div className={`${darkModeEnabled ? 'text-white' : ''} text-2xl font-semibold font-roboto `}>Features</div>
      <div className="flex flex-wrap">
        {cards.map((card, index) => (
          <Card key={index} {...card} selectedColor={selectedColor} darkModeEnabled={darkModeEnabled} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <img src={heroRobot} alt="robotgif" />
      </div>
    </div>
  );
};

export default Landing;
