import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSectionTwo = () => {
  return (
    <div className="w-[100vw] bg-[#000000f0] flex flex-col items-center">
      <div className="max-w-[1000px] pt-[110px] md:pt-[170px] pb-[100px] md:pb-[100px] items-center px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-1">
          <div className="col-span-1 flex flex-col gap-5 md:gap-10">
            <h1 className=" text-white text-[30px] md:text-[40px] uppercase ">
              Blockchain Investigations & Loss Receovery
            </h1>
            <p>
              Investigate, monitor, and detect crypto and digital asset fraud
              and financial crime
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
          <div className="col-span-1">
            {/* > */}
            <img
              src="/assets/images/about-2.gif"
              className="w-full updown rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
