import React from "react";
import innovation from "../assets/png/InnovationGif.gif";
import innovation1 from "../assets/png/InnovationGif1.gif";
import roadMap from "../assets/png/road-map.png";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";

const WhitepaperSection = () => {
  const darkModeEnabled = useSelector(selectDarkMode);
  const heroInnovation = darkModeEnabled ? innovation1 : innovation

  return (
    <div className={`w-full ${darkModeEnabled ? 'bg-gray-900' : 'bg-gray-50'} h-full`}>
      <div className="pl-6 pt-14  pb-14 pr-6 sm:pr-0 flex flex-col justify-center items-center">
        <p className={`text-2xl md:text-3xl ${darkModeEnabled ? 'text-white' : 'text-gray-700'} font-calibri font-bold`}>
          White Paper & Roadmap
        </p>
        <div className="mt-10 w-60 h-60">
          <img src={heroInnovation} alt="heroInnovation" />
        </div>
      </div>
      <hr />
      <div className="pl-6 pt-14  pb-14 pr-6 sm:pr-0 flex flex-col justify-center items-center">
        <p className={`text-2xl md:text-3xl ${darkModeEnabled ? 'text-white' : 'text-gray-700'} font-calibri font-bold`}>
          Get Our Ideal White Paper & Future Road Map
        </p>
        <div className="mt-10 md:w-3/5 w-full">
          <img src={roadMap} alt="roadMap" />
        </div>
      </div>
    </div>
  );
};

export default WhitepaperSection;
