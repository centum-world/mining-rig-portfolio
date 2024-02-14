import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";

const GetStarted = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const darkModeEnabled = useSelector(selectDarkMode);

  const handlePurchaseNow = () => {
    window.open("https://apps.centumworldrig.com/mininglogin", "_blank");
  };

  return (
    <div
      className={`${
        darkModeEnabled ? "bg-gray-800" : "bg-white"
      } flex flex-col items-center justify-center space-y-4 p-4`}
    >
      <div
        className={`${
          darkModeEnabled ? "text-gray-400" : "text-gray-500"
        } text-center font-roboto`}
      >
        GET STARTED
      </div>
      <div
        className={`${
          darkModeEnabled ? "text-white" : "text-gray-700"
        } md:text-5xl  text-4xl  font-semibold text-center font-roboto`}
      >
        Get started with{" "}
        <span style={{ color: selectedColor }}>CENTUM WORLD</span>
      </div>
      <div
        className={`${
          darkModeEnabled ? "text-gray-400" : "text-gray-500"
        }  md:text-2xl flex items-center justify-center md:w-2/3 w-full pl-8`}
      >
        <ul className="list-disc font-calibri text-lg ">
          <li className="mb-2">Fill up the Contract Form</li>
          <li className="mb-2">Submit All Needful Documents</li>
          <li className="mb-2">Add Liquidity 12L/6L/3L/2L/1L</li>
          <li className="mb-2">
            Get the Virtual & Mutual Agreement Bond and Approve it
          </li>
          <li className="mb-2">
            After adding Liquidity and getting verified by the Admin, you will
            get your first share of Payout after 35 days and then every 30 days
          </li>
          <li className="mb-2">
            No preclaiming of Liquidity Withdrawal or the cancellation of the
            Contract deal will be acceptable from both sides, neither from the
            Company nor RIG Partners
          </li>
        </ul>
      </div>
      <div>
        <Button
          onClick={handlePurchaseNow}
          style={{
            background: selectedColor,
            cursor: "pointer",
            color: "white",
          }}
        >
          Add liquidity
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
