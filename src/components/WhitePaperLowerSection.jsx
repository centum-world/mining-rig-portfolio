import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BMMdataNew,
  FranchiseData,
  Management,
  BackOffice,
  AsstHRD,
  Technical,
  Technical2,
  Founder,
} from "../utils/constant";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";

export const PurchaseButton = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const darkModeEnabled = useSelector(selectDarkMode);

  const handleDownload = () => {
    const pdfFileName = "brochure.pdf";
    saveAs(brochurePDF, pdfFileName);
  };

  const handlePurchaseNow = () => {
    window.open("https://apps.centumworldrig.com/mininglogin", "_blank");
  };

  return (
    <div
      className={`${
        darkModeEnabled ? "bg-gray-900 " : ""
      } flex md:flex-row flex-col items-center justify-center gap-4 w-full  p-4`}
    >
      <Button
        onClick={handlePurchaseNow}
        style={{
          background: selectedColor,
          cursor: "pointer",
          color: "white",
        }}
        className={` text-white cursor-pointer w-full sm:w-auto`}
      >
        Add liquidity
      </Button>
      <Button
        variant="outlined"
        onClick={handleDownload}
        style={{
          borderColor: selectedColor,
          cursor: "pointer",
          color: selectedColor,
        }}
        className={` text-white cursor-pointer w-full sm:w-auto `}
      >
        View Documentation
      </Button>
    </div>
  );
};

const TeamSection = ({ title, data, sliderSettings }) => {
  const sliderRef = useRef(null);
  const darkModeEnabled = useSelector(selectDarkMode);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div
      className={`${
        darkModeEnabled ? "bg-gray-900 text-white" : ""
      } flex items-center justify-center flex-col space-y-2 `}
    >
      <div
        className={`${
          darkModeEnabled ? " text-white" : "text-gray-700"
        }  text-4xl font-semibold w-full text-center mt-10`}
      >
        {title}
      </div>
      <div className="w-full">
        <Slider ref={sliderRef} {...sliderSettings}>
          {data.map((item, index) => (
            <div key={index} className="">
              <div className="w-full flex justify-center items-center text-center mt-6">
                <img
                  src={item.imageUrl}
                  alt="Profile"
                  className="h-64 w-80 rounded-md  shadow-lg transition-transform transform hover:scale-105 duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center gap-4">
          <IconButton onClick={handlePrev}>
            <KeyboardArrowLeftIcon
              className={`${darkModeEnabled ? "text-white" : ""}`}
            />
          </IconButton>
          <IconButton onClick={handleNext}>
            <KeyboardArrowRightIcon
              className={`${darkModeEnabled ? "text-white" : ""}`}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const WhitePaperLowerSection = () => {
  const darkModeEnabled = useSelector(selectDarkMode);
  const { selectedColor } = useSelector((state) => state.colors);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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
    <div className="text-center">
      <div
        className={`${
          darkModeEnabled ? "bg-gray-900 text-white" : ""
        } md:text-6xl text-5xl font-roboto font-semibold  text-gray-900 pt-10`}
        style={{color:selectedColor}}
      >
        Meet Our Efficient Team
      </div>
      <TeamSection
        title="BMM"
        data={BMMdataNew}
        sliderSettings={sliderSettings}
      />
      <PurchaseButton />
      <TeamSection
        title="Franchise/Business Consultant"
        data={FranchiseData}
        sliderSettings={sliderSettings}
      />
      <PurchaseButton />
      <TeamSection
        title="Core Team"
        data={Management}
        sliderSettings={sliderSettings}
      />
      <PurchaseButton />
      <TeamSection
        title="Back Office"
        data={BackOffice}
        sliderSettings={backOfficeSliderSettings}
      />
      <PurchaseButton />
      <TeamSection
        title="Asst. HRD"
        data={AsstHRD}
        sliderSettings={asstHRDSliderSettings}
      />
      <PurchaseButton />
      <PurchaseButton />
      <div>
        <div
          className={` ${
            darkModeEnabled ? "bg-gray-900 text-white" : ""
          } text-gray-700 text-4xl font-semibold w-full p-6`}
        >
          Technical/Software
          <TeamSection
            title=" SaaS, AI Apps Development, NFT"
            data={Technical}
            sliderSettings={sliderSettings}
          />
          <TeamSection
            title="SaaS, AI Apps & Blockchain Dev"
            data={Technical2}
            sliderSettings={sliderSettings}
          />
        </div>
      </div>
      <PurchaseButton />
      <TeamSection
        title="Founder & Co-Founder"
        data={Founder}
        sliderSettings={founder}
      />
      <PurchaseButton />
    </div>
  );
};
export default WhitePaperLowerSection;
