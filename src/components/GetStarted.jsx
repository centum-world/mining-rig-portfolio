import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const GetStarted = () => {
  const { selectedColor } = useSelector((state) => state.colors);

  const handlePurchaseNow = () => {
    window.open("https://apps.centumworldrig.com/mininglogin", "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <div className="text-gray-500 text-center">GET STARTED</div>
      <div className="md:text-5xl  text-4xl text-gray-700 font-semibold text-center">
        Get started with{" "}
        <span style={{ color: selectedColor }}>CENTUM WORLD</span>
      </div>
      <div className="text-gray-500 md:text-2xl flex items-center justify-center w-2/3  font-sans ">
        <ul className="list-disc">
          <li className="mb-2">Fill up the Contract Form</li>
          <li className="mb-2">Submit All Needful Documents</li>
          <li className="mb-2">Add Liquidity 6L/3L/2L/1L</li>
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
          Purchase now
        </Button>
      </div>
      <div className="w-full border-t border-gray-300"></div>
    </div>
  );
};

export default GetStarted;
