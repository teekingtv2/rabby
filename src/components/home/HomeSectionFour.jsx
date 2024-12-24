import React from "react";
import { auditData } from "../../utils/data";

const HomeSectionFour = () => {
  return (
    <div className="h-full w-full bg-[#F2F4F7] text-black">
      <div className="container px-8 md:px-14 lg:px-0 py-28">
        <h1 className="text-black text-[22px] md:text-[36px] text-center mb-5">
          Security over user experience
        </h1>
        <p className="text-md font-medium text-center mb-10 lg:px-12">
          We make Rabby Wallet open-source, enabling anyone to review the code
          for security and functionality. Rabby Wallet undergoes regular audits
          by reputable third-party security firms to ensure the highest
          standards of protection.
        </p>
        <div className="w-full lg:w-[50%] mx-auto flex justify-between mb-8">
          <span className="text-3xl lg:text-4xl text-[#7084FF] underline">
            2024
          </span>
          <span className="text-3xl lg:text-4xl text-[#6A7591]">2023</span>
          <span className="text-3xl lg:text-4xl text-[#6A7591]">2022</span>
          <span className="text-3xl lg:text-4xl text-[#6A7591]">2021</span>
        </div>
        <div className="flex flex-col rounded-2xl bg-white">
          <div className="flex items-center p-4 gap-2 text-white bg-[#2ABB7F] rounded-tr-2xl rounded-tl-2xl">
            <img src="/assets/images/audit-complete.svg" alt="" className="" />
            <span className="font-semibold">Audit Completed</span>
          </div>
        </div>
        {auditData &&
          auditData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row justify-between items-start bg-white p-10 border-b-[1px] border-[#E5E9EF] gap-7 lg:gap-0"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={`/assets/images/audit/${item.logo}`}
                  alt=""
                  className="w-12 lg:w-[70px]"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 items-center">
                    <span className="text-xl font-semibold">{item.name}</span>
                    <img src="/assets/images/website.svg" alt="" className="" />
                    <img src="/assets/images/twitter.svg" alt="" className="" />
                  </div>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <div className="px-3 py-[6px] flex gap-2 rounded-lg border-[1px] border-[#E0E5EC]">
                      <img src="/assets/images/time.svg" alt="" />
                      <span className="text-sm lg:text-md font-semibold text-[#6A7587]">
                        {item.date}
                      </span>
                    </div>
                    <div className="px-3 py-[6px] flex gap-2 rounded-lg border-[1px] border-[#E0E5EC]">
                      <img src="/assets/images/extension-2.svg" alt="" />
                      <span className="text-sm lg:text-md font-semibold text-[#6A7587]">
                        Rabby Extension
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-max flex items-center justify-center bg-[#D8F2E7] h-max py-2 px-4 rounded-xl cursor-pointer gap-2">
                <span className="font-semibold text-lg text-[#2ABB7F]">
                  View Report
                </span>
                <img
                  src="/assets/images/external-link.svg"
                  alt=""
                  className="w-[20px]"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeSectionFour;
