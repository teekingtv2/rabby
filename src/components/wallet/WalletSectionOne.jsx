import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { errorNotification } from "../../utils/helpers";

const WalletSectionOne = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let wallet_balance = localStorage.getItem("wallet_balance");
    if (!wallet_balance) {
      errorNotification("Please connect your wallet first");
      navigate("/connect");
    }
    const items = JSON.parse(wallet_balance);
    console.log("items.length", items?.length);
    if (items?.length == 0) {
      errorNotification("Please connect your wallet first");
      navigate("/connect");
    }
    console.log({ items });
    setData(items);
  }, []);

  return (
    <div className="h-full w-[100vw] banner-section text-white">
      <div className="container px-8 md:px-14 lg:px-0 pt-6 pb-40 lg:pt-28 lg:pb-48 ">
        <div className="mb-8">
          <div className="flex justify-center">
            <Link to="/">
              <img src="/assets/images/logo-2.png" alt="" className="w-40" />
            </Link>
          </div>
          <h1 className="text-2xl lg:text-3xl mb-3">Your Wallet Balances</h1>
          <p className="text-sm font-medium">
            Note that only the top popular BEP20 tokens and ETH are displayed
            here
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 lg:gap-10">
          {data.length &&
            data.map((item, i) => (
              <div
                key={i}
                className="col-span-1 p-4 flex justify-between items-center bg-[#6875d4]"
                style={{ boxShadow: "4px 4px 7px #032e2a" }}
              >
                <p className="text-lg">{item.Symbol}</p>
                <div className="flex flex-col items-end">
                  <p className="text-sm">{item.currency_name}</p>
                  <span className="text-sm">
                    {Number(item.balance)?.toFixed(6)}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WalletSectionOne;
