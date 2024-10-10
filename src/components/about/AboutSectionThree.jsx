import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSectionThree = () => {
  return (
    <div className="w-[100vw] bg-[#000000e3] flex flex-col items-center">
      <div className="max-w-[1000px] pt-[100px] md:pt-[100px] pb-[180px] md:pb-[170px] items-center px-10 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="col-span-1 flex justify-center items-center">
            <img
              src="/assets/images/intlligence-2.png"
              className="w-[85%] left-box"
              alt=""
            />
          </div>
          <div className="col-span-1 flex flex-col gap-5 md:gap-10">
            <h1 className=" text-white text-[30px] md:text-[40px] uppercase ">
              Intuitive, easy-to-use platform
            </h1>
            <p>
              Elder Intelligence improves operational efficiency by reducing
              false positives so that your digital assets always find their way
              back when you loss them illegally. <br /> <br />
              Our intuitive user interface not only lets you quickly explore and
              investigate multiple cryptoassets, but also easily share your
              findings in a clear and engaging visual format. <br /> <br />
              Our user-friendly interface means that you can quickly get up to
              speed - without specialist training - and obtain the valuable
              insights you need fast.
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
        </div>
      </div>
    </div>
  );
};

export default AboutSectionThree;
