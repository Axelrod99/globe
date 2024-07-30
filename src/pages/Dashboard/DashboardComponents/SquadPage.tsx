import React from "react";
import arrow from "../../../assets/icons/icons8-thick-arrow-pointing-up-48-removebg-preview.png";
import owen from "../../../assets/icons/owen.webp";
import { Premier_League } from "../../../utils/data";

const SquadPage = () => {
  return (
    <div className="flex justify-center pb-[30px]">
      <div className="flex flex-col gap-[10px] items-center mt-4 w-[95%] md:w-[90%]">
        <div className="flex w-full gap-2 justify-start">
          <button className="w-[100px] sm:w-[130px] border shadow py-1 rounded-[8px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
            Filter
          </button>
          <button className="w-[100px] sm:w-[130px] border shadow py-1 rounded-[8px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
            Views
          </button>
          <button className="w-[100px] sm:w-[130px] border shadow py-1 rounded-[8px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
            First Team
          </button>
        </div>

        <div className="flex justify-start w-full">
          <div className="w-full xl:w-[90%] h-[60px] bg-[#ffffffd6] rounded-[5px]">
            <table className="w-[100%] text-[12px] sm:text-[14px]">
              <thead className=" w-[100%] border-b py-1 font-semibold">
                <td className="px-1">
                  <div className="flex justify-center items-center rounded-[5px] h-[30px]">
                    Players
                  </div>
                </td>
                <td className="px-1">
                  <div className="gap-1 flex justify-center items-center rounded-[5px] h-[30px]">
                    <span className="hidden xs:flex"> Average</span> Rating
                  </div>
                </td>
                <td className="px-1">
                  <div className="flex xs:hidden justify-center items-center rounded-[5px] h-[30px]">
                    Age
                  </div>
                  <div className="hidden xs:flex justify-center items-center rounded-[5px] h-[30px]">
                    Average Age
                  </div>
                </td>
                <td className="px-1 hidden xs:flex">
                  <div className="flex gap-1 justify-center items-center rounded-[5px] h-[30px]">
                    Average Wage
                  </div>
                </td>
                <td className="px-1">
                  <div className="flex gap-1 justify-center items-center rounded-[5px] h-[30px]">
                    <span className="hidden xs:flex">Total</span> Value
                  </div>
                </td>
                <td className="px-1">
                  <div className="flex gap-1 justify-center items-center rounded-[5px] h-[30px]">
                    <span className="hidden xs:flex">Total</span> Wages
                  </div>
                </td>
              </thead>

              <tr className="border-b">
                <td>
                  <div className="flex justify-center">
                    <p className="px-1">58</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <p className="px-1">89</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <p className="px-1">29</p>
                  </div>
                </td>
                <td className="hidden xs:flex">
                  <div className="flex justify-center">
                    <p className="px-1">401.7M</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <p>91k</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <p>2.6M</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="flex justify-start w-full">
          <div className="w-full xl:w-[90%] overflow-x-scroll bg-white rounded-[5px] mt-2">
            <div className="w-full xs:w-[1000px] lg:w-[1145px] xl:w-[1215px]">
              <table className="w-[100%] text-[12px] sm:text-[14px]">
                <thead className=" w-[100%] border-b py-1 font-semibold">
                  <td className="px-1">
                    <div className="hidden xs:flex justify-start items-center rounded-[5px] h-[30px]">
                      Positions
                    </div>
                    <div className="xs:hidden flex justify-start items-center rounded-[5px] h-[30px]">
                      Pos
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      -
                    </div>
                  </td>
                  <td className="px-1 hidden xs:flex">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      -
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      Name
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      Age
                    </div>
                  </td>
                  <td className="px-1 hidden xs:flex">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      Morale
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      Rat
                    </div>
                  </td>
                  <td className="px-1 hidden xs:flex">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      Conditions
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      Value
                    </div>
                  </td>
                  <td className="px-1 hidden xs:flex">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      TB
                    </div>
                  </td>
                  <td className="px-1 hidden xs:flex">
                    <div className="flex justify-center pr-3 items-center rounded-[5px] h-[30px]"></div>
                  </td>
                </thead>

                {Premier_League.map((item, i) => (
                  <tr className="bg-white font-semibold border-y-2 h-[40px] py-4 border-[#57535391]">
                    <td className="border-l-[6px]">
                      <div className="flex justify-start text-orange-400">
                        <p className="underline px-1 text-orange-400">GK</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-start">
                        <p className="bg-[#5BC0DE] text-[9px] h-[20px] rounded-sm flex justify-center items-center text-white font-semibold px-2">
                          LnL
                        </p>
                      </div>
                    </td>
                    <td className="hidden xs:flex h-[40px]">
                      <div className="flex justify-start items-center">
                        <p className="bg-[#000] text-[9px] w-[33px] h-[20px] rounded-sm flex justify-center items-center text-white font-semibold px-2">
                          N
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-start">
                        <p className="flex items-center gap-1">
                          {" "}
                          <div className="flex justify-center items-center w-[25px] h-[25px] rounded-[30px] bg-gray-300">
                            <img
                              className="h-6 w-6 rounded-[30px]"
                              src={owen}
                              alt=""
                            />
                          </div>{" "}
                          O.NICKI
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-start">
                        <p>31</p>
                      </div>
                    </td>
                    <td className="hidden xs:flex">
                      <div className="flex justify-start">
                        <p className="text-[#5bc210]">100%</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-start">
                        <p className="font-semibold">90</p>
                      </div>
                    </td>

                    <td className="hidden xs:flex mt-2">
                      <div className="flex justify-start items-center">
                        <p className="text-[#78cd3b] flex">
                          {" "}
                          <div>
                            <img className="h-4 w-5" src={arrow} alt="" />
                          </div>{" "}
                          100%
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-start">
                        <p>28.7M</p>
                      </div>
                    </td>
                    <td className="hidden xs:flex">
                      <div className="flex justify-start">
                        <p>28 Aug</p>
                      </div>
                    </td>
                    <td className="hidden xs:flex">
                      <div className="flex justify-start">
                        <input type="checkbox" />
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquadPage;
