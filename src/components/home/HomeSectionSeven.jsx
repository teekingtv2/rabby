import React from "react";
import {
  signingModeData1,
  signingModeData2,
  signingModeData3,
} from "./../../utils/data";

const HomeSectionSeven = () => {
  return (
    <div className="h-full w-full text-black">
      <div className="container px-5 md:px-14 lg:px-0 py-16 lg:py-20">
        <div className="flex flex-col mb-8 lg:mb-10">
          <div className="text-2xl lg:text-3xl font-bold mb-3">
            Support multiple signing modes
          </div>
          <span className="text-[#525966]">
            You can sign a transaction in any of the following ways
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-9">
          <div className="col-span-1 rounded-lg px-5 lg:px-4 py-8 lg:py-9 border-[1px] border-[#E0E5EC]">
            <div className="flex flex-col gap-5">
              <p className="text-lg lg:text-lg font-medium">Hardware Wallets</p>
              <div className="grid grid-cols-3 gap-y-8 justify-between">
                {signingModeData1 &&
                  signingModeData1.map((item, i) => (
                    <div
                      className="col-span-1 flex flex-col gap-1 items-center"
                      key={i}
                    >
                      <img
                        src={`/assets/images/chains/${item.img}`}
                        alt=""
                        className="w-8"
                      />
                      <span className="text-[12px] text-center text-[#525966]">
                        {item.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="col-span-1 rounded-lg px-5 lg:px-4 py-8 lg:py-9 border-[1px] border-[#E0E5EC]">
            <div className="flex flex-col gap-5">
              <p className="text-lg lg:text-lg font-medium">
                Institutional Wallets
              </p>
              <div className="grid grid-cols-3 gap-y-8 justify-between">
                {signingModeData2 &&
                  signingModeData2.map((item, i) => (
                    <div
                      className="col-span-1 flex flex-col gap-1 items-center"
                      key={i}
                    >
                      <img
                        src={`/assets/images/chains/${item.img}`}
                        alt=""
                        className="w-8"
                      />
                      <span className="text-[12px] text-center text-[#525966]">
                        {item.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 rounded-lg px-5 lg:px-4 py-8 lg:py-9 border-[1px] border-[#E0E5EC]">
            <div className="flex flex-col gap-5">
              <p className="text-lg lg:text-lg font-medium">Mobile Wallets</p>
              <div className="grid grid-cols-3 gap-y-8 justify-between">
                {signingModeData3 &&
                  signingModeData3.map((item, i) => (
                    <div
                      className="col-span-1 flex flex-col gap-1 items-center"
                      key={i}
                    >
                      <img
                        src={`/assets/images/chains/${item.img}`}
                        alt=""
                        className="w-8"
                      />
                      <span className="text-[12px] text-center text-[#525966]">
                        {item.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSeven;
