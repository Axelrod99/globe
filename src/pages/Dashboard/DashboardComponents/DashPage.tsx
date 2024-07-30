import React from "react";
import { items } from "../../../utils/data";
import comment from "../../../assets/icons/icons8-comment-50.png";

const DashPage = () => {
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="flex xs:grid gap-4 sm:gap-2 sm:grid-cols-3 w-[95%] md:w-[75%] xl:w-[65%] gap-x-3">
          <div className="w-full shadow border bg-[#e9e9e9cd] hover:bg-[#ffffff] sm:p-1">
            <div className="flex justify-center text-[16px] sm:text-[18px] font-bold">
              <p className="p-2">LAST FIXTURE</p>
            </div>
            <div className="text-[10px] sm:text-[12px] font-semibold flex justify-center">
              <p>
                Turn: <span>18 / 38</span>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="h-[65px] sm:h-[100px] w-[65px] sm:w-[100px] rounded-[60px] bg-[#ffffff] my-[10px]" />
            </div>

            <div className="text-[10px] sm:text-[12px] flex flex-col text-center font-bold">
              <p>Leipzig</p>
              <p>Division 1</p>
              <p className="text-[#0b9444]">Thu 11 Jul, 20:00</p>
            </div>

            <div className="px-1 my-2 mb-5 cursor-pointer text-[14px] sm:text-[16px] flex w-full justify-center">
              <button className="bg-white border py-1 sm:py-2 rounded-md  border-[#3379b79b] font-semibold text-[#337ab7] w-[85%] sm:w-full ">
                View Match
              </button>
            </div>
          </div>

          <div className="w-full shadow border bg-[#e9e9e9cd] hover:bg-[#ffffff] sm:p-1">
            <div className="flex justify-center text-[16px] sm:text-[18px] font-bold">
              <p className="p-2">LAST FIXTURE</p>
            </div>
            <div className="text-[10px] sm:text-[12px] font-semibold flex justify-center">
              <p>
                Turn: <span>18 / 38</span>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="h-[65px] sm:h-[100px] w-[65px] sm:w-[100px] rounded-[60px] bg-[#ffffff] my-[10px]" />
            </div>

            <div className="text-[10px] sm:text-[12px] flex flex-col text-center font-bold">
              <p>Leipzig</p>
              <p>Division 1</p>
              <p className="text-[#0b9444]">Thu 11 Jul, 20:00</p>
            </div>

            <div className="px-1 my-2 mb-5 cursor-pointer text-[14px] sm:text-[16px] flex w-full justify-center">
              <button className="bg-white border py-1 sm:py-2 rounded-md  border-[#3379b79b] font-semibold text-[#337ab7] w-[85%] sm:w-full ">
                View Match
              </button>
            </div>
          </div>

          <div className="w-full hidden sm:flex flex-col shadow border cursor-pointer bg-[#e9e9e9cd] hover:bg-[#ffffff] p-1">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center flex-col border-b  border-[#7674744d] w-[95%]">
                <p className="text-[24px] font-bold">MANAGER LIST</p>
                <p className="text-[36px]">16</p>
              </div>

              <div className="flex items-center pt-3 flex-col border-b  border-[#7674744d] w-[95%]">
                <p className="text-[36px]">3</p>
                <p className="text-[15px] font-semibold">
                  Friends in Game World
                </p>
              </div>

              <div className="flex items-center pt-3 flex-col border-[#7674744d] w-[95%]">
                <p className="text-[36px]">3</p>
                <p className="text-[15px] font-semibold">
                  Friends in Game World
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5 pb-10">
        <div className="w-[95%] md:w-[90%] shadow bg-[#e9e9e9cd] p-1 rounded-[4px]">
          <div className="w-full flex flex-col items-center bg-[#ffffffb9] rounded-[4px]">
            <div className="w-[95%] sm:w-[85%] xl:w-[75%] pb-10">
              <div className="flex flex-col items-end sm:flex-row gap-1 justify-center pt-10 w-full">
                <textarea
                  name=""
                  className="nonResizableTextarea bg-[#ffffff92] w-full border-2 rounded-[8px] h-[90px] p-1 text-sm shadow"
                  id=""
                />
                <div className="flex items-end">
                  <button className="px-3 h-[25px] bg-gray-300 rounded-[4px] text-sm font-semibold border">
                    Post
                  </button>
                </div>
              </div>

              <div className="flex flex-col mt-4 gap-3">
                {items.map((item) => (
                  <div className="w-full bg-white p-2 px-2 shadow-md rounded-[4px]">
                    <div className="flex justify-end w-full">x</div>
                    <div className="flex gap-3 xs:gap-5">
                      <div className="">
                        {/* <div className="w-[45px] h-[45px] shadow rounded-[35px] bg-blue-100" /> */}
                        <img
                          className="rounded-[40px] h-[50px] max-w-[250px] xs:max-w-[220px] sm:max-w-[160px] lg:max-w-[120px]"
                          src={
                            "//smimgs.com/images/assets/no-player-picture.png"
                          }
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="w-[95%] text-[14px]">
                          Álvaro MORATA has completed his move to Tottenham
                          Hotspur (Erik Ten Hag) from Manchester United (Nọnso)
                          for 8,147,000.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                        <img className="h-6" src={comment} alt="/" />
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashPage;
