import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetStartedPage = () => {
  const navigate = useNavigate();

  const handleWalletImport = async (wallet) => {
    navigate("/connect", { state: { walletType: wallet } });
  };

  return (
    <div className="w-screen h-[85vh] flex justify-center items-center px-8 bg-[#808EFF]">
      <div className="w-full max-w-[450px] flex flex-col gap-4 lg:px-0 text-white">
        <div className="flex justify-center">
          <img src="/assets/images/logo-2.png" alt="" className="w-32" />
        </div>
        <div className="flex flex-col items-center gap-3 mb-10">
          <p className="text-[24px] font-black">Rabby Wallet</p>
          <p className="font-medium text-md text-center">
            The game-changing walet for <br /> Ethereum and all EVM chains
          </p>
        </div>
        <div
          onClick={() => handleWalletImport("hardware")}
          className="btnn2 px-4 py-3 w-full font-semibold text-center"
        >
          Connect Hardware Wallet
        </div>

        <div
          onClick={() => handleWalletImport("software")}
          className="btnn2 px-4 py-3 w-full font-semibold text-center"
        >
          Connect Mobile Wallet
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
