import React from "react";
import { items } from "../../../../../../../utils/data";

const GlobeCupResult = () => {
  return (
    <div>
      <div className="h-[70px] w-full bg-white shadow flex justify-center items-center gap-1">
        <button className="border border-black text-[#666] bg-[#f0f0f0] py-1 w-[140px] xs:w-[180px] rounded-[5px] font-semibold">
          Previous
        </button>
        <button className="border border-black text-[#666] bg-[#f0f0f0] py-1 w-[140px] xs:w-[180px] rounded-[5px] font-semibold">
          Next
        </button>
      </div>

      <table className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
        <thead className=" w-[100%] py-1 font-semibold bg-[#EEEEEE]">
          <td className="px-1 border w-full">
            <div className="flex justify-start gap-1 px-5 items-center h-[40px]">
              Round 1:{" "}
              <span className="text-gray-600">JUN 13 WED 2024</span>
            </div>
          </td>
          <td className="px-1 w-full" />
        </thead>

        {items.map((item) => (
          <tr className="bg-white hover:bg-[#EEEEEE] font-semibold border-b border-[#bbbbbb76] h-[40px] py-4">
            <td className="  ">
              <div className="flex justify-around xs:justify-center items-center py-2 gap-3 xs:gap-14 font-normal">
                <div className="px-1">
                  <p className="text-[15px] hover:underline cursor-pointer">Dortmund</p>
                </div>
                <div className="px-1 cursor-pointer flex gap-1 justify-center items-center border border-gray-300 text-[#666] hover:bg-[#817c7cb7] hover:text-white font-semibold w-[75px] rounded-[5px] h-[40px]">
                  <span>2</span>-<span>1</span>
                </div>
                <div className="px-1 ">
                  <p className="text-[15px] hover:underline cursor-pointer">Fulham</p>
                </div>
              </div>
              <div className="flex justify-around xs:justify-center items-center py-2 gap-3 xs:gap-14 font-normal">
                <div className="px-1 flex flex-col">
                  <p className="text-[12px]">
                    julian Alvarez <span>29</span>
                  </p>
        
                </div>
                <div className="px-1 flex gap-1 justify-center items-center  w-[75px] rounded-[5px]">
                  {/* <span>2</span>-<span>1</span> */}
                </div>
                <div className="px-1 flex flex-col">
                  <p className="text-[12px]">
                    mikel Moreno <span>42</span>
                  </p>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default GlobeCupResult;
