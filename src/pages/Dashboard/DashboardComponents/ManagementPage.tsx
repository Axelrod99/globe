import React from "react";
import calender from "../../../assets/icons/icons8-calender-64 (1).png";
import pitch from "../../../assets/img/tactics-pitch-bg6.svg";
import owen from "../../../assets/icons/owen.webp";
import star from "../../../assets/icons/icons8-star-100-removebg-preview.png";
import {
  Attackers,
  Defenders,
  Forwarder,
  Midfielders,
} from "../../../utils/data";

const ManagementPage = () => {
  return (
    <div className="flex justify-center pb-3">
      <div className="flex flex-col gap-[10px] items-center text-white w-[90%]">
        <div className="w-full flex  h-[100px] bg-[#b93e3ed5] px-5 justify-between">
          <div className="hidden sm:flex items-center w-fit h-full">
            <img src={calender} alt="" />
          </div>

          <div className="flex flex-col justify-center text-[12px] text-center">
            <p>Next Fixture</p>
            <p>
              Chelsea <span className="underline">(A)</span>
            </p>
            <p className="font-semibold">Division 1</p>
            <p>Thu 25 Jul, 20:00</p>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="text-[10px] w-[160px] leading-3">
              <p>
                Your team selection and tactics must be selected by 20:00 GT.
                Games are automatically played and you will be notified when
                your result is ready to be viewed on the Club page.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="grid grid-cols-2 gap-1 sm:gap-2">
              <button className="text-xs sm:text-sm md:text-[16px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[230px] border shadow  py-1 rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                Injuries
              </button>
              <button className="text-xs sm:text-sm md:text-[16px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[230px] border shadow  py-1 rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                Suspension
              </button>
              <button className="text-xs sm:text-sm md:text-[16px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[230px] border shadow  py-1 rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                Concerns
              </button>
              <button className="text-xs sm:text-sm md:text-[16px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[230px] border shadow  py-1 rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                Player Changes
              </button>
            </div>
          </div>
        </div>

        <div className="h-[30px] w-full px-3 flex items-center 100 text-[12px] text-[#31708f] bg-[#d9edf7] shadow">
          Your team selection and tactics must be selected by 8PM (Game Time)
        </div>

        <div className="flex w-full gap-2 overflow-x-scroll">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex w-full gap-2 justify-start">
              <button className="w-[130px] border shadow px-6 py-[2px] rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                Filter
              </button>
              <button className="w-[130px] border shadow px-6 py-[2px] rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                Views
              </button>
              <button className="w-[130px] border shadow px-6 py-[2px] rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                First Team
              </button>
            </div>

            <div className="w-full  bg-[#ffffffd6] rounded-[5px]">
              <table className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
                <thead className=" w-[100%] border-b py-1 font-semibold">
                  <td className="px-1 border-l-[6px] border-white">
                    <div className="underline flex justify-start items-center rounded-[5px] h-[30px]">
                      No.
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="underline flex justify-start items-center rounded-[5px] h-[30px]">
                      Sel
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="underline flex justify-start items-center rounded-[5px] h-[30px]">
                      Name
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="flex justify-start items-center rounded-[5px] h-[30px]">
                      Pos
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="underline flex justify-start items-center rounded-[5px] h-[30px]">
                      Rat
                    </div>
                  </td>
                  <td className="px-1">
                    <div className="underline flex justify-start items-center rounded-[5px] h-[30px]">
                      Con
                    </div>
                  </td>
                </thead>

                <tr className="bg-white">
                  <td className="border-l-[6px] ">
                    <div className="flex justify-start">
                      <p className="px-3 border border-gray-400 border-dotted">
                        1
                      </p>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-start">
                      <p className="px-[6px] cursor-pointer bg-[#777474] text-white font-semibold border rounded-[40px] ">
                        +
                      </p>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-start">
                      <p className="px-1">T.GERALDS</p>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-start">
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
                  <td>
                    <div className="flex justify-start font-bold">
                      <p>89</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-start text-green-500">
                      <p>100%</p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex w-full gap-2 justify-start">
              <button className="w-[130px] border shadow px-6 py-[2px] rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                Auto Pick
              </button>
              <button className="w-[130px] border shadow px-6 py-[2px] rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                Substitution
              </button>
              <button className="w-[130px] border shadow px-6 py-[2px] rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                4-2-3-1
              </button>
              <button className="w-[130px] border shadow px-6 py-[2px] rounded-[5px] bg-white  border-[#3379b79b] font-semibold text-[#337ab7] ">
                Instructions
              </button>
            </div>

            <div className="flex w-full">
              <div className="w-full text-sm">
                <div className="grid grid-cols-3 text-center items-center h-[32px] bg-[#343739d5] font-semibold text-white">
                  <div className="h-[32px] flex justify-center items-center">
                    Average Rating
                  </div>
                  <div className="h-[32px] flex justify-center items-center">
                    Average Age
                  </div>
                  <div className="h-[32px] flex justify-center items-center">
                    Average Value
                  </div>
                </div>
                <div className="grid grid-cols-3 text-center items-center text-[#333333] bg-white border-t">
                  <div className="flex justify-center items-center h-[32px] font-bold">
                    92
                  </div>
                  <div className="flex justify-center items-center h-[32px] font-bold border-x">
                    30
                  </div>
                  <div className="flex justify-center items-center h-[32px] font-bold">
                    15.8M
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex w-full min-h-[510px] text-[10px]"
              style={{ backgroundImage: `url(${pitch})` }}
            >
              <div className="flex flex-col items-center w-full justify-between">
                {/* Goal Keeper */}
                <div className="flex relative flex-col items-center h-fit w-[105px]">
                  <div className="flex justify-center items-end shadow w-[40px] h-[40px] rounded-[30px] bg-white">
                    <img
                      src={owen}
                      className="w-[30px] h-[35px] rounded-[40px]"
                      alt=""
                    />
                  </div>
                  <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#333333] text-white">
                    <p>CARLOS</p>
                  </div>
                  <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#3ee139] text-white">
                    <p>100%</p>
                  </div>

                  <div className="absolute top-1 right-0">
                    <div className="relative flex justify-center items-center font-semibold text-black">
                      <img className="h-[30px] w-[30px]" src={star} alt="" />
                      <div className="absolute">95</div>
                    </div>
                  </div>
                </div>

                {/* Defenders */}
                <div className="flex justify-around w-full">
                  {Defenders.map((item) => (
                    <div className="flex relative flex-col items-center h-fit w-[105px]">
                      <div className="flex justify-center items-end shadow w-[40px] h-[40px] rounded-[30px] bg-white">
                        <img
                          src={owen}
                          className="w-[30px] h-[35px] rounded-[40px]"
                          alt=""
                        />
                      </div>
                      <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#333333] text-white">
                        <p>{item.name}</p>
                      </div>
                      <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#3ee139] text-white">
                        <p>100%</p>
                      </div>

                      <div className="absolute top-1 right-0">
                        <div className="relative flex justify-center items-center font-semibold text-black">
                          <img
                            className="h-[30px] w-[30px]"
                            src={star}
                            alt=""
                          />
                          <div className="absolute">95</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Midfielders */}
                <div className="flex">
                  {Midfielders.map((item) => (
                    <div className="flex relative flex-col items-center h-fit w-[105px]">
                      <div className="flex justify-center items-end shadow w-[40px] h-[40px] rounded-[30px] bg-white">
                        <img
                          src={owen}
                          className="w-[30px] h-[35px] rounded-[40px]"
                          alt=""
                        />
                      </div>
                      <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#333333] text-white">
                        <p>{item.name}</p>
                      </div>
                      <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#3ee139] text-white">
                        <p>100%</p>
                      </div>

                      <div className="absolute top-1 right-0">
                        <div className="relative flex justify-center items-center font-semibold text-black">
                          <img
                            className="h-[30px] w-[30px]"
                            src={star}
                            alt=""
                          />
                          <div className="absolute">95</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Attackers */}
                <div className="flex justify-around w-full">
                  {Attackers.map((item) => (
                    <div className="flex relative flex-col items-center h-fit w-[105px]">
                      <div className="flex justify-center items-end shadow w-[40px] h-[40px] rounded-[30px] bg-white">
                        <img
                          src={owen}
                          className="w-[30px] h-[35px] rounded-[40px]"
                          alt=""
                        />
                      </div>
                      <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#333333] text-white">
                        <p>{item.name}</p>
                      </div>
                      <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#3ee139] text-white">
                        <p>100%</p>
                      </div>

                      <div className="absolute top-1 right-0">
                        <div className="relative flex justify-center items-center font-semibold text-black">
                          <img
                            className="h-[30px] w-[30px]"
                            src={star}
                            alt=""
                          />
                          <div className="absolute">95</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Forwarders */}
                <div className="flex justify-between">
                  {Forwarder.map((item) => (
                    <div className="flex relative flex-col items-center h-fit w-[105px]">
                      <div className="flex justify-center items-end shadow w-[40px] h-[40px] rounded-[30px] bg-white">
                        <img
                          src={owen}
                          className="w-[30px] h-[35px] rounded-[40px]"
                          alt=""
                        />
                      </div>
                      <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#333333] text-white">
                        <p>{item.name}</p>
                      </div>
                      <div className="w-[90px] h-[16px] flex justify-center font-semibold border border-[#ffffff60] rounded-[4px] bg-[#3ee139] text-white">
                        <p>100%</p>
                      </div>

                      <div className="absolute top-1 right-0">
                        <div className="relative flex justify-center items-center font-semibold text-black">
                          <img
                            className="h-[30px] w-[30px]"
                            src={star}
                            alt=""
                          />
                          <div className="absolute">95</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
