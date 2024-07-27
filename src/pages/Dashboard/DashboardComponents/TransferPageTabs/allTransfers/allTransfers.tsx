import React from "react";
import { Defenders } from "../../../../../utils/data";

const AllTransfers = () => {
  return (
    <div className="flex flex-col mt-6 w-full mb-10">
      <div className="w-[800px] lg:w-[85%] flex flex-col gap-3">
        <div className="bg-[#0b944fe3] h-[70px] border-b border-white">
          <table className="w-[100%] h-full text-[12px] sm:text-[14px] text-white bg-[#0b944fe3]">
            <thead className=" w-[100%] -b py-1 font-semibold">
              <td className="px-1 -l-[6px] -white">
                <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                  TOTAL TRANSFERS THIS SEASON
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                  TOTAL AMOUNT SPENT
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                  AVERAGE AMOUNT SPENT
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                  HIGHEST AMOUNT SPENT
                </div>
              </td>
            </thead>

            <tr className="">
              <td className="  ">
                <div className="flex justify-center">
                  <p className="px-1">47</p>
                </div>
              </td>
              <td>
                <div className="flex justify-center font-bold">
                  <p>472.1M</p>
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <p>2.6M</p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-center">
                  <p>37.8M</p>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div>
          <div className="h-[70px] w-full bg-white shadow flex justify-center items-center gap-1">
            <button className="border border-black text-[#666] bg-[#f0f0f0] py-1 w-[180px] rounded-[5px] font-semibold">
              Previous
            </button>
            <button className="border border-black text-[#666] bg-[#f0f0f0] py-1 w-[180px] rounded-[5px] font-semibold">
              Next
            </button>
          </div>

          <table className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
            <thead className=" w-[100%] py-1 h-[40px] font-semibold bg-[#EEEEEE]">
              <td className="px-1 -l-[6px] -white">
                <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                  Position
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                  Name
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                  Value
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                  Club From
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
                <td className="border-orange-400 border-l-[6px] ">
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
                  <div className="flex justify-start font-normal">
                    <p className="px-1">27M</p>
                  </div>
                </td>
                <td className="  ">
                  <div className="flex justify-start">
                    <p className="px-1">Monaco</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-start">
                    <p className="flex items-center">Manchester United</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-start font-thin">
                    <p className="flex items-center">29.1M</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-start">
                    <p className="px-1 bg-green-600 rounded-[2px] underline text-white text-[12px]">
                      Com
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
        </div>
      </div>
    </div>
  );
};

export default AllTransfers;
