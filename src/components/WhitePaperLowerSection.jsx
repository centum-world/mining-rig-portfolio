import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DigitalMarketing, Management } from "../utils/constant";
import { Technical } from "../utils/constant";
import { Technical2 } from "../utils/constant";
import { Founder } from "../utils/constant";
import { FranchiseData } from "../utils/constant";
import { BMMdataNew } from "../utils/constant";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";
import { BackOffice } from "../utils/constant";
import { AsstHRD } from "../utils/constant";


const WhitePaperLowerSection = () => {
  const darkModeEnabled = useSelector(selectDarkMode);
  const { selectedColor } = useSelector((state) => state.colors);


  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const backOfficeSliderSettings = {
    ...sliderSettings,
    slidesToShow: 2,
  };

  const asstHRDSliderSettings = {
    ...sliderSettings,
    slidesToShow: 1,
  };
  const digitalMArking = {
    ...sliderSettings,
    slidesToShow: 2,
  };
  const founder = {
    ...sliderSettings,
    slidesToShow: 3,
  };

  return (
    <>
      <p
        style={{ color: selectedColor }}
        className="mt-10 text-opacity-80 text-center font-tomorrow font-semibold  text-xl md:text-3xl lg:text-3xl"
      >
        Meet Our Efficient Team
      </p>
      {/* BMM Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto space-y-4 flex flex-col pl-[22px] mt-3 py-10 px-4 bg-gradient-to-custom rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-opacity-80 text-center font-tomorrow font-semibold text-xl md:text-2xl lg:text-3xl `}
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
                className="h-64 w-80 max-w-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Franchise Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom pl-[22px] md:mt-3 mt-10  space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-tomorrow font-semibold text-xl md:text-3xl lg:text-3xl`}
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
                className="h-64 w-80 max-w-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Core Team Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom pl-[22px] md:mt-3 mt-10  space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-tomorrow font-semibold  text-xl md:text-3xl lg:text-3xl`}
        >
          Core Team
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
                className="h-64 w-80 max-w-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Back office */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom pl-[22px] md:mt-3 mt-10  space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-tomorrow font-semibold  text-xl md:text-3xl lg:text-3xl`}
        >
          Back Office
        </p>
        <Slider {...backOfficeSliderSettings}>
          {BackOffice.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 max-w-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Asst HRD */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom pl-[22px] md:mt-3 mt-10  space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-tomorrow font-semibold text-xl md:text-3xl lg:text-3xl`}
        >
          Asst. HRD
        </p>
        <Slider {...asstHRDSliderSettings}>
          {AsstHRD.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 max-w-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Digital Marketing */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom pl-[22px] md:mt-3 mt-10  space-y-4 py-10 px-4 rounded-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-tomorrow font-semibold  text-xl md:text-3xl lg:text-3xl`}
        >
          Digital Marketing
        </p>
        <Slider {...digitalMArking}>
          {DigitalMarketing.map((items, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-auto"
            >
              <img
                src={items.imageUrl}
                alt="Profile"
                className="h-64 w-80 max-w-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Technical Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom pl-[22px] md:mt-3 mt-10  space-y-4 py-10 px-4 rounded-md  shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  text-gray-800 text-opacity-80 text-center font-tomorrow font-semibold text-xl md:text-3xl lg:text-3xl`}
        >
          Technical/Software
        </p>
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  md:text-start lg:text-start  text-gray-800 text-opacity-80  font-tomorrow font-medium md:text-lg text-base px-4`}
        >
          SaaS, AI Apps Development, NFT
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
                className="h-64 w-80 max-w-full rounded-md"
              />
            </div>
          ))}
        </Slider>
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          }  md:text-start lg:text-start  text-gray-800 text-opacity-80  font-tomorrow font-medium md:text-lg text-base px-4`}
        >
          SaaS, AI Apps & Blockchain Dev
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
                className="h-64 w-80 max-w-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Founder Section */}
      <div
        className={`${
          darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
        } w-full h-auto bg-gradient-to-custom pl-[22px] md:mt-3 mt-10   md:p-20 lg:-20 space-y-6 py-10 px-4 rounded-t-md shadow-md`}
      >
        <p
          className={`${
            darkModeEnabled ? "text-white" : "text-gray-800"
          } text-gray-800 text-opacity-80 text-center font-tomorrow font-semibold  text-xl md:text-3xl lg:text-3xl`}
        >
          Founder & Co-Founder
        </p>
        <Slider {...founder}>
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
