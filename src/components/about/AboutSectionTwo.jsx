import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSectionTwo = () => {
  return (
    <div className="w-[100vw] bg-[#000000f3] flex flex-col items-center">
      <div className="max-w-[1000px] pt-[100px] md:pt-[100px] pb-5 md:pb-[100px] items-center px-10 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="col-span-1 flex flex-col gap-5 md:gap-10">
            <h1 className=" text-white text-[30px] md:text-[40px] uppercase ">
              The most accurate issue resolving platform
            </h1>
            <p>
              With us, you have the confidence of getting issues around your
              digital assets portfolios, assets loss recovery, key phrase
              issues, staking management across all paltforms among others.
              <br /> <br />
              In our few years of existence, we have been helping crypto
              enthusiasts recover assets, track transactions, and get access to
              lost assets on staking and investment platforms.
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              src="/assets/images/about-2.gif"
              className="w-full rounded-full dancingSlide"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
