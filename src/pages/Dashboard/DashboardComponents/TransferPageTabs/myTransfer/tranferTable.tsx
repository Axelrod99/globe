import React, { useState } from "react";
import { Defenders, myTransferNav } from "../../../../../utils/data";
import red_arrow from "../../../../../assets/icons/icons8-right-arrow-24.png";
import green_arrow from "../../../../../assets/icons/icons8-left-24.png";

const TranferTable = () => {
  const [activeTab, setActiveTab] = useState(myTransferNav[0].name);

  return (
    <div className="bg-white w-full">
      <div className="w-full flex ">
        {myTransferNav.map((item) => (
          <div
            onClick={() => setActiveTab(item.name)}
            className={`${
              activeTab === item.name
                ? "border-b-4 border-[#37778b]"
                : "bg-white"
            } w-full cursor-pointer flex justify-center items-center h-[60px]`}
          >
            {item.name}
          </div>
        ))}
      </div>

      {activeTab === myTransferNav[0].name && (
        <table className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
          <thead className=" w-[100%] py-1 font-semibold bg-[#EEEEEE]">
            <td className="px-1 -l-[6px] -white">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Pos
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Player
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Rat
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Club To
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Amount
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Status
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Date
              </div>
            </td>
          </thead>

          {Defenders.map((item) => (
            <tr className="bg-white font-semibold border-y-2 h-[40px] py-4 border-[#57535391]">
              <td className="-l-[6px] ">
                <div className="flex justify-start font-normal">
                  <p className="px-1 text-green-600">
                    <span className="border-b border-dotted border-green-600">
                      D,
                    </span>
                    <span className="border-b border-dotted border-green-600">
                      DM
                    </span>
                    ,
                    <span className="border-b border-dotted border-green-600">
                      M(L)
                    </span>
                  </p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-start">
                  <p className="px-3 flex items-center gap-1">
                    <div className="w-6 h-4 bg-gray-700"></div>
                    <span>{item.name}</span>
                  </p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-start">
                  <p className="px-1">91</p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-start">
                  <p className="px-1">Monaco</p>
                </div>
              </td>
              <td>
                <div className="flex justify-start font-bold">
                  <p className="flex items-center font-normal">
                    <img src={green_arrow} alt="/" /> <span>14.7M</span>
                  </p>
                </div>
              </td>
              <td>
                <div className="flex justify-start">
                  <p className="px-1 bg-red-600 rounded-[2px] text-white text-[12px]">
                    Pen
                  </p>
                </div>
              </td>
              <td>
                <div className="font-normal flex justify-start">
                  <p>19 Jun</p>
                </div>
              </td>
            </tr>
          ))}
        </table>
      )}

      {activeTab === myTransferNav[1].name && (
        <table className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
          <thead className=" w-[100%] py-1 font-semibold bg-[#EEEEEE]">
            <td className="px-1 -l-[6px] -white">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Pos
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Player
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Rat
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Club To
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Amount
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Status
              </div>
            </td>
            <td className="px-1">
              <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                Date
              </div>
            </td>
          </thead>

          {Defenders.map((item) => (
            <tr className="bg-white font-semibold border-y-2 h-[40px] py-4 border-[#57535391]">
              <td className="-l-[6px] ">
                <div className="flex justify-start font-normal">
                  <p className="px-1 text-green-600">
                    <span className="border-b border-dotted border-green-600">
                      D,
                    </span>
                    <span className="border-b border-dotted border-green-600">
                      DR
                    </span>
                    ,
                    <span className="border-b border-dotted border-green-600">
                      M(L)
                    </span>
                  </p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-start">
                  <p className="px-3 flex items-center gap-1">
                    <div className="w-6 h-4 bg-gray-700"></div>
                    <span>{item.name}</span>
                  </p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-start">
                  <p className="px-1">86</p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-start">
                  <p className="px-1">Sevilla</p>
                </div>
              </td>
              <td>
                <div className="flex justify-start font-bold">
                  <p className="flex items-center font-normal">
                    <img src={red_arrow} alt="/" /> <span>14.7M</span>
                  </p>
                </div>
              </td>
              <td>
                <div className="flex justify-start">
                  <p className="px-1 bg-green-600 rounded-[2px] text-white text-[12px]">
                    Com
                  </p>
                </div>
              </td>
              <td>
                <div className="font-normal flex justify-start">
                  <p>2 Apr</p>
                </div>
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default TranferTable;
