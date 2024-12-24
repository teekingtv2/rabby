import React from "react";

const HomeSectionThree = () => {
  return (
    <div className="h-full w-full text-black">
      <div className="container px-8 md:px-14 lg:px-0 pb-40 md:pb-40 lg:pt-10">
        <h1 className="text-black text-[18px] md:text-[36px] text-center">
          How is Rabby different from MetaMask
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-12 items-center gap-10 lg:gap-3">
          <div className="hidden lg:block col-span-1">
            <img src="/assets/images/multi-chain-3.png" alt="" />
          </div>
          <div className="col-span-1 flex flex-col items-center lg:items-start gap-4">
            <p className="w-max uppercase title-btn px-4 py-2 font-black rounded-md text-md lg:text-[18px]">
              Multi-chain
            </p>
            <h1 className="text-xl lg:text-2xl">
              Smooth multi-chain experience
            </h1>
            <p className="text-center lg:text-start">
              Automatically switch to the corresponding chain based on your
              visited site
            </p>
          </div>
          <div className="lg:hidden col-span-1">
            <img src="/assets/images/multi-chain-3.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-12 items-center gap-10 lg:gap-3">
          <div className="col-span-1 flex flex-col items-center lg:items-start gap-4">
            <p className="w-max uppercase title-btn px-4 py-2 font-black rounded-md text-md lg:text-[18px]">
              Security
            </p>
            <h1 className="text-xl lg:text-2xl">Pre-sign check for Security</h1>
            <p className="text-center lg:text-start">
              Supported by Rabby security engine
            </p>
          </div>

          <div className="lg:block col-span-1">
            <img src="/assets/images/security-check-3.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-12 items-center gap-10 lg:gap-3">
          <div className="hidden lg:block col-span-1">
            <img src="/assets/images/sign-tx-3.png" alt="" />
          </div>
          <div className="col-span-1 flex flex-col items-center lg:items-start gap-4">
            <p className="w-max uppercase title-btn px-4 py-2 font-black rounded-md text-md lg:text-[18px]">
              Experience
            </p>
            <h1 className="text-xl lg:text-2xl">
              You see exactly what you sign
            </h1>
            <p className="text-center lg:text-start">
              The first wallet showing your estimated balance change
            </p>
          </div>
          <div className="lg:hidden col-span-1">
            <img src="/assets/images/sign-tx-3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionThree;
