import React from "react";
import NavBar from "../NavBar";
import bannerVidBg from "../../../public/assets/videos/banner-bg.mp4";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSectionOne = () => {
  return (
    <div className="w-[100vw] bg-[#000000e5] flex flex-col items-center">
      <video autoPlay loop muted src={bannerVidBg} className="banner-vd" />
      <NavBar />
      <div className="top-[100px] h-full md:h-[100vh] max-w-[1000px] pt-[17vh] md:pt-[200px] pb-[180px] md:pb-[200px] items-center px-10 md:px-0">
        <div className="w-full md:w-[70%] mx-auto text-center mb-10 md:mb-[100px]">
          <h1 className="text-white text-[30px] md:text-[40px] uppercase mb-5 ">
            Get in Touch
          </h1>
          <p>
            What query do you have for us? Use any of the means below to reach
            out to us and we will reach back to you as son as possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-[50px] text-white">
          <Link
            to="https://x.com"
            target="_blank"
            className="col-span-1 p-7 rounded-2xl bg-black flex flex-col items-center gap-3 right-box"
            style={{ border: "1px dashed #fff" }}
          >
            <FaTwitter size={35} />
            <p>@elderintelligence</p>
          </Link>
          <Link
            to="https://telegram.com"
            target="_blank"
            className="col-span-1 p-5 rounded-2xl bg-black flex flex-col items-center gap-3 right-box"
            style={{ border: "1px dashed #fff" }}
          >
            <FaTelegram size={35} />
            <p>@elderintelligence</p>
          </Link>
          <Link
            to="https://discord.com"
            target="_blank"
            className="col-span-1 p-5 rounded-2xl bg-black flex flex-col items-center gap-3 right-box"
            style={{ border: "1px dashed #fff" }}
          >
            <FaDiscord size={35} />
            <p>@elderintelligence</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionOne;
