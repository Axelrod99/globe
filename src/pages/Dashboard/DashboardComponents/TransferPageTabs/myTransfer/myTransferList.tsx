import React, { useState } from "react";
import TranferTable from "./tranferTable";
import { Defenders, myTransferNav } from "../../../../../utils/data";
import owen from "../../../../../assets/icons/owen.webp";
import greenArrow from "../../../../../assets/icons/icons8-left-24.png";
import redArrow from "../../../../../assets/icons/icons8-right-arrow-24.png";

const MyTransferList = () => {
  const [activeTab, setActiveTab] = useState(myTransferNav[0].name);

  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="w-[800px] lg:w-[85%] hidden xs:flex flex-col gap-3 mb-10">
        <div className="bg-[#0b944fe3] h-[70px] w-full lg:w-full border-b border-white">
          <table className="w-[100%] h-full text-[12px] sm:text-[14px] text-white bg-[#0b944fe3]">
            <thead className=" w-[100%] -b py-1 font-semibold">
              <td className="px-1 -l-[6px] -white">
                <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                  TRANSFERS IN
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                  AMOUNT SPENT
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                  TRANSFERS OUT
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                  AMOUNT RECIEVED
                </div>
              </td>
              <td className="px-1">
                <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                  DEALS ONGOING
                </div>
              </td>
            </thead>

            <tr className="">
              <td className="">
                <div className="flex justify-center">
                  <p className="px-3 ">6</p>
                </div>
              </td>

              <td className="  ">
                <div className="flex justify-center">
                  <p className="px-1">105.8M</p>
                </div>
              </td>
              <td>
                <div className="flex justify-center font-bold">
                  <p>2</p>
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <p>41M</p>
                </div>
              </td>
              <td className="  ">
                <div className="flex justify-center">1</div>
              </td>
            </tr>
          </table>
        </div>

        <div className="">
          <TranferTable />
        </div>
      </div>

      <div className="w-full flex xs:hidden flex-col gap-3 mb-10 bg-white">
        <div className="w-full flex font-semibold">
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
          <div className="text-[14px] p-[2px]">
            <table className="w-[100%] text-black bg-white">
              <thead className=" w-[100%] py-1 font-semibold">
                <td className="px-1 h-[40px]">
                  <div className="flex flex-col justify-center items-start rounded-[5px] h-[30px]">
                    <span>No.</span>
                    <span>8</span>
                  </div>
                </td>
                <td className="px-1 h-[40px]">
                  <div className="flex flex-col justify-center items-start rounded-[5px] h-[30px]">
                    <span>Total</span>
                    <span>142.7M</span>
                  </div>
                </td>
                <td className="px-1 h-[40px]">
                  <div className="flex flex-col justify-center items-start rounded-[5px] h-[30px]">
                    <span>Active</span>
                    <span>13</span>
                  </div>
                </td>
              </thead>
              {Defenders.map((item) => (
                <tr className="bg-white font-semibold py-4 border-t-8 border-white">
                  <td className="w-[145px]">
                    <div className="font-normal flex justify-start gap-1 flex-col">
                      <p className="flex items-center gap-3">
                        {" "}
                        <div className="h-4 w-6 bg-blue-900"></div>{" "}
                        <span className="font-semibold">M. ZINCHENKO</span>
                      </p>
                      <p className="flex items-center gap-3">
                        {" "}
                        <img
                          src={owen}
                          className="h-10 w-10 rounded-[30px]"
                          alt=""
                        />{" "}
                        <span className="font-semibold">90</span>
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="font-normal flex justify-start gap-1 flex-col">
                      <p>D,DM,DL</p>
                      <p className="flex items-center gap-1">
                        <span>
                          <img src={greenArrow} className="h-4 w-4" alt="" />
                        </span>{" "}
                        24M
                      </p>
                    </div>
                  </td>
                  <td className="w-[170px]">
                    <div className="font-normal flex flex-col gap-1 justify-start ">
                      <div className="flex gap-2">
                        <div className="h-5 text-xs bg-red-600 flex justify-center items-center font-semibold w-6 text-white">
                          Pen
                        </div>{" "}
                        <p>14 Jun</p>
                      </div>
                      <p className="font-semibold">Manchester United</p>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}

        {activeTab === myTransferNav[1].name && (
          <div className="text-[14px] p-[2px]">
            <table className="w-[100%] text-black bg-white">
              <thead className=" w-[100%] py-1 font-semibold">
                <td className="px-1 h-[40px]">
                  <div className="flex flex-col justify-center items-start rounded-[5px] h-[30px]">
                    <span>No.</span>
                    <span>8</span>
                  </div>
                </td>
                <td className="px-1 h-[40px]">
                  <div className="flex flex-col justify-center items-start rounded-[5px] h-[30px]">
                    <span>Total</span>
                    <span>142.7M</span>
                  </div>
                </td>
                <td className="px-1 h-[40px]">
                  <div className="flex flex-col justify-center items-start rounded-[5px] h-[30px]">
                    <span>Active</span>
                    <span>13</span>
                  </div>
                </td>
              </thead>
              {Defenders.map((item) => (
                <tr className="bg-white font-semibold py-4 border-t-8 border-white ">
                  <td className="w-[145px]">
                    <div className="font-normal flex justify-start gap-1 flex-col">
                      <p className="flex items-center gap-3">
                        {" "}
                        <div className="h-4 w-6 bg-blue-900"></div>{" "}
                        <span className="font-semibold">M. ZINCHENKO</span>
                      </p>
                      <p className="flex items-center gap-3">
                        {" "}
                        <img
                          src={owen}
                          className="h-10 w-10 rounded-[30px]"
                          alt=""
                        />{" "}
                        <span className="font-semibold">90</span>
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="font-normal flex justify-start gap-1 flex-col">
                      <p>D,DM,DL</p>
                      <p className="flex items-center gap-1">
                        <span>
                          <img src={redArrow} className="h-4 w-4" alt="" />
                        </span>{" "}
                        24M
                      </p>
                    </div>
                  </td>
                  <td className="w-[170px]">
                    <div className="font-normal flex flex-col gap-1 justify-start ">
                      <div className="flex gap-2">
                        <div className="h-5 text-xs bg-green-600 flex justify-center items-center font-semibold w-6 text-white">
                          Com
                        </div>{" "}
                        <p>14 Jun</p>
                      </div>
                      <p className="font-semibold">Manchester United</p>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTransferList;
