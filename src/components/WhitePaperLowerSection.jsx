import React, { useEffect, useState } from "react";
import axios from "axios";
import { Management } from "../utils/constant";
import { Technical } from "../utils/constant";
import { BackOffice } from "../utils/constant";
import { Technical2 } from "../utils/constant";
import { Founder } from "../utils/constant";
import { AsstHRD } from "../utils/constant";
import { FranchiseData } from "../utils/constant";
import { DigitalMarketing } from "../utils/constant";
import allState from "../utils/AllState";
import noDataFound from "../assets/noDataFound/nodata.gif";
import { BMMDATANEW } from "../utils/constant";
import BmmAvtar from "../assets/franchise-avatar.png";
import BMMAvatar from "../assets/png/BMMAvatar.png";
import "../css/WhitePaper.css";
import baseUrl from "../../baseUrl";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/darkModeSlice";

const WhitePaperLowerSection = () => {
  const [selectedState, setSelectedState] = useState("");
  const [data, setData] = useState([]);
  const [franchiseData, setFranchiseData] = useState([]);
  const [selectedValue, setSelectedValue] = useState(""); // State to hold selected value
  const [selectedFranchiseValue, setSelectedFranchiseValue] = useState();
  const states = allState.states.map((stateData) => stateData.state);
  const darkModeEnabled = useSelector(selectDarkMode);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value); // Update selected value
    setData([]);
    const state = event.target.value;
    console.log(state);
    let data = {
      state: event.target.value,
    };
    axios
      .post(
        `${baseUrl.apiUrl}` + "/portfolio/portfolio/filter-bmm-by-state",
        data
      ) //localhost:4000/portfolio/filter-franchise-by-state{

      .then((res) => {
        setData(res.data.FilterBmmData);
        console.log(res.data.FilterBmmData);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const handleSelectFranchiseChange = (event) => {
    setSelectedFranchiseValue(event.target.value); // Update selected value
    setFranchiseData([]);
    const state = event.target.value;
    console.log(state);
    let data = {
      state: event.target.value,
    };
    axios
      .post(
        `${baseUrl.apiUrl}` + "/portfolio/portfolio/filter-franchise-by-state",
        data
      )

      .then((res) => {
        setFranchiseData(res.data.FilterFranchiseData);
        console.log(res.data.FilterFranchiseData);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  useEffect(() => {
    fetchBMMData();
    fetchFranchiseData();
  }, []);

  const fetchBMMData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl.apiUrl}` + "/portfolio/portfolio/fetch-all-bmm"
      );
      console.log("Data fetched", response.data.BmmData);
      setData(response.data.BmmData); // Assuming the response contains an array of BMM names
    } catch (error) {
      console.error("Error fetching BMM data:", error);
    }
  };

  const fetchFranchiseData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl.apiUrl}` + "/portfolio/portfolio/fetch-all-franchise"
      );
      console.log("Data fetched", response.data.FranchiseData);
      setFranchiseData(response.data.FranchiseData);
    } catch (error) {
      console.error("Error fetching Franchise data:", error);
    }
  };
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center ${
          darkModeEnabled ? "bg-gray-900" : "bg-gray-50"
        } `}
      >
        <div
          className={`${
            darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
          } w-full  h-auto space-y-6 py-10 bg-gradient-to-custom`}
        >
          <p
            className={`${
              darkModeEnabled ? "text-white" : "text-gray-800"
            }  text-opacity-80 text-center font-black text-xl md:text-2xl lg:text-2xl `}
          >
            BMM
          </p>
          <div className="text-black flex justify-end">
            {/* {" "}
            <select
              className={`${
                darkModeEnabled ? "text-white" : ""
              }bg-transparent border rounded-md  appearance-none`}
              id="AllState"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">Select a State</option>
              {states.map((state, index) => (
                <option key={index} value={state} className="text-black">
                  {state}
                </option>
              ))}
            </select> */}
          </div>
          <div className="overflow-x-auto flex ">
            <div className=" flex gap-4 justify-center">
              {/* Check if setData has data and is an array */}
              {data && Array.isArray(data) && data.length > 0 ? (
                BMMDATANEW.map((bmm, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center h-auto"
                  >
                    <div className="relative h-60 w-80 rounded-lg bg-gradient-to-r to-indigo-700 from-indigo-10% via-sky-30% from-emerald-500 to-emerald-90% p-2 flex flex-col items-center justify-end transform rotateY-5 rotateX-5">
                      <div className="relative z-10 bg-indigo-700 h-28 w-full flex items-center justify-center ">
                        <p className="font-thin text-white text-lg overflow-hidden max-w-full break-words mt-3 text-center">
                          <br />
                          {bmm.name}
                        </p>
                      </div>
                      <div className="absolute z-50 border-4 border-white top-1 rounded-full overflow-hidden object-cover">
                        <img
                          src={BMMAvatar}
                          alt="Profile"
                          className="h-40 w-40 object-cover transform rotate-5"
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className=" flex flex-col justify-center text-center ">
                  <img
                    src={noDataFound}
                    alt="No BMM data available"
                    className="w-48 h-48 md:w-72 md:h-72 lg:w-72 lg:h-72"
                  />
                  <p
                    className={`${
                      darkModeEnabled ? "text-white" : ""
                    } font-tomorrow text-lg `}
                  >
                    No BMM data available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

{/* franchise */}
        <div
          className={`${
            darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
          } w-full h-auto bg-gradient-to-custom mt-10 space-y-6 py-10`}
        >
          <p
            className={`${
              darkModeEnabled ? "text-white" : "text-gray-800"
            }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl`}
          >
            Franchise/Business Consultant
          </p>
          <div className="text-black flex justify-end ">
            {" "}
            {/* <select
              className={`${
                darkModeEnabled ? "text-white" : ""
              }bg-transparent border rounded-md  appearance-none`}
              id="AllState"
              value={selectedFranchiseValue}
              onChange={handleSelectFranchiseChange}
            >
              <option value="">Select a State</option>
              {states.map((state, index) => (
                <option key={index} value={state} className="text-black">
                  {state}
                </option>
              ))}
            </select> */}
          </div>
          <div className="overflow-x-auto ">
            <div className="flex gap-4 justify-center">
              {/* Check if setData has data and is an array */}
              {franchiseData &&
              Array.isArray(franchiseData) &&
              franchiseData.length > 0 ? (
                FranchiseData.map((franchise, index) => (
                  <div
                    key={index}
                    className="flex justify-center  items-center h-auto"
                  >
                    <div className="relative h-60 w-80 rounded-lg bg-gradient-to-r to-indigo-700 from-indigo-10% via-sky-30% from-emerald-500 to-emerald-90% p-2 flex flex-col items-center justify-end transform rotateY-5 rotateX-5">
                      <div className="relative z-10 bg-indigo-700 h-28 w-full flex items-center justify-center ">
                        <p className="font-thin text-white text-lg overflow-hidden max-w-full break-words mt-10 text-center">
                          {/* {franchise.franchiseId} */}
                          FRANCHISE/CONSULTANT :<br/>                       
                          {franchise.name}
                        </p>
                      </div>
                      <div className="absolute z-50 border-4 border-white top-1 rounded-full overflow-hidden object-cover">
                        <img
                          src={BMMAvatar}
                          alt="Profile"
                          className="h-40 w-40 object-cover transform rotate-5"
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className=" flex flex-col justify-center text-center">
                  <img
                    src={noDataFound}
                    alt="No BMM data available"
                    className="w-48 h-48 md:w-72 md:h-72 lg:w-72 lg:h-72"
                  />
                  <p
                    className={`${
                      darkModeEnabled ? "text-white" : ""
                    } font-tomorrow text-lg `}
                  >
                    No Franchise data available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`${
            darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
          } w-full h-auto bg-gradient-to-custom fle space-y-6 mt-10 py-10`}
        >
          <p
            className={`${
              darkModeEnabled ? "text-white" : "text-gray-800"
            }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl`}
          >
            Core team
          </p>
          <div className="flex w-full  flex-wrap justify-center gap-4">
            {Management.map((items, index) => (
              <div
                key={index}
                className="flex justify-center  items-center"
              >
                <div className="relative h-60 w-80 rounded-lg bg-gradient-to-r to-indigo-700 from-indigo-10% via-sky-30% from-emerald-500 to-emerald-90% p-2 flex flex-col items-center justify-end transform rotateY-5 rotateX-5">
                  <div className="relative z-10 bg-indigo-700 h-28 w-full flex items-center justify-center ">
                    <p className="font-thin text-white text-lg overflow-hidden max-w-full break-words mt-3 text-center">
                      <br />

                      {items.name}
                    </p>
                  </div>
                  <div className="absolute z-50 border-4 border-white top-1 rounded-full overflow-hidden object-cover">
                    <img
                      src={BMMAvatar}
                      alt="Profile"
                      className="h-40 w-40 object-cover transform rotate-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${
            darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
          } w-full h-auto bg-gradient-to-custom fle space-y-6  mt-10 py-10`}
        >
          <p
            className={`${
              darkModeEnabled ? "text-white" : "text-gray-800"
            }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl `}
          >
            Back Office
          </p>
          <div className="flex w-full  flex-wrap justify-center  gap-4">
            {BackOffice.map((items, index) => (
              <div
                key={index}
                className="flex justify-center  items-center"
              >
                <div className="relative h-60 w-80 rounded-lg bg-gradient-to-r to-indigo-700 from-indigo-10% via-sky-30% from-emerald-500 to-emerald-90% p-2 flex flex-col items-center justify-end transform rotateY-5 rotateX-5">
                  <div className="relative z-10 bg-indigo-700 h-28 w-full flex items-center justify-center ">
                    <p className="font-thin text-white text-lg overflow-hidden max-w-full break-words mt-3 text-center">
                      <br />
                      {items.name}
                    </p>
                  </div>
                  <div className="absolute z-50 border-4 border-white top-1 rounded-full overflow-hidden object-cover">
                    <img
                      src={BMMAvatar}
                      alt="Profile"
                      className="h-40 w-40 object-cover transform rotate-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${
            darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
          } w-full h-auto bg-gradient-to-custom fle space-y-6 mt-10 py-10`}
        >
          <p
            className={`${
              darkModeEnabled ? "text-white" : "text-gray-800"
            }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl `}
          >
            Asst. HRD
          </p>
          <div className="flex w-full  flex-wrap justify-center gap-4">
            {AsstHRD.map((items, index) => (
              <div
                key={index}
                className="flex justify-center  items-center"
              >
                <div className="relative h-60 w-80 rounded-lg bg-gradient-to-r to-indigo-700 from-indigo-10% via-sky-30% from-emerald-500 to-emerald-90% p-2 flex flex-col items-center justify-end transform rotateY-5 rotateX-5">
                  <div className="relative z-10 bg-indigo-700 h-28 w-full flex items-center justify-center ">
                    <p className="font-thin text-white text-lg overflow-hidden max-w-full break-words mt-3 text-center">
                      <br />
                      {items.name}
                    </p>
                  </div>
                  <div className="absolute z-50 border-4 border-white top-1 rounded-full overflow-hidden object-cover">
                    <img
                      src={BMMAvatar}
                      alt="Profile"
                      className="h-40 w-40 object-cover transform rotate-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${
            darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
          } w-full h-auto bg-gradient-to-custom fle space-y-6 mt-10 py-10`}
        >
          <p
            className={`${
              darkModeEnabled ? "text-white" : "text-gray-800"
            }  text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl `}
          >
            Digital Marketing
          </p>
          <div className="flex w-full  flex-wrap justify-center gap-4">
            {DigitalMarketing.map((items, index) => (
              <div
                key={index}
                className="flex justify-center  items-center"
              >
                <div className="relative h-60 w-80 rounded-lg bg-gradient-to-r to-indigo-700 from-indigo-10% via-sky-30% from-emerald-500 to-emerald-90% p-2 flex flex-col items-center justify-end transform rotateY-5 rotateX-5">
                  <div className="relative z-10 bg-indigo-700 h-28 w-full flex items-center justify-center ">
                    <p className="font-thin text-white text-lg overflow-hidden max-w-full break-words mt-3 text-center">
                      <br />
                      {items.name}
                    </p>
                  </div>
                  <div className="absolute z-50 border-4 border-white top-1 rounded-full overflow-hidden object-cover">
                    <img
                      src={BMMAvatar}
                      alt="Profile"
                      className="h-40 w-40 object-cover transform rotate-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${
            darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
          } w-full h-auto bg-gradient-to-custom space-y-6 py-10 mt-10`}
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
            } text-center md:text-start lg:text-start  text-gray-800 text-opacity-80  font-tomorrow font-semibold text-xl md:text-xl lg:text-xl `}
          >
            Saas, AI Apps Development, NFT
          </p>
          <div className="flex w-full mt-10 flex-wrap justify-center gap-4">
            {Technical.map((items, index) => (
              <div
                key={index}
                className="flex justify-center  items-center"
              >
                <div className="relative h-60 w-80 rounded-lg bg-gradient-to-r to-indigo-700 from-indigo-10% via-sky-30% from-emerald-500 to-emerald-90% p-2 flex flex-col items-center justify-end transform rotateY-5 rotateX-5">
                  <div className="relative z-10 bg-indigo-700 h-28 w-full flex items-center justify-center ">
                    <p className="font-thin text-white text-lg overflow-hidden max-w-full break-words mt-3 text-center">
                      <br />
                      TECHNICAL DEV : {items.name}
                    </p>
                  </div>
                  <div className="absolute z-50 border-4 border-white top-1 rounded-full overflow-hidden object-cover">
                    <img
                      src={items.imageUrl}
                      alt="Profile"
                      className="h-40 w-40 object-cover transform rotate-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p
            className={`${
              darkModeEnabled ? "text-white" : "text-gray-800"
            }  md:text-start lg:text-start  text-gray-800 text-opacity-80  font-tomorrow font-semibold text-xl md:text-xl lg:text-xl space-y-6  text-start px-4`}
          >
            Saas, AI Apps Development, Blockchain Technology,System Security
          </p>
          <div className="flex w-full flex-wrap justify-center gap-4">
            {Technical2.map((items, index) => (
              <div
                key={index}
                className="flex justify-center  items-center"
              >
                <div className="relative h-60 w-80 rounded-lg bg-gradient-to-r to-indigo-700 from-indigo-10% via-sky-30% from-emerald-500 to-emerald-90% p-2 flex flex-col items-center justify-end transform rotateY-5 rotateX-5">
                  <div className="relative z-10 bg-indigo-700 h-28 w-full flex items-center justify-center ">
                    <p className="font-thin text-white text-lg overflow-hidden max-w-full break-words mt-3 text-center">
                      <br />
                      TECHNICAL DEV : {items.name}
                    </p>
                  </div>
                  <div className="absolute z-50 border-4 border-white top-1 rounded-full overflow-hidden object-cover">
                    <img
                      src={BMMAvatar}
                      alt="Profile"
                      className="h-40 w-40 object-cover transform rotate-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${
            darkModeEnabled ? "bg-gray-800" : "bg-gray-200"
          } w-full h-auto bg-gradient-to-custom p-10 md:p-20 lg:-20 space-y-6 py-10 mt-10`}
        >
          <p
            className={` ${
              darkModeEnabled ? "text-white" : "text-gray-800"
            } text-gray-800 text-opacity-80 text-center font-black text-xl md:text-3xl lg:text-3xl`}
          >
            Founder & Co-Founder
          </p>
          <div className="flex w-full mt-10 flex-wrap justify-center gap-4">
            {Founder.map((items, index) => (
              <div
                key={index}
                className="flex justify-center  items-center"
              >
                <div className="relative h-60 w-80 rounded-lg bg-gradient-to-r to-indigo-700 from-indigo-10% via-sky-30% from-emerald-500 to-emerald-90% p-2 flex flex-col items-center justify-end transform rotateY-5 rotateX-5">
                  <div className="relative z-10 bg-indigo-700 h-28 w-full flex items-center justify-center ">
                    <p className="font-thin text-white text-lg overflow-hidden max-w-full break-words mt-3 text-center">
                      <br />
                      {items.name}
                    </p>
                  </div>
                  <div className="absolute z-50 border-4 border-white top-1 rounded-full overflow-hidden object-cover">
                    <img
                      src={items.imageUrl}
                      alt="Profile"
                      className="h-40 w-40 object-cover transform rotate-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhitePaperLowerSection;
