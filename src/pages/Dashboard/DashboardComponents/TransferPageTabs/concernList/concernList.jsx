import React from "react";
import { Defenders } from "../../../../../utils/data";
import owen from "../../../../../assets/icons/owen.webp";

const ConcernList = () => {
  return (
    <div className="flex flex-col mt-6 w-full mb-10">
      <div className="w-[800px] lg:w-[85%] hidden xs:flex flex-col gap-3">
        <div>
          <table className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
            <thead className=" w-[100%] py-1 h-[40px] font-semibold bg-[#EEEEEE]">
              <td className="px-1 -l-[6px] -white">
                <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                  Position
                </div>
              </td>
              <td className="px-1 -l-[6px] -white">
                <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                  Nat
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
                  Club
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                  Rat
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                  Concern
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
                    </p>
                  </div>
                </td>
                <td className="  ">
                  <div className="flex justify-start">
                    <p className="px-1">{item.name}</p>
                  </div>
                </td>
                <td className="  ">
                  <div className="flex justify-start font-normal">
                    <p className="px-1">18.3M</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-start font-semibold">
                    <p className="flex items-center font-normal">Barcelona</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-start">
                    <p className="px-1 rounded-[2px] text-[12px] font-semibold">
                      93
                    </p>
                  </div>
                </td>
                <td>
                  <div className="font-normal flex justify-start">
                    <p>Level 4: Very Concern</p>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>


      <div className="flex xs:hidden flex-col">
        {Defenders.map((item) => (
          <div className="w-full bg-white shadow pb-1">
            <div className="border-2 mx-1 p-1">
              <p className="flex items-center gap-3 justify-between px-2">
                {" "}
                <div className="flex gap-1">
                  <div className="h-4 w-6 bg-blue-900"></div>{" "}
                  <span className="font-semibold text-[14px]">
                    B. {item.name}
                  </span>
                </div>
                <p className="underline">D,DM,DL</p>
                <p>Age 22</p>
              </p>

              <div className="flex w-full px-1">
                <div className="flex w-full gap-8 items-center">
                  <img src={owen} className="h-9 w-9 rounded-[30px]" alt="/" />
                  <p>85</p>
                </div>

                <div className="w-full flex items-center justify-end">
                  <p className="font-semibold">Toronto</p>
                </div>
              </div>

              <div className="font-thin px-1">
                <p>level 3: very concerned</p>
              </div>

              <div className="flex justify-center"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcernList;
