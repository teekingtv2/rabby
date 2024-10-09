import React from "react";

const HomeSectionFive = () => {
  return (
    <div className="w-[100vw] bg-[#000000cc] flex flex-col items-center">
      <div className="max-w-[1000px] pt-[100px] pb-[180px] md:pt-[150px] md:pb-[150px] items-center px-6 md:px-0">
        <div className="w-full md:w-[70%] mx-auto text-center mb-7">
          <h1 className="text-white text-[30px] md:text-[40px] uppercase mb-5 ">
            How do we help you recover your lost funds and other issues?
          </h1>
          <p>
            We get all your issues solved by bringing machine effort and human
            intuition together
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-black flex flex-col gap-5 right-box">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-[30px]">
            <div
              className="col-span-1 p-5 rounded-lg flex flex-col gap-5 hover:scale-105 ease-in duration-300"
              style={{ border: "1px dashed #888" }}
            >
              <div className="flex items-center gap-10">
                <p
                  className="w-[40px] h-[40px] flex justify-center items-center"
                  style={{ borderRadius: "50%", border: "1px solid #fff" }}
                >
                  1
                </p>
                <p className="text-[20px] font-semibold">Machine Effort</p>
              </div>
              <p>
                We crunch massive amounts of information from a plurality of
                reliable sources, pulling it all into our growing stream of
                signals and datafeeds:
              </p>
              <ul>
                <li className="li">On-chain data</li>
                <li className="li">Holder behavior activity</li>
                <li className="li">Social media activity</li>
                <li className="li">Others</li>
              </ul>
            </div>
            <div
              className="col-span-1 p-5 rounded-lg flex flex-col gap-5 hover:scale-105 ease-in duration-300"
              style={{ border: "1px dashed #888" }}
            >
              <div className="flex items-center gap-10">
                <p
                  className="w-[40px] h-[40px] flex justify-center items-center"
                  style={{ borderRadius: "50%", border: "1px solid #fff" }}
                >
                  2
                </p>
                <p className="text-[20px] font-semibold">Human Intuition</p>
              </div>
              <p>
                Our team therefore test the data integrity and viability, and
                perform some operations that in turn lead us to resolve the
                issues you have around your crypto assets:
              </p>
              <ul>
                <li className="li">On-chain operations</li>
                <li className="li">Issue resolve activities</li>
                <li className="li">Unlifting assets restrictions</li>
                <li className="li">Others</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFive;
