import { Link } from "react-router-dom";
import vid from "../../../public/assets/videos/play.webm";
import { FaArrowCircleRight } from "react-icons/fa";
import NavBar from "../NavBar";
import { useState } from "react";

const HomeSectionOne = () => {
  const [device, setDevice] = useState("browser");
  return (
    <div className="h-full w-[100vw] banner-section text-white">
      <NavBar />
      <div className="container px-8 md:px-14 lg:px-0 pb-32 lg:pb-52 pt-[45px] lg:pt-16 grid grid-cols-2 lg:grid-cols-3 items-center gap-14 lg:gap-7">
        <div className="col-span-2 flex flex-col">
          <h1 className="text-[26px] lg:text-[39px] leading-[1.3em] mb-6">
            The game-changing wallet for Arbitrum Nova
          </h1>
          <div className="grid grid-cols-3 lg:flex gap-0 lg:gap-2 mb-10">
            <div className="col-span-3 flex gap-2 items-center justify-center cursor-pointer p-2 rounded-md hover:bg-[#797BFA] mb-3 lg:mb-0">
              <img
                src="/assets/images/slowmist.png"
                alt=""
                className="w-[22px]"
              />
              <span className="text-sm">Audited by SlowMist</span>
            </div>
            <div className="col-span-2 flex gap-2 items-center cursor-pointer px-1 py-2 lg:p-2 rounded-md hover:bg-[#797BFA]">
              <img
                src="/assets/images/leastauthority.svg"
                alt=""
                className="w-[22px]"
              />
              <span className="text-sm">Audited by Least Authority</span>
            </div>
            <div className="w-max col-span-1 flex gap-2 items-center cursor-pointer px-1 py-2 lg:p-2 rounded-md hover:bg-[#797BFA]">
              <img
                src="/assets/images/github.png"
                alt=""
                className="w-[22px]"
              />
              <span className="text-sm">Open Source</span>
            </div>
          </div>

          <Link to="/get-started" className="banner-btn ">
            <span className="text-md lg:text-lg">Get Started</span>
          </Link>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <img
            src="/assets/images/hero-16.png"
            alt=""
            className="w-full border-[1px] border-[#ffffffc9] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
