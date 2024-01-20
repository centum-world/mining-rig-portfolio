import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { DigitalMarketing, Management } from "../utils/constant";
import { Technical } from "../utils/constant";
import { Technical2 } from "../utils/constant";
import { Founder } from "../utils/constant";
import { FranchiseData } from "../utils/constant";
import allState from "../utils/AllState";
import { BMMdataNew } from "../utils/constant";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";
import { BackOffice } from "../utils/constant";
import { AsstHRD } from "../utils/constant";

const WhitePaperLowerSection = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedFranchiseValue, setSelectedFranchiseValue] = useState();
  const states = allState.states.map((stateData) => stateData.state);
  const darkModeEnabled = useSelector(selectDarkMode);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* BMM Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto space-y-4 flex flex-col  py-10 px-4 bg-gradient-to-custom rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-opacity-80 text-center font-black text-xl md:text-2xl lg:text-2xl `}
        >
          BMM
        </p>
        <Slider {...sliderSettings}>
          {BMMdataNew.map((bmm, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={bmm.imageUrl}
                alt="Profile"
                className="h-64 w-80 rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Franchise Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom  space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl`}
        >
          Franchise/Business Consultant
        </p>
        <Slider {...sliderSettings}>
          {FranchiseData.map((franchise, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={franchise.imageUrl}
                alt="Profile"
                className="h-64 w-80 rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Core Team Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl`}
        >
          Core team
        </p>
        <Slider {...sliderSettings}>
          {Management.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* BAck office */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl`}
        >
          Back Office
        </p>
        <Slider {...sliderSettings}>
          {BackOffice.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Asst HRD */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl`}
        >
          Asst. HRD
        </p>
        <Slider {...sliderSettings}>
          {AsstHRD.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Digital Marketing */}

      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl`}
        >
         Digital Marketing
        </p>
        <Slider {...sliderSettings}>
          {DigitalMarketing.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Technical Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom space-y-4 py-10 px-4 rounded-md  shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-tomorrow font-semibold text-xl md:text-3xl lg:text-3xl`}
        >
          Technical
        </p>
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  md:text-start lg:text-start  text-gray-800 text-opacity-80  font-tomorrow font-medium text-lg px-4`}
        >
          Saas, AI Apps Development, NFT
        </p>
        <Slider {...sliderSettings}>
          {Technical.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 rounded-md"
              />
            </div>
          ))}
        </Slider>
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  md:text-start lg:text-start  text-gray-800 text-opacity-80  font-tomorrow font-medium text-lg px-4`}
        >
          Saas, AI Apps Development, NFT
        </p>
        <Slider {...sliderSettings}>
          {Technical2.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Founder Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom md:p-20 lg:-20 space-y-6 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          } text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl`}
        >
          Founder & Co-Founder
        </p>
        <Slider {...sliderSettings}>
          {Founder.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default WhitePaperLowerSection;
