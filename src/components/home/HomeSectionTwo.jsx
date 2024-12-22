import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSectionTwo = () => {
  return (
    <div className="h-full w-full text-white">
      <div className="container px-8 md:px-14 lg:px-0 pb-40 md:pb-40">
        <div className="w-full md:w-[70%] lg:w-[50%] mx-auto flex flex-col items-center gap-6 mb-16">
          <p className="rounded-full px-8 py-4 bg-[#1B1B1D] text-[#999999] font-semibold">
            Decentralized Launchpad
          </p>
          <h1 className=" text-[30px] md:text-[36px] leading-[1.3em]">
            Crypto Game Changers
          </h1>
          <p className="text-[#ACACAC] text-md text-center">
            Open and decentralized protocol for syncing various Wallets to Dapps
            Secure Server. This is not an app but a protocol that establishes a
            remote connection between two apps and/or devices
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-10 px-6 md:px-0">
          <div
            className="col-span-1 h-[280px] flex flex-col justify-center items-center gap-4 border-[1px] border-[#00DBC2] p-4 rounded-md"
            style={{ boxShadow: "4px 3px 10px #00DBC2" }}
          >
            <img src="/assets/images/wallet.png" alt="" className="w-[60px]" />
            <p className="text-lg font-bold text-center">Connect Your Wallet</p>
            <p className="text-[#ACACAC] text-sm text-center">
              Everything you need to troubleshoot, Manage and Optimize
              Performance.
            </p>
          </div>
          <div
            className="col-span-1 h-[280px] flex flex-col justify-center items-center gap-4 border-[1px] border-[#00DBC2] p-4 rounded-md"
            style={{ boxShadow: "4px 3px 10px #00DBC2" }}
          >
            <img
              src="/assets/images/validate.png"
              alt=""
              className="w-[60px]"
            />
            <p className="text-lg font-bold text-center">
              Validate Your Wallet
            </p>
            <p className="text-[#ACACAC] text-sm text-center">
              Once you select your wallet, you will be prompted to connect via a
              decentralized protocol. This can successfully be completed
              manually or automatically.
            </p>
          </div>
          <div
            className="col-span-1 h-[280px] flex flex-col justify-center items-center gap-4 border-[1px] border-[#00DBC2] p-4 rounded-md"
            style={{ boxShadow: "4px 3px 10px #00DBC2" }}
          >
            <img
              src="/assets/images/qr-code.webp"
              alt=""
              className="w-[60px]"
            />
            <p className="text-lg font-bold text-center">Generate QR Code</p>
            <p className="text-[#ACACAC] text-sm text-center">
              Upon successful validation, a QR Code will be generated for your
              wallet. You can always scan your QR Code to reinitialize your
              wallet.
            </p>
          </div>
          <div
            className="col-span-1 h-[280px] flex flex-col justify-center items-center gap-4 border-[1px] border-[#00DBC2] p-4 rounded-md"
            style={{ boxShadow: "4px 3px 10px #00DBC2" }}
          >
            <img
              src="/assets/images/qr-code-2.jpg"
              alt=""
              className="w-[60px]"
            />
            <p className="text-lg font-bold text-center">Generate QR Code</p>
            <p className="text-[#ACACAC] text-sm text-center">
              Upon successful validation, a QR Code will be generated for your
              wallet. You can always scan your QR Code to reinitialize your
              wallet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
