import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { socialFeedbacks } from "../../utils/data";

const HomeSectionTwo = () => {
  return (
    <div className="h-full w-full">
      <div className="px-8 md:px-14 lg:px-0 pb-40 md:pb-40 lg:pt-10">
        <h1 className="text-black text-[20px] md:text-[36px] text-center mb-7">
          "Rabby is better in every single way"
        </h1>
        <marquee behavior="alternate" direction="">
          <div className="hidden w-full lg:flex gap-5">
            {socialFeedbacks &&
              socialFeedbacks.map((item, i) => (
                <div
                  key={i}
                  className="w-[300px] lg:w-[700px] flex flex-col justify-center items-center gap-4 border-[1px] border-[#E0E5EC] p-4 rounded-md"
                >
                  <div className="w-full flex justify-start gap-2">
                    <img
                      src={`/assets/images/twitter/${item.img}`}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-lg font-bold text-center -mb-2">
                          {item.name}
                        </p>
                        <p className="text-sm text-black">@{item.username}</p>
                      </div>
                      <img
                        src={`/assets/images/IconVerify.svg`}
                        alt=""
                        className="w-4"
                      />
                    </div>
                  </div>
                  <p className="text-[#ACACAC] text-sm text-wrap">
                    {item.comment}
                  </p>
                </div>
              ))}
          </div>

          <div className="w-full flex lg:hidden gap-5">
            {socialFeedbacks &&
              socialFeedbacks.slice(1, 3).map((item, i) => (
                <div
                  key={i}
                  className="w-[300px] flex flex-col justify-center items-center gap-4 border-[1px] border-[#E0E5EC] p-4 rounded-md"
                >
                  <div className="w-full flex justify-start gap-2">
                    <img
                      src={`/assets/images/twitter/${item.img}`}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-lg font-bold text-center -mb-2">
                          {item.name}
                        </p>
                        <p className="text-sm text-black">@{item.username}</p>
                      </div>
                      <img
                        src={`/assets/images/IconVerify.svg`}
                        alt=""
                        className="w-4"
                      />
                    </div>
                  </div>
                  <p className="text-[#ACACAC] text-sm text-wrap">
                    {item.comment}
                  </p>
                </div>
              ))}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
