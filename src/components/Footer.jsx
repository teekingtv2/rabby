import React from "react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full z-30 px-2 md:px-0 bg-[#000000] text-[#fff] py-3 md:py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-10">
        <div className="col-span-1 text-[10px] md:text-[11px]">
          © 2024 ${import.meta.env.VITE_APP_NAME}. All rights reserved
          <br />
          ATTENTION: We dont sell any products through the website.
        </div>
        <div className="col-span-1 text-[17px] md:text-[18px] flex gap-6 items-center justify-end">
          <Link to="https://x.com/">
            <FaTwitter />
          </Link>
          <Link to="https://telegram.com/">
            <FaTelegram />
          </Link>
          <Link to="https://discord.com/">
            <FaDiscord />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
