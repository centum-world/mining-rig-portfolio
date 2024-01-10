import React, { useState } from "react";
import { DownArrewIcon } from "../utils/icons";

const FaqFirstSection = () => {
  const [isArrowDown, setIsArrowDown] = useState(false);
  const [isArrowDown2, setIsArrowDown2] = useState(false);
  const [isArrowDown3, setIsArrowDown3] = useState(false);
  const [isArrowDown4, setIsArrowDown4] = useState(false);
  const [isArrowDown5, setIsArrowDown5] = useState(false);
  const [isArrowDown6, setIsArrowDown6] = useState(false);

  const handleArrowClick = () => {
    setIsArrowDown(!isArrowDown);
  };

  const handleArrowClick2 = () => {
    setIsArrowDown2(!isArrowDown2);
  };

  const handleArrowClick3 = () => {
    setIsArrowDown3(!isArrowDown3);
  };

  const handleArrowClick4 = () => {
    setIsArrowDown4(!isArrowDown4);
  };

  const handleArrowClick5 = () => {
    setIsArrowDown5(!isArrowDown5);
  };

  const handleArrowClick6 = () => {
    setIsArrowDown6(!isArrowDown6);
  };
  const arrowRotation = isArrowDown ? 180 : 0;
  

  const arrowRotation2 = isArrowDown2 ? 180 : 0;
  

  const arrowRotation3 = isArrowDown3 ? 180 : 0;
  

  const arrowRotation4 = isArrowDown4 ? 180 : 0;

  const arrowRotation5 = isArrowDown5 ? 180 : 0;
  
  const arrowRotation6 = isArrowDown6 ? 180 : 0;

  return (
    <>
      <div className="faq-section">
        <div className="flex flex-col pt-20 pb-20 pl-5 pr-5 bg-gray-50 justify-center items-center">
          <div className="mb-8">
            <h3 className="text-2xl md:text-5xl lg:text-5xl font-tomorrow font-bold text-gray-900 text-opacity-90">
              Frequently Asked Questions
            </h3>
          </div>
          <div
            className=" flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 bg-white "
            style={{ transition: "transform 0.3s ease" }}
            onClick={handleArrowClick}
          >
            <div className="">
              <h2 className="text-xl font-calibri font-semibold text-gray-900 text-opacity-70">Who are GPU Mining RIG Partners?</h2>
              {isArrowDown ? (
                <p className="text-sm ">
                  The GPU Mining RIG Partners are those who assist the (IAAS)
                  means Infrastructure As A Service.You will be adding the
                  liquidity for this GPU Mining setup for the development and
                  strength of the (IAAS).
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon color="black" />
            </div>
          </div>

          <div
            className=" flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 bg-white"
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick2}
          >
            <div className="">
              <h2 className="text-xl font-calibri font-semibold text-gray-900 text-opacity-70 ">
                What are the liquidity(amount) slabs in the GPU Mining RIG?
              </h2>
              {isArrowDown2 ? (
                <p className="text-sm ">
                  The liquidity slabs in the GPU Mining RIG are as follows : 12
                  lakh liquidity, 6 lakh liquidity, 3 lakh liquidity, 2 lakh
                  liquidity ,1 lakh liquidity.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation2}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon color='black' />
            </div>
          </div>

          <div
            className=" flex w-full md:w-3/4 lg:w-3/4 p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 bg-white"
            style={{
            
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick3}
          >
            <div className="">
              <h2 className="text-xl font-calibri font-semibold text-gray-900 text-opacity-70 ">
                How much Payout a Referral RIG get from referring someone?
              </h2>
              {isArrowDown3 ? (
                <p className="text-sm ">
                  It depends on the distinct liquidity proveders. For an
                  instance : Suppose, There is liquidity provider of 6 lakh so
                  in this case the REFERRAL RIG gets Rs.10,450/- one time and
                  onwards.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation3}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon color='black' />
            </div>
          </div>

          <div
            className="flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 bg-white"
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick4}
          >
            <div className="">
              <h2 className="text-xl font-calibri font-semibold text-gray-900 text-opacity-70">
                Why shall you add the liquidity (amount) in the GPU Mining Rig ?
              </h2>
              {isArrowDown4 ? (
                <p className="text-sm">
                  Because,You are the one who assist to this (IAAS) technology
                  for the betterment of this infrastructure.It may provide you
                  safe and secure environment in the upcoming future.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation4}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon color='black' />
            </div>
          </div>

          <div
            className=" flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 bg-white"
            style={{
             
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick5}
          >
            <div className="">
              <h2 className="text-xl font-calibri font-semibold text-gray-900 text-opacity-70">What is the full form of GPU ?</h2>
              {isArrowDown5 ? (
                <p className="text-sm ">
                  The full form of GPU is Graphics Processing Units.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation5}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon color='black' />
            </div>
          </div>

          <div
            className="flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 bg-white"
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick6}
          >
            <div className="">
              <h2 className="text-xl font-calibri font-semibold text-gray-900 text-opacity-70">
                How much payout a RIG Partner get from adding the liquidity in
                the GPU Mining Rig?
              </h2>
              {isArrowDown6 ? (
                <p className="text-sm ">
                  The RIG Partner payout from adding the liquidity in the GPU
                  Mining Rig depends on the distinct liquidity proveders. For an
                  instance : If you are a liquidity provider of 6 lakh in this
                  case you are going to get Rs.64,125/- per month.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation6}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon color='black' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqFirstSection;
