import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaWallet,
  FaSignOutAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowCircleRight,
} from "react-icons/fa";
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
      <div className="fixed w-full shadow-lg z-[100] py-3 md:py-4 px-5 md:px-10 bg-[#00000000] md:bg-[#000000bd]">
        <div className="flex justify-between items-center w-full h-full">
          <Link to="/" className="flex flex-col gap-0">
            <p className="uppercase font-bold text-[20px] md:text-[25px] text-white tracking-[8px] md:tracking-[10px] leading-[12px] md:leading-[20px] mb-0">
              Elder
            </p>
            <p className="lowercase text-[11px] md:text-[13px] text-white tracking-widest mt-0">
              Intelligence
            </p>
          </Link>
          <div>
            <ul
              // style={{ color: `${linkColor}` }}
              className="hidden md:flex gap-10 text-[16px] font-medium uppercase items-center"
            >
              <Link
                to="/"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => onUpdateActiveLink("home")}
              >
                <li className="navLink">Home</li>
              </Link>
              <Link
                to="/about"
                className={activeLink === "about" ? "active" : ""}
                onClick={() => onUpdateActiveLink("about")}
              >
                <li className="navLink">About</li>
              </Link>
              <Link
                to="/media"
                className={
                  activeLink === "media"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("media")}
              >
                <li className="navLink">Media</li>
              </Link>
              <Link
                to="/markets"
                className={
                  activeLink === "markets"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("markets")}
              >
                <li className="navLink">Alerts</li>
              </Link>
              <Link
                to="/markets"
                className={
                  activeLink === "markets"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("markets")}
              >
                <li className="navLink">Markets</li>
              </Link>
              <Link
                to="/contact"
                className={
                  activeLink === "contact"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                <li className="navLink">Contact</li>
              </Link>
              <Link
                to="/api"
                className={
                  activeLink === "api"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("api")}
              >
                <li className="navLink">API</li>
              </Link>
              <Link to="/register" className="hidden md:flex">
                <div className="btnn1 text-sm font-bold flex justify-center items-center hover:scale-105 ease-in duration-300">
                  <span className="mr-2">Register with us</span>
                  <span>
                    <FaArrowCircleRight />
                  </span>
                </div>
              </Link>
            </ul>
            <div onClick={handleNavToggle} className="md:hidden">
              <AiOutlineMenu className="text-gray-100" size={25} />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? "md:hidden fixed z-[150] left-0 top-0 w-full h-screen bg-black/70 "
              : ""
          }
          style={{ zIndex: "11111" }}
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 ease-in duration-500 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#000000fa] p-10 "
                : "fixed left-[-130%] top-0 ease-in duration-500 p-10"
            }
          >
            <div>
              <div className="flex w-full justify-between items-center">
                <Link to="/" className="flex flex-col gap-0">
                  <p className="uppercase font-bold text-[22px] text-white tracking-[8px] leading-[15px] mb-0">
                    Elder
                  </p>
                  <p className="lowercase text-[12px] text-white tracking-widest mt-0">
                    Intelligence
                  </p>
                </Link>
                <div
                  onClick={handleNavToggle}
                  className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer text-gray-300"
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="border-b border-gray-500 my-5"></div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase ">
                <Link
                  onClick={() => setNav(false)}
                  to="/"
                  className={
                    activeLink === "home" ? "active" : "text-gray-200 "
                  }
                >
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/about"
                  className={
                    activeLink === "about" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/media"
                  className={
                    activeLink === "media" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">Media</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/markets"
                  className={
                    activeLink === "alert" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">Alert</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/markets"
                  className={
                    activeLink === "market" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">Market</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/contact"
                  className={
                    activeLink === "contact" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">Contact</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/api"
                  className={activeLink === "api" ? "active" : "text-gray-200"}
                >
                  <li className="py-4 text-sm">API</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/register"
                  className={
                    activeLink === "register" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">Register</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#a1a1a1] text-center">
                  Connect with us
                </p>
                <div className="flex items-center justify-center gap-5 my-4 w-full sm:w-[80%] text-gray-200">
                  <Link
                    to="https://x.com/"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    to="https://instagram.com/"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to="https://facebook.com/"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
