import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import about from "../assets/png/About.png";
import NFT from "../assets/png/NFT.gif";
import NFT2 from "../assets/png/NFT2.gif";
import { selectDarkMode } from "../redux/darkModeSlice";

const About = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const darkModeEnabled = useSelector(selectDarkMode);
  const heroNft = darkModeEnabled ? NFT2 : NFT

  return (
    <div className={` ${darkModeEnabled ? 'bg-gray-900' : 'bg-gray-50'} p-4 flex flex-col items-center space-y-4`}>
      <div className={`max-w-3xl mx-auto p-8 ${darkModeEnabled ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md space-y-8`}>
        <div className="text-center ">
          <h1 className="text-3xl  font-bold text-gray-800">About Us</h1>
          <div className="flex justify-center items-center w-full">
            <img src={about} alt="about" className="md:w-1/2 w-full" />
          </div>
          <p className={`${darkModeEnabled ? 'text-white' : 'text-gray-600'} text-lg `}>
            CENTUM WORLD BLOCKCHAIN TECHNOLOGY DEVELOPMENT ECOSYSTEM
          </p>
          <p className={`text-lg ${darkModeEnabled ? 'text-white' : 'text-gray-600'}`}>
            START A NEW WAY TO DO BUSINESS
          </p>
          <p style={{ color: selectedColor }} className="text-lg font-semibold">
            JOIN WITH OUR STATE BUSINESS OFFICER AND CONDUCT MARKET RESEARCH
          </p>
        </div>

        <p className={`text-lg ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>
          By joining our platform, you will have the opportunity to turn your
          Franchise/Marketing Business into a successful career and fame. We
          have a successful business portfolio in Technology, Research and
          Analytics, AI Algorithm, and in the Crypto Industry. With 100+ team
          members, we are growing rapidly.
        </p>

        <p style={{ color: selectedColor }} className="text-lg font-semibold">
          Checkout our business module and products
        </p>

        <p className={`text-lg ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>
          Our business strategy and module serve as the foundation for your
          franchise business. It's a roadmap for structuring, running, and
          growing your new business with our advanced projects and products.
        </p>

        <p style={{ color: selectedColor }} className="text-lg font-semibold">
          BLOCKCHAIN TECHNOLOGY DEVELOPMENT ECOSYSTEM
        </p>

        <ul className={`list-disc pl-6 ${darkModeEnabled ? 'text-white' : 'text-black'} `}>
          <li>CENTUM WORLD SaaS (Software as a Service) AI Apps</li>
          <li>CENTUMO TOKEN</li>
          <li>CENTUMO SWAP</li>
          <li>CENTUMO RIG (IaaS - Infrastructure as a Service)</li>
          <li>JET TRADE FX (AI based FOREX Trading Exchange)</li>
          <li>CENTUMO NFT (AI based Advance SaaS Ecosystem)</li>
        </ul>

        <p style={{ color: selectedColor }} className="text-lg font-semibold">
          Fund your MARKET AND GOOD BUSINESS DEVELOPER TEAM
        </p>

        <p className={`text-lg ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>
          The bond with the best to grow faster.
        </p>

        <p style={{ color: selectedColor }} className="text-lg font-semibold">
          OUR DMS (DISTRIBUTION MANAGEMENT SYSTEM) IS THE KEY TO OUR SUCCESS
        </p>

        <p className={`text-lg ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>
          We at CENTUM WORLD distribute ideas, innovation, and work to create a
          better future and contribute to empowerment.
        </p>

        <p style={{ color: selectedColor }} className="text-lg font-semibold">
          #businessadvice
        </p>

        <p className={`text-lg ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>
          FOR FURTHER ENQUIRY, PLEASE CONNECT TO OUR STATE BUSINESS &amp;
          MARKETING OFFICER
        </p>
        <div className="flex justify-center items-center w-full">
          <img src={heroNft} alt="nft" className="md:w-1/3 w-full" />
        </div>
        <div className="text-start">
          <h2
            className="text-xl font-bold mb-2"
            style={{ color: selectedColor }}
          >
            Upcoming Project
          </h2>
          <ul className={`list-disc pl-6 ${darkModeEnabled ? 'text-white' : 'text-black'}`}>
            <li>CENTUMO Blockchain Technology Ecosystem</li>
            <li>CENTUMO Coin (Crypto Asset)</li>
            <li>AI Algorithm and Technology Development Ecosystem</li>
            <li>Robotics Engineering</li>
          </ul>
        </div>
        <div className="text-end">
          <Link
            to="/contact"
            className=" text-white font-bold py-2 px-4 rounded "
            style={{ backgroundColor: selectedColor, color: "white" }}
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
