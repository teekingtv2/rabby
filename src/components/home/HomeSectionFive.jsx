import React from "react";

const HomeSectionFive = () => {
  return (
    <div className="h-full w-full text-black">
      <div className="container px-5 md:px-14 lg:px-0 py-10 lg:py-16">
        <div className="relative">
          <img
            src={`/assets/images/download-bg-2.png`}
            alt=""
            className="hidden lg:block"
          />
          <img
            src={`/assets/images/download-bg-mobile-2.png`}
            alt=""
            className="h-[270px] lg:hidden"
          />
          <div className="absolute top-[22%] lg:top-[5%] left-0 lg:left-20 z-50 flex flex-col items-center gap-2 lg:gap-4 px-6 lg:p-16 text-white text-center">
            <h2 className="text-[13px] font-bold lg:text-3xl leading-[20px]">
              Get Rabby Wallet and start your Web3 journey
            </h2>
            <p className="text-[12px] lg:text-lg mb-2 leading-4 font-medium text-[#ffffffce]">
              Add your address to contacts and experience all features without
              importing a private key.
            </p>
            <div className="rounded-full bg-[#FE815F] px-10 py-2 lg:py-3 w-max">
              Download
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFive;
