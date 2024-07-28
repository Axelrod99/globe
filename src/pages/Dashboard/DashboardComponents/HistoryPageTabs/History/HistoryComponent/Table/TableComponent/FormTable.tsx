import React from "react";
import { Premier_League } from "../../../../../../../../utils/data";


const FormTable = () => {
  return (
    <div className="">
      <table className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
        <thead className=" w-[100%] py-1 font-semibold bg-[#EEEEEE]">
          <td className="px-1 -l-[6px] -white">
            <div className="flex underline-offset-1 justify-start items-center rounded-[5px] h-[30px]">
              TEAM
            </div>
          </td>
          <td className="px-1">
            <div className="flex justify-start items-center rounded-[5px] h-[30px]">
              LEAGUE FORM
            </div>
          </td>
          <td className="px-1">
            <div className="flex justify-start items-center rounded-[5px] h-[30px]">
              Points From Last 6 Games
            </div>
          </td>
        </thead>

        {Premier_League.map((item, i) => (
          <tr className="hover:bg-[#EEEEEE] bg-white font-semibold h-[40px] py-4 border-y-2 border-[#57535391]">
            <td className="  ">
              <div className="flex justify-start">
                <p className="px-1">{item.name}</p>
              </div>
            </td>
            <td className="  ">
              <div className="flex justify-start">
                <p className="px-3 flex gap-1 items-center">
                  <div className="w-4 h-4 bg-gray-700"></div>
                  <div className="w-4 h-4 bg-gray-700"></div>
                  <div className="w-4 h-4 bg-gray-700"></div>
                  <div className="w-4 h-4 bg-gray-700"></div>
                  <div className="w-4 h-4 bg-gray-700"></div>
                </p>
              </div>
            </td>
            <td>
              <div className="flex justify-start font-bold">
                <p className="flex items-center font-normal">12</p>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FormTable;
