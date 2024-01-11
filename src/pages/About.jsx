import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  return (
    <div className="p-4 space-y-10 flex flex-col items-center">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="text-gray-500 underline text-lg">
          ABOUT OF CENTUM WORLD
        </div>
        <div className="md:text-5xl text-4xl font-semibold text-center">
          CENTUM WORLD BLOCKCHAIN TECHNOLOGY
          <br /> DEVELOPMENT ECOSYSTEM
        </div>
        <div className="text-gray-500 md:text-xl font-medium text-center">
          START NEW WAY TO DO <br />
          BUSINESS
        </div>
        <div
          style={{ color: selectedColor }}
          className="text-gray-500 md:text-xl  font-medium text-center"
        >
          JOIN WITH OUR STATE BUSINESS OFFICER AND CONDUCT MARKET RESEARCH
        </div>
        <div>
          By Joining with our Platform, you will get an opportunity to turn your
          Franchise/ Marketing Business into a successful Career Frame and Fame.
          <br />
          We have Successful Business portfolio in Technology, Research and
          Analytics, AI Algorithm and in Crypto Industry. We have more than 100+
          Team Members and We are Growing Faster.
        </div>
        <div
          style={{ color: selectedColor }}
          className="text-gray-500 md:text-xl  font-medium text-center"
        >
          Checkout our business module and products
        </div>
        <div>
          Our business Strategy and Module is the foundation of your franchise
          business. It’s a roadmap for how to structure, run, and grow your new
          business with our advance Projects and Products.
        </div>
        <div
          style={{ color: selectedColor }}
          className="text-gray-500 md:text-xl  font-medium text-center"
        >
          BLOCKCHAIN TECHNOLOGY DEVELOPMENT ECOSYSTEM
        </div>
        <div>
          <ul className="list-disc">
            <li className="mb-2">
              CENTUM WORLD SaaS (Software as a Service) AI Apps
            </li>
            <li className="mb-2">CENTUMO TOKEN</li>
            <li className="mb-2">CENTUMO SWAP</li>
            <li className="mb-2">
              CENTUMO RIG (IaaS - Infrastructure as a Service )
            </li>
            <li className="mb-2">
              JET TRADE FX (AI based FOREX Trading Exchange)
            </li>
            <li className="mb-2">
              CENTUMO NFT ( AI based Advance SaaS Ecosystem)
            </li>
          </ul>
        </div>
        <div
          style={{ color: selectedColor }}
          className="text-gray-500 md:text-xl  font-medium text-center"
        >
          fund your MARKET AND GOOD BUSINESS DEVELOPER TEAM
        </div>
        <div>The Bond with the Best to Grow Faster.</div>
        <div
          style={{ color: selectedColor }}
          className="text-gray-500 md:text-xl  font-medium text-center"
        >
          OUR DMS (DISTRIBUTION MANAGEMENT SYSTEM) IS THE KEY OF OUR SUCCESS
        </div>
        <div>
          We at CENTUM WORLD, Distribute the Idea, Innovation and Work to create
          a Better Future and contribute to boost Empowerment
        </div>
        <div
          style={{ color: selectedColor }}
          className="text-gray-500 md:text-xl  font-medium text-center"
        >
          #businessadvice
        </div>
        <div
          style={{ color: selectedColor }}
          className="text-gray-500 md:text-xl  font-medium text-center"
        >
          FOR FURTHER ENQUIRY PLEASE CONNECT TO OUR State BUSINESS &amp;
          Marketing OFFICER
        </div>
        <div>Upcoming Project</div>
        <div>
          <div>
            <ul className="list-disc">
              <li className="mb-2">CENTUMO Blockchain Technology Ecosystem</li>
              <li className="mb-2">CENTUMO Coin (Crypto Asset)</li>
              <li className="mb-2">
                AI Algorithm and Technology Development Ecosystem
              </li>
              <li className="mb-2">Robotics Engineering</li>
            </ul>
          </div>
        </div>
        <Button
          style={{
            background: selectedColor,
            cursor: "pointer",
            color: "white",
          }}
        >
          Conatct use
        </Button>
      </div>
    </div>
  );
};

export default About;
