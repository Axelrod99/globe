import React from "react";

const Honors = () => {
  return (
    <div className="mt-4">
      <div className="border-b py-3">
        <div className=" w-[100%] pt-1 font-semibold bg-[#EEEEEE]">
          <div className="px-1  w-full">
            <p className="py-1 text-[15px] font-semibold">COMMUNITY CHAMPIONS</p>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-[13px] font-semibold px-2">Liverpool FC</p>
          <div className="text-[13px] font-normal flex px-2 gap-1">
            {" "}
            <p> Phil Dunphy</p>
            <div className="w-6 h-6 rounded-[30px] bg-red-300" />
          </div>
        </div>
      </div>
      <div className="border-b py-3">
        <div className=" w-[100%] pt-1 font-semibold bg-[#EEEEEE]">
          <div className="px-1  w-full">
            <p className="py-1 text-[15px] font-semibold">GLOBE CHAMPION</p>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-[13px] font-semibold px-2">Liverpool FC</p>
          <div className="text-[13px] font-normal flex px-2 gap-1">
            {" "}
            <p> Jonathan Moore</p>
            <div className="w-6 h-6 rounded-[30px] bg-red-300" />
          </div>
        </div>
      </div>
      <div className="border-b py-3">
        <div className=" w-[100%] pt-1 font-semibold bg-[#EEEEEE]">
          <div className="px-1  w-full">
            <p className="py-1 text-[15px] font-semibold">GLOBE SHIELD</p>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-[13px] font-semibold px-2">Liverpool FC</p>
          <div className="text-[13px] font-normal flex px-2 gap-1">
            {" "}
            <p> Mike Cardol</p>
            <div className="w-6 h-6 rounded-[30px] bg-red-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honors;
