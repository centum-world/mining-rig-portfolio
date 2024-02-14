import React, { useState } from "react";
import { DownArrewIcon } from "../utils/icons";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";

const FaqFirstSection = () => {
  const [isArrowDown, setIsArrowDown] = useState(false);
  const [isArrowDown2, setIsArrowDown2] = useState(false);
  const [isArrowDown3, setIsArrowDown3] = useState(false);
  const [isArrowDown4, setIsArrowDown4] = useState(false);
  const [isArrowDown5, setIsArrowDown5] = useState(false);
  const [isArrowDown6, setIsArrowDown6] = useState(false);
  const [isArrowDown7, setIsArrowDown7] = useState(false);
  const [isArrowDown8, setIsArrowDown8] = useState(false);
  const [isArrowDown9, setIsArrowDown9] = useState(false);
  const [isArrowDown10, setIsArrowDown10] = useState(false);
  const [isArrowDown11, setIsArrowDown11] = useState(false);

  const darkModeEnabled = useSelector(selectDarkMode)

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
  const handleArrowClick7 = () => {
    setIsArrowDown7(!isArrowDown7);
  };
  const handleArrowClick8 = () => {
    setIsArrowDown8(!isArrowDown8);
  };
  const handleArrowClick9 = () => {
    setIsArrowDown9(!isArrowDown9);
  };
  const handleArrowClick10 = () => {
    setIsArrowDown10(!isArrowDown10);
  };
  const handleArrowClick11 = () => {
    setIsArrowDown11(!isArrowDown11);
  };
  const arrowRotation = isArrowDown ? 180 : 0;

  const arrowRotation2 = isArrowDown2 ? 180 : 0;

  const arrowRotation3 = isArrowDown3 ? 180 : 0;

  const arrowRotation4 = isArrowDown4 ? 180 : 0;

  const arrowRotation5 = isArrowDown5 ? 180 : 0;

  const arrowRotation6 = isArrowDown6 ? 180 : 0;

  const arrowRotation7 = isArrowDown7 ? 180 : 0;

  const arrowRotation8 = isArrowDown8 ? 180 : 0;

  const arrowRotation9 = isArrowDown9 ? 180 : 0;

  const arrowRotation10 = isArrowDown10 ? 180 : 0;

  const arrowRotation11 = isArrowDown11 ? 180 : 0;

  return (
    <>
      <div className="faq-section">
        <div className={`${darkModeEnabled ? 'bg-gray-800' : 'bg-gray-50'} flex flex-col pt-20 pb-20 pl-5 pr-5 justify-center items-center`}>
          <div className="mb-8">
            <h3 className={`text-2xl md:text-5xl lg:text-5xl font-tomorrow font-bold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-90`}>
              Frequently Asked Questions
            </h3>
          </div>
          <div
            className={`hover:scale-105  duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{ transition: "transform 0.3s ease" }}
            onClick={handleArrowClick}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'}  text-opacity-70 `}>
                Who are GPU Mining RIG Partners?
              </h2>
              {isArrowDown ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
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
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"}/>
            </div>
          </div>

          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick2}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70 `}>
                What are the liquidity(amount) slabs in the GPU Mining RIG?
              </h2>
              {isArrowDown2 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
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
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>

          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4 p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick3}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70`}>
                How much Payout a Referral RIG get from referring someone?
              </h2>
              {isArrowDown3 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
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
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>

          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick4}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70`}>
                Why shall you add the liquidity (amount) in the GPU Mining RIG ?
              </h2>
              {isArrowDown4 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
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
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>

          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick5}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70`}>
                What is the full form of GPU ?
              </h2>
              {isArrowDown5 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
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
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>

          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick6}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70`}>
                How much payout a RIG Partner get from adding the liquidity in
                the GPU Mining RIG?
              </h2>
              {isArrowDown6 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
                  The RIG Partner payout from adding the liquidity in the GPU
                  Mining RIG depends on the distinct liquidity proveders. For an
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
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>

          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick7}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70`}>
                A Partnership Built on Trust and Reliability
              </h2>
              {isArrowDown7 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
                  At CENTUMO RIG, we value professional relationships and
                  prioritize trust and reliability. Join our Mutual RIG
                  PARTNERSHIP PROGRAM to experience a partnership that is built
                  to last.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation7}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>

          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick8}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70`}>
                How Can Maximize Your Earnings with Our Profit-Sharing Model
              </h2>
              {isArrowDown8 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
                  With CENTUMO RIG, you can tap into the potential of crypto
                  mining and earn your share of the profits. We distribute 60%
                  of our earnings from our work profit via our GPU Mining RIG
                  Module, ensuring that you benefit from your partnership.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation8}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>
          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick9}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70`}>
                Privacy and Security Level
              </h2>
              {isArrowDown9 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
                  Your privacy and security are our top priorities. Rest assured
                  that we have implemented robust measures to safeguard your
                  data and investments, providing you with peace of mind as you
                  participate in our program.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation9}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>

          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick10}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70`}>
                How Simple Partnership Process is ?
              </h2>
              {isArrowDown10 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
                  Becoming a partner is easy. Simply add liquidity ranging from
                  1L to 12L or more according to your preferences, sign a mutual
                  contract for 12 months, and enjoy regular payout shares
                  scheduled for each month throughout the contract period.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation10}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>

          <div
            className={`hover:scale-105 duration-100 flex w-full md:w-3/4 lg:w-3/4  p-5 h-auto rounded-md shadow-lg justify-between items-center mb-5 ${darkModeEnabled ? 'bg-gray-900'  : 'bg-white'}`}
            style={{
              transition: "all 0.3s ease",
            }}
            onClick={handleArrowClick11}
          >
            <div className="">
              <h2 className={`text-xl font-calibri font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-900'} text-opacity-70`}>
                Features and advantages of the GPU MINING RIG.
              </h2>
              {isArrowDown11 ? (
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-500' : 'text-gray-700'} text-opacity-80`}>
                  It has features and distinct advantages by which the RIG
                  Partners may take the benefits of it by merely adding the
                  Liquidity at every steps.
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className="text-white cursor-pointer"
              style={{
                transform: `rotate(${arrowRotation11}deg)`,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
              }}
            >
              <DownArrewIcon  color={darkModeEnabled ? "white" : "black"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqFirstSection;
