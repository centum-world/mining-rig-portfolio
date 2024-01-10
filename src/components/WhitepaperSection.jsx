import React from "react";
import innovation from "../assets/png/InnovationGif.gif";
import roadMap from "../assets/png/road-map.png";

const WhitepaperSection = () => {
  return (
    <div className="w-full h-full">
      <div className="pl-14 pt-14  pb-14 pr-14 sm:pr-0 flex flex-col justify-center items-center">
        <p className="text-2xl md:text-3xl font-calibri font-bold">
          White Paper & Roadmap
        </p>
        <div className="mt-10 w-60 h-60">
          <img src={innovation} alt="" />
        </div>
      </div>
      <hr />
      <div className="pl-14 pt-14  pb-14 pr-14 sm:pr-0 flex flex-col justify-center items-center">
        <p className="text-2xl md:text-3xl font-calibri font-bold">
          Get Our Ideal White Paper & Future Road Map
        </p>
        <div className="mt-10 w-3/5">
          <img src={roadMap} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhitepaperSection;
