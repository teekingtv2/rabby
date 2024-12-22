import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleNavToggle = () => {
    setNav(!nav);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <div className="fixed w-full shadow-lg z-[100] bg-[#0A0A0B]">
        <div className="container py-3 lg:py-4 px-5 md:px-10 lg:px-0 flex justify-between items-center w-full h-full">
          <Link to="/" className="flex flex-col gap-0">
            <p className="uppercase font-bold text-[18px] lg:text-[20px] text-white tracking-[2px] lg:tracking-[8px] mb-0">
              Decentralized
            </p>
            <p className="lowercase text-[11px] md:text-[14px] text-[#00DBC2] tracking-widest mt-0">
              Launchpad
            </p>
          </Link>
          <Link
            to="/connect"
            className="btnn1 px-4 py-2 text-sm font-bold flex justify-center items-center"
          >
            <span className="mr-2">Get started</span>
            <span>
              <FaArrowCircleRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
