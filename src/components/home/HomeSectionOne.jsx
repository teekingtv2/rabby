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

          <div className="w-ful lg:w-[95%] flex flex-col border-[#ffffff83] border-[1px] rounded-2xl">
            <div className="grid grid-cols-3 border-b-[1px] border-[#ffffff83]">
              <div
                onClick={() => setDevice("browser")}
                className={
                  device === "browser"
                    ? "col-span-1 flex gap-1 lg:gap-3 justify-center items-center p-3 cursor-pointer border-r-[1px] border-[#ffffff83]"
                    : "col-span-1 flex gap-1 lg:gap-3 justify-center items-center p-3 cursor-pointer border-r-[1px] border-[#ffffff83] text-[#ffffffa4]"
                }
              >
                <img
                  src="/assets/images/extension.svg"
                  alt=""
                  className="w-[18px] lg:w-7"
                />
                <span className="text-md lg:text-lg font-medium">
                  Extension
                </span>
              </div>
              <div
                onClick={() => setDevice("desktop")}
                className={
                  device === "desktop"
                    ? "col-span-1 flex gap-1 lg:gap-3 justify-center items-center p-3 cursor-pointer border-r-[1px] border-[#ffffff83]"
                    : "col-span-1 flex gap-1 lg:gap-3 justify-center items-center p-3 cursor-pointer border-r-[1px] border-[#ffffff83] text-[#ffffffa4]"
                }
              >
                <img
                  src="/assets/images/desktop.svg"
                  alt=""
                  className="w-[18px] lg:w-7"
                />
                <span className="text-md lg:text-lg font-medium">Desktop</span>
              </div>
              <div
                onClick={() => setDevice("mobile")}
                className={
                  device === "mobile"
                    ? "relative col-span-1 flex gap-1 lg:gap-3 justify-center items-center p-3 cursor-pointer"
                    : "relative col-span-1 flex gap-1 lg:gap-3 justify-center items-center p-3 cursor-pointer text-[#ffffffa4]"
                }
              >
                <img
                  src="/assets/images/mobile.svg"
                  alt=""
                  className="w-[18px] lg:w-7"
                />
                <span className="text-md lg:text-lg font-medium">Mobile</span>
                <div className="absolute lg:relative -top-2 lg:top-0 -right-2 lg:right-0 text-sm rounded-full px-3 py-[2px] bg-[#9AACFE]">
                  Beta
                </div>
              </div>
            </div>
            <div className="px-5 py-8 lg:p-8 flex flex-col">
              {device === "browser" && (
                <div className="flex justify-center items-center gap-4 mb-10 mt-5">
                  <Link to="/connect" className="banner-btn ">
                    <img
                      src="/assets/images/chrome.svg"
                      alt=""
                      className="w-8"
                    />
                    <span className="text-md lg:text-lg">Chrome</span>
                  </Link>
                  <Link to="/connect" className="banner-btn ">
                    <img
                      src="/assets/images/firefox-light.svg"
                      alt=""
                      className="w-8"
                    />
                    <span className="text-md lg:text-lg">Firefox</span>
                  </Link>
                </div>
              )}

              {device === "desktop" && (
                <div className="flex flex-col gap-5 items-center">
                  <span className="text-[13px] lg:text-md text-medium">
                    Supported on MacOS 11+ and Windows 10+
                  </span>
                  <div className="flex justify-center items-center gap-1 lg:gap-4 mb-8">
                    <Link to="/connect" className="banner-btn2 ">
                      <img
                        src="/assets/images/apple.svg"
                        alt=""
                        className="w-4 lg:w-6"
                      />
                      <span className="text-[11px] lg:text-md">
                        macOS Intel
                      </span>
                    </Link>
                    <Link to="/connect" className="banner-btn2 ">
                      <img
                        src="/assets/images/apple.svg"
                        alt=""
                        className="w-4 lg:w-6"
                      />
                      <span className="text-[11px] lg:text-md">
                        macOS M-Series
                      </span>
                    </Link>
                    <Link to="/connect" className="banner-btn2 ">
                      <img
                        src="/assets/images/windows.svg"
                        alt=""
                        className="w-4 lg:w-6"
                      />
                      <span className="text-[11px] lg:text-md">Windows</span>
                    </Link>
                  </div>
                </div>
              )}

              {device === "mobile" && (
                <div className="flex flex-col gap-3 items-center">
                  <span className="text-[13px] lg:text-md text-medium">
                    Supported on iOS 15+ and Android 11+
                  </span>
                  <div className="flex justify-center items-center gap-4 mb-5">
                    <Link to="/connect" className="banner-btn3">
                      <img
                        src="/assets/images/icon-google-play.png"
                        alt=""
                        className="w-7 h-7"
                      />
                      <span className="text-md">Google Play</span>
                    </Link>
                    <Link to="/connect" className="banner-btn3">
                      <img
                        src="/assets/images/apple.svg"
                        alt=""
                        className="w-7 h-7"
                      />
                      <span className="text-md">Google Play</span>
                    </Link>
                  </div>
                </div>
              )}

              <div className="flex justify-center items-center gap-2">
                <img src="/assets/images/discord.png" alt="" className="w-4" />
                <span className="text-sm">Join the discussion in Discord</span>
              </div>
            </div>
          </div>

          {/* <Link
            to="/connect"
            className="w-max btnn1 px-6 py-3 text-sm font-bold flex justify-center items-center"
          >
            <span className="mr-2">Get started</span>
            <span>
              <FaArrowCircleRight />
            </span>
          </Link> */}
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
