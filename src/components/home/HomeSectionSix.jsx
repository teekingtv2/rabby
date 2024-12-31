import React from "react";
import { Link } from "react-router-dom";
import { chainsData } from "../../utils/data";

const HomeSectionSix = () => {
  return (
    <div className="h-full w-full text-black">
      <div className="container px-5 md:px-14 lg:px-0 pb-16 lg:pb-24">
        <div className="flex justify-center items-center mb-3 lg:mb-8">
          <div className="text-[22px] lg:text-2xl font-bold">
            Rabby has integrated 115 chains
          </div>
          {/* <Link to="/connect" className="hidden lg:flex gap-3">
            <span className="">View Chain Dashboard</span>
            <img src="/assets/images/arrow-right.svg" alt="" className="" />
          </Link> */}
        </div>
        {/* <div className="grid grid-cols-4 lg:grid-cols-8 gap-y-6 lg:gap-y-10">
          {chainsData &&
            chainsData.map((item, i) => (
              <div
                className="col-span-1 flex flex-col gap-1 items-center"
                key={i}
              >
                <img
                  src={`/assets/images/chains/${item.img}`}
                  alt=""
                  className="w-8"
                />
                <span className="text-[12px] text-center">{item.name}</span>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default HomeSectionSix;
