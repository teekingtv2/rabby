import { Link } from "react-router-dom";
import vid from "../../../public/assets/videos/play.webm";
import { FaArrowCircleRight } from "react-icons/fa";

const HomeSectionOne = () => {
  return (
    <div className="h-full w-[100vw] bg-[#0A0A0B] text-white">
      <div className="container px-8 md:px-14 lg:px-0 py-48 md:py-72 grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-10">
        <div className="col-span-1 flex flex-col">
          <h1 className=" text-[30px] lg:text-[46px] leading-[1.3em] mb-6">
            The Decentralized Solution Provider
          </h1>
          <p className="text-[#ACACAC] text-md font-semibold mb-12">
            Everything you need to troubleshoot, Manage and Optimize
            Performance.
          </p>
          <div className="flex gap-10 mb-14">
            <div className="flex flex-col gap-1">
              <p className="font-bold">100+</p>
              <span className="text-[#ACACAC] text-sm">Issues Resolved</span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-bold">$1,500,000+</p>
              <span className="text-[#ACACAC] text-sm">Assets Refunded</span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-bold">100+</p>
              <span className="text-[#ACACAC] text-sm">Happy Clients</span>
            </div>
          </div>
          <Link
            to="/connect"
            className="w-max btnn1 px-6 py-3 text-sm font-bold flex justify-center items-center"
          >
            <span className="mr-2">Get started</span>
            <span>
              <FaArrowCircleRight />
            </span>
          </Link>
        </div>
        <div className="con-span-1">
          {/* <video
            className="h-full"
            src={vid}
            loop
            controls
            autoPlay
            type="video/mp4"
          ></video> */}
          <img
            src="/assets/images/home-1.gif"
            alt=""
            className="border-[2px] border-[#00DBC2] rounded-md dancingSlide"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
