import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSectionFour = () => {
  return (
    <div className="w-[100vw] bg-[#000000fc] flex flex-col items-center">
      <div className="max-w-[1000px] pt-[100px] md:pt-[170px] pb-10 md:pb-[100px] items-center px-10 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="col-span-1 flex flex-col gap-5 md:gap-10">
            <h1 className=" text-white text-[28px] md:text-[40px] uppercase ">
              Next generation crypto intelligence platform
            </h1>
            <p>
              With our holistic blockchain intelligence suite you can track the
              proceeds of crime as it moves between assets and blockchains
              simultaneously - unlike legacy solutions built for a single
              cryptoasset world.
            </p>
            <Link to="/register" className="hidden md:flex">
              <div className="btnn1 text-sm font-bold flex justify-center items-center hover:scale-105 ease-in duration-300">
                <span className="mr-2">Get Started</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              src="/assets/images/home-1.gif"
              alt=""
              className="dancingSlide rounded-[0px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFour;
