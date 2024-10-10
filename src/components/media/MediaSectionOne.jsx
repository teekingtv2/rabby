import React from "react";
import NavBar from "../NavBar";
import bannerVidBg from "../../../public/assets/videos/banner-bg.mp4";
import { partnerLogos } from "../../utils/data";

const MediaSectionOne = () => {
  return (
    <div className="w-[100vw] bg-[#000000ee] flex flex-col items-center">
      <video src={bannerVidBg} autoPlay loop muted className="banner-vd" />
      <NavBar />
      <div className="top-[100px] h-full max-w-[1000px] pt-[17vh] md:pt-[200px] pb-[180px] md:pb-[200px] items-center px-10 md:px-0">
        <div className="w-full md:w-[70%] mx-auto text-center mb-7">
          <h1 className="text-white text-[30px] md:text-[40px] uppercase mb-5 ">
            Trusted globally by leading organizations
          </h1>
          <p>
            Government agencies, financial institutions, and crypto businesses
            worldwide rely on {import.meta.env.VITE_APP_NAME} for their
            blockchain intelligence needs
          </p>
        </div>
        <div
          className="p-5 rounded-2xl bg-black flex flex-col gap-5 right-box"
          style={{ border: "1px dashed #fff" }}
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-7 md:gap-[30px]">
            {partnerLogos &&
              partnerLogos.map((partner, i) => (
                <div
                  key={i}
                  className="col-span-1 bg-white p-2 rounded-lg max-w-[120px] flex justify-center items-center hover:scale-110 ease-in duration-300"
                >
                  <img
                    src={`/assets/images/partners/${partner}`}
                    alt=""
                    className=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSectionOne;
