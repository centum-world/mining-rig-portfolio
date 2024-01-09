import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Card = ({ title, description, linkText, linkTo,selectedColor }) => (
  <div className="flex items-center justify-between border h-36 md:w-1/3 w-full overflow-hidden">
    <div className="flex flex-col  p-6">
      <div className="text-lg  font-semibold text-gray-700">{title}</div>
      <div className="text-base text-gray-500">{description}</div>
    </div>
    <div className="flex items-center justify-center p-6">
      <NavLink to={linkTo}  className= "mt-14" style={{ color: selectedColor }}>
        {linkText}
      </NavLink>
    </div>
  </div>
);

const Supporting = () => {
  const { selectedColor } = useSelector((state) => state.colors);
    const cards = [
        {
          title: "Card 1",
          description: "Description for Card 1",
          linkText: "View Demo 1",
          linkTo: "/demo/1",
        },
        {
          title: "Card 2",
          description: "Description for Card 2",
          linkText: "View Demo 2",
          linkTo: "/demo/2",
        },
        {
          title: "Card 3",
          description: "Description for Card 3",
          linkText: "View Demo 3",
          linkTo: "/demo/3",
        },
        {
          title: "Card 4",
          description: "Description for Card 4",
          linkText: "View Demo 4",
          linkTo: "/demo/4",
        },
        {
          title: "Card 5",
          description: "Description for Card 5",
          linkText: "View Demo 5",
          linkTo: "/demo/5",
        },
        {
          title: "Card 6",
          description: "Description for Card 6",
          linkText: "View Demo 6",
          linkTo: "/demo/6",
        },
        {
          title: "Card 7",
          description: "Description for Card 7",
          linkText: "View Demo 7",
          linkTo: "/demo/7",
        },
        {
          title: "Card 8",
          description: "Description for Card 8",
          linkText: "View Demo 8",
          linkTo: "/demo/8",
        },
        {
          title: "Card 9",
          description: "Description for Card 9",
          linkText: "View Demo 9",
          linkTo: "/demo/9",
        },
        {
          title: "Card 10",
          description: "Description for Card 10",
          linkText: "View Demo 10",
          linkTo: "/demo/10",
        },
        {
          title: "Card 11",
          description: "Description for Card 11",
          linkText: "View Demo 11",
          linkTo: "/demo/11",
        },
        {
          title: "Card 12",
          description: "Description for Card 12",
          linkText: "View Demo 12",
          linkTo: "/demo/12",
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
