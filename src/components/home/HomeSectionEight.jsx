import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSectionEight = () => {
  return (
    <div className="h-full w-full text-black">
      <div className="container px-5 md:px-14 lg:px-0 pt-10 lg:pt-16 pb-24">
        <div className="relative">
          <img
            src={`/assets/images/dapp-bg.png`}
            alt=""
            className="hidden lg:block"
          />
          <img
            src={`/assets/images/dapp-bg-mobile.png`}
            alt=""
            className="lg:hidden"
          />
          <div className="absolute top-[32%] lg:top-[16%] left-[8%] lg:left-[30%] z-50 flex flex-col items-center gap-2 lg:gap-4 px-6 lg:p-16 text-white text-center">
            <h2 className="text-[40px] font-black lg:text-[65px] leading-[20px] text-[#7084FF] mb-4">
              1000+
            </h2>
            <p className="text-[15px] lg:text-[20px] mb-3 leading-4 font-medium text-[#525966]">
              Dapps Integrated Rabby Wallet
            </p>
            <Link
              to="/connect"
              className="rounded-full bg-[#7084FF] px-12 py-3 lg:py-5 w-max text-white flex items-center gap-2"
            >
              <span className="textl-lg lg:text-xl font-bold">
                Integrated Doc
              </span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionEight;
