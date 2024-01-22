import React from "react";
import WhitepaperSection from "../components/WhitepaperSection";
import WhitePaperLowerSection from "../components/WhitePaperLowerSection";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";

const WhitePaper = () => {
  const darkModeEnabled = useSelector(selectDarkMode);
  return (
    <div className={` ${
      darkModeEnabled ? "bg-gray-900" : "bg-gray-50"
    }`}>
      <WhitepaperSection />
      <WhitePaperLowerSection />
    </div>
  );
};

export default WhitePaper;
