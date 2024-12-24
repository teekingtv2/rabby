import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const path = window.location.pathname.split("/");
  const pathname = path[path.length - 1];
  const [activeLink, setActiveLink] = useState(pathname);
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="w-full z-[100]">
        <div className="container flex justify-between items-center w-full h-full py-3 md:py-4 px-5 lg:px-0">
          <Link to="/" className="flex gap-2 items-center">
            <img src="/assets/images/logo.svg" alt="" />
          </Link>
          <div>
            <ul
              // style={{ color: `${linkColor}` }}
              className="hidden md:flex gap-7 text-[16px] font-medium items-center"
            >
              <Link
                to="/"
                className={
                  activeLink === "contact" ? "active menu-link" : "menu-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                <li className="navLink">Contact Us</li>
              </Link>
              <Link
                to="/"
                className={
                  activeLink === "support" ? "active menu-link" : "menu-link"
                }
                onClick={() => onUpdateActiveLink("support")}
              >
                <li className="navLink">Support</li>
              </Link>
              <Link
                to="/rabbykit"
                className={
                  activeLink === "rabbykit" ? "active menu-link" : "menu-link"
                }
                onClick={() => onUpdateActiveLink("rabbykit")}
              >
                <li className="navLink">RabbyKit</li>
              </Link>
              <Link
                to="/integration-doc"
                className={
                  activeLink === "integration-doc"
                    ? "active menu-link"
                    : "menu-link"
                }
                onClick={() => onUpdateActiveLink("integration-doc")}
              >
                <li className="navLink">Integration Doc</li>
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
              ? "md:hidden fixed z-[150] right-0 top-0 w-full h-screen bg-black/25 "
              : ""
          }
          style={{ zIndex: "11111" }}
        >
          <div
            className={
              nav
                ? "fixed right-0 top-0 ease-in duration-500 h-max w-[35%] sm:w-[60%] md:w-[45%] bg-[#272727fa] p-5"
                : "fixed right-[-130%] top-0 ease-in duration-500 p-10"
            }
          >
            <div className="flex justify-end">
              <div
                onClick={handleNavToggle}
                className="rounded-full shadow-md p-2 cursor-pointer text-gray-300"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="py-2 flex flex-col items-center">
              <ul className="">
                <Link
                  onClick={() => setNav(false)}
                  to=""
                  className={
                    activeLink === "home" ? "active" : "text-gray-200 "
                  }
                >
                  <li className="py-4 text-sm">Contact Us</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to=""
                  className={
                    activeLink === "about" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">Support</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to=""
                  className={
                    activeLink === "media" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">RabbyKit</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to=""
                  className={
                    activeLink === "alert" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">Integration Doc</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
