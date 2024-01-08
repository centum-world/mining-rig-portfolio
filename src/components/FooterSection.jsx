import React from "react";
import { FacebookIcon,TwitterIcon,LinkedinIcon } from "../utils/icons";

const FooterSection = () => {
  return (
    <>
      <div className="footer flex mt-10 ">
        <div className="flex bg-gray-50">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex flex-col w-96 p-5 ">
              <h3 className="font-bold text-3xl font-calibri">Centum World</h3>
              <p>
                A New Algorithm for a better Technology Ecosystem to Transform
                your life & Future. The Mission of Centum World is to create a
                Secure & Encrypted , Decentralized Peer to Peer Blockchain
                Technology and a Smart Distribution Management System. An Unique
                Affiliate Business Module to Earn Unlimited Token Rewards via
                "Refer & Earn" Program of our 10+ SaaS Cloud Apps, and achieve
                goals for a better next Generation.
              </p>
            </div>
            <div className="h-full border-l-2 border-blue-600"></div>
            <div className="flex flex-col  w-96 p-5">
              <h3 className="font-bold font-calibri text-3xl">Quick Links</h3>
              <a
                target="_blank"
                href="https://centumo.centumworld.com/#/exchange"
                className="font-calibri hover-underline cursor-pointer p-1 font-semibold"
              >
                Centumo Swap
              </a>
              <a
                target="_blank"
                href="https://coinsgem.com/token/0xa6b077aba99583f8f2aa03e2ef0df75136c7e59a"
                className="font-calibri hover-underline cursor-pointer p-1 font-semibold"
              >
                CENTUMO TOKEN
              </a>
              <a
                target="_blank"
                href="http://jettradefx.in/"
                className=" font-calibri hover-underline cursor-pointer p-1 font-semibold"
              >
                Jettrade FX
              </a>
               <div className="flex flex-row justify-arround gap-2 ">
               <a
                  target="_blank"
                  href="https://wwww.facebook.com/CENTUMWORLD?mibextid=ZbWKeL"
                  className="font-calibri font-semibold hover-underline cursor-pointer p-1"
                >
                  <FacebookIcon color='blue'/>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/centumworld"
                  className=" font-calibri font-semibold hover-underline cursor-pointer p-1"
                >
                  <LinkedinIcon color='blue'/>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/centumworld?t=1XYIFt8eoKUo1HyZQUzd3Q&s=08"
                  className="font-calibri font-semibold hover-underline cursor-pointer p-1"
                >
                  <TwitterIcon color='blue' />
                </a>
               </div>
            </div>
            <div className="h-full border-l-2 border-blue-600"></div>
            <div className="flex flex-col  w-96 p-5 ">
              <h1 className="font-bold text-3xl font-calibri">Company Info.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
