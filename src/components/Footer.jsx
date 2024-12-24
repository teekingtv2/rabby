import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full z-30 px-2 md:px-0 bg-[#19233C] py-3 md:py-5">
      <div className="container py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="col-span-1">
          <img src="/assets/images/logo.svg" alt="" />
        </div>
        <div className="flex flex-col items-center ">
          <div className="text-white flex gap-3 text-[14px] md:text-[14px]">
            <Link to="" className="">
              Brand
            </Link>
            <span>-</span>
            <Link to="" className="">
              Terms of Use
            </Link>
            <span>-</span>
            <Link to="" className="">
              Privacy Policy
            </Link>
          </div>
          <span className="text-[14px] text-[#A3A7B1]">
            © 2024 rabby.io. All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
