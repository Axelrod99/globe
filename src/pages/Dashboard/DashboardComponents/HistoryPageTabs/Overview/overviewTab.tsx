import React from "react";

const OverviewTab = () => {
  return (
    <div className="">
      {" "}
      <div className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
        <div className=" w-[100%] py-1 font-semibold bg-[#EEEEEE]">
          <div className="px-1 border w-full">
            <div className="flex justify-center text-[18px] gap-1 px-5 items-center h-[40px]">
              INFORMATION{" "}
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-scroll">
          <div className="">
            <div className="bg-white font-semibold border-b border-[#bbbbbb76] py-4">
              <div className="  ">
                <div className="flex flex-col mt-6 w-full">
                  <div className="w-[800px] lg:w-[85%] flex flex-col mb-10 bg-white h-[220px]">
                    <p className="flex justify-center">OverviewTab is Coming Soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
