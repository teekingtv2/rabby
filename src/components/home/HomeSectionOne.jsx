import React from "react";
import bannerVidBg from "../../../public/assets/videos/banner-bg.mp4";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const HomeSectionOne = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000c2]">
      <video src={bannerVidBg} autoPlay loop muted className="banner-vd" />
      <NavBar />
      <div className="top-[100px] container h-[70vh] md:h-[80%] md:py-10 relative px-8 md:px-10 flex flex-col gap-6">
        <div className="relative w-[100%] md:w-[45%] h-[65vh] md:h-[80vh]">
          <div className="absolute left-0 bottom-5 md:bottom-3 flex flex-col gap-5">
            <h1 className=" text-white text-[30px] md:text-[40px] uppercase ">
              Deamonizing the blockchain industry
            </h1>
            <Link to="/register" className="hidden md:flex">
              <div className="btnn1 text-sm font-bold flex justify-center items-center hover:scale-105 ease-in duration-300">
                <span className="mr-2">Explore platform</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="text-[17px] bg-[#000] px-5 py-2 text-white rounded-2xl"
          style={{ border: "1px dashed #fff" }}
        >
          <marquee behavior="" direction="">
            Welcome to {import.meta.env.VITE_APP_NAME}. A platform where your
            cyrptocurrecny related problesms are solved through inteligence
            gathering
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
