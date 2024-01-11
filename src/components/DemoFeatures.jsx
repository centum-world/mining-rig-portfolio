import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Card = ({ title, description, linkText, linkTo,selectedColor }) => (
  <div className="flex  justify-center border h-46 md:h-44 md:w-1/3 w-full overflow-hidden">
    <div className="flex flex-col  p-5">
      <div className="text-lg font-semibold text-gray-700 font-roboto ">{title}</div>
      <div className="text-lg text-gray-500 font-calibri md:text-base ">{description}</div>
    </div>
    <div className="flex items-center justify-center p-6">
      <NavLink to={linkTo} className= "mt-14" style={{ color: selectedColor }}>
        {linkText}
      </NavLink>
    </div>
  </div>
);

const Landing = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const cards = [
    {
      title: "Expertise You Can Rely On",
      description: "Our team of highly skilled technicians is here to provide you with top-notch technical support for your mining rig partnership. ",
     
    },
    {
      title: "Optimize Your Mining Rig Performance",
      description: "We understand that maximizing the performance of your mining rig is crucial for your success. ",
      // linkText: "view demo",
      // linkTo: "/discover/2",
    },
    {
      title: "Efficient Problem Resolution",
      description: "Our dedicated support team is available around the clock to quickly identify and resolve any technical problems.",
      // linkText: "view demo",
      // linkTo: "/features/3",
    },
    {
      title: "Maximize your mining rig's performance",
      description: "Our dedicated team of experts will provide you with the technical support and guidance you need to optimize your mining rig's performance. ",
      // linkText: "view demo",
      // linkTo: "/learn/4",
    },
    {
      title: "A partnership built on trust",
      description: "We understand that your mining rig is a valuable asset, and we take our partnership seriously. ",
      // linkText: "view demo",
      // linkTo: "/inspire/5",
    },
    {
      title: "Stay ahead of the competition",
      description: "In the competitive world of cryptocurrency mining, staying ahead is crucial.",
      // linkText: "view demo",
      // inkTo: "/try/6",
    },
    {
      title: "A tailored approach for your needs",
      description: "We understand that every mining rig is unique, which is why we offer personalized support based on your specific requirements.",
      // linkText: "view demo",
      // linkTo: "/shop/7",
    },  
  ];

  return (
    <div className="md:p-24 pt-6">
      <div className="text-2xl font-semibold mb-4">Features</div>
      <div className="flex flex-wrap">
        {cards.map((card, index) => (
          <Card key={index} {...card} selectedColor={selectedColor} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
