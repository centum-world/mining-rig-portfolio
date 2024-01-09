import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ title, description, linkText, linkTo }) => (
  <div className="flex items-center justify-between border h-36 w-1/3 overflow-hidden">
    <div className="flex flex-col  p-6">
      <div className="text-lg font-semibold text-gray-700">{title}</div>
      <div className="text-base text-gray-500">{description}</div>
    </div>
    <div className="flex items-center justify-center p-6">
      <NavLink to={linkTo} className="text-blue-500  mt-14">
        {linkText}
      </NavLink>
    </div>
  </div>
);

const Landing = () => {
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
    <div className="p-24">
      <div className="text-2xl font-semibold mb-4">Landing</div>
      <div className="flex flex-wrap">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Landing;