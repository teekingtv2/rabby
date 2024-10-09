import React from "react";
import NavBar from "../NavBar";
import bannerVidBg from "../../../public/assets/videos/banner-bg.mp4";

const APIBody = () => {
  return (
    <div className="w-[100vw] bg-[#000000cc] flex flex-col items-center">
      <video src={bannerVidBg} autoPlay loop muted className="banner-vd" />
      <NavBar />
      <div className="top-[100px] h-[100vh] max-w-[1000px] pt-[17vh] md:pt-[200px] pb-[180px] md:pb-[200px] flex flex-col justify-center items-center px-10 md:px-0">
        <h1 className="text-white text-[30px] md:text-[40px] uppercase mb-5 ">
          API is Under Development
        </h1>
        <p>We are curently building. Will be ready soon</p>
      </div>
    </div>
  );
};

export default APIBody;
