import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Card = ({ title, description, linkText, linkTo,selectedColor }) => (
  <div className="flex items-center justify-between border h-36 md:w-1/3 w-full overflow-hidden">
    <div className="flex flex-col  p-6">
      <div className="text-lg font-semibold text-gray-700">{title}</div>
      <div className="text-base text-gray-500">{description}</div>
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
      title: "Elegant Design",
      description: "Experience the beauty",
      linkText: "view demo",
      linkTo: "/explore/1",
    },
    {
      title: "Powerful Performance",
      description: "Unleash the potential",
      linkText: "view demo",
      linkTo: "/discover/2",
    },
    {
      title: "Versatile Functionality",
      description: "Adaptable features",
      linkText: "view demo",
      linkTo: "/features/3",
    },
    {
      title: "Innovative Solutions",
      description: "Stay ahead ",
      linkText: "view demo",
      linkTo: "/learn/4",
    },
    {
      title: "Sleek Aesthetics",
      description: "Enhance your surroundings",
      linkText: "view demo",
      linkTo: "/inspire/5",
    },
    {
      title: "User-Friendly Interface",
      description: "Intuitive interfaces",
      linkText: "view demo",
      inkTo: "/try/6",
    },
    {
      title: "Premium Quality",
      description: "Experience premium quality",
      linkText: "view demo",
      linkTo: "/shop/7",
    },
    {
      title: "Advanced Technology",
      description: "Explore the frontiers",
      linkText: "view demo",
      linkTo: "/tech/8",
    },
    {
      title: "Customizable Options",
      description: "Tailor our products",
      linkText: "view demo",
      linkTo: "/customize/9",
    },
    {
      title: "Exceptional Performance",
      description: "Achieve exceptional",
      linkText: "view demo",
      linkTo: "/achieve/10",
    },
    {
      title: "Future-Ready Solutions",
      description: "Invest in the future",
      linkText: "view demo",
      linkTo: "/future/11",
    },
    {
      title: "Unique Innovations",
      description: "Explore unique",
      linkText: "view demo",
      linkTo: "/discover/12",
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
