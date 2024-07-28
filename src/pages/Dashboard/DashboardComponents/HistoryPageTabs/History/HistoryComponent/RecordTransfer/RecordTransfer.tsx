import React from "react";
import { Defenders } from "../../../../../../../utils/data";

const RecordTransfer = () => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className=" w-[100%] pt-1 font-semibold bg-[#EEEEEE]">
        <div className="px-1  w-full">
          <p className="py-1 text-[15px] font-semibold">
            Top Managers of All Time
          </p>
        </div>
      </div>

      <div>
        <table className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
          <thead className=" w-[100%] py-1 h-[40px] font-semibold bg-[#EEEEEE]">
            <td className="">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Player
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                From
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                To
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Cost
              </div>
            </td>
          </thead>

          {Defenders.map((item) => (
            <tr className="bg-white font-semibold border-y-2 h-[40px] py-4 border-[#57535391]">
              <td className="border-orange-400 border-l-[6px">
                <div className="flex justify-start font-normal">
                  <p className="px-3 flex items-center gap-1">
                    <div className="w-6 h-4 bg-gray-700"></div>
                    <span>{item.name}</span>
                  </p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-start">
                <p className="px-1">Arsenal</p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-start">
                  <p className="px-1">Burnley</p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-start">
                  <p className="px-1">43.1M</p>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default RecordTransfer;
