import React from "react";
import arrow from "../../assets/icons/arrowRight.png";
import { scheduleArray, textList } from "../../utils/data";

const SectionFive = () => {
  return (
    <div className="krona-one py-[90px] px-[10px] xs:px-[20px] sm:px-[30px] flex flex-col">
      <p className="text-[13px]">CALENDER</p>
      <div className="text-[35px] flex justify-between items-center">
        <p>EVENT SCHEDULE</p>
        {/* <p className="text-[14px]">View More</p> */}
      </div>

      <div className="overflow-x-scroll flex border-b-2 border-b-[#2a2d30] text-[11px] lg:text-[13px] xl:text-[15px]">
        <p className="text-[#6d6f72] min-w-[190px] hover:text-[#c699fb] px-[12px] py-[20px] cursor-pointer">
          Day #1 - mar 26.2025
        </p>
        <p className="text-[#6d6f72] min-w-[190px] hover:text-[#c699fb] px-[12px] py-[20px] cursor-pointer">
          Day #2 - mar 27.2025
        </p>
        <p className="text-[#6d6f72] min-w-[190px] hover:text-[#c699fb] px-[12px] py-[20px] cursor-pointer">
          Day #3 - mar 28.2025
        </p>
        <p className="text-[#6d6f72] min-w-[190px] hover:text-[#c699fb] px-[12px] py-[20px] cursor-pointer">
          Day #4 - mar 29.2025
        </p>
        <p className="text-[#6d6f72] min-w-[190px] hover:text-[#c699fb] px-[12px] py-[20px] cursor-pointer">
          Day #5 - mar 20.2025
        </p>
      </div>

      <table className="w-[100%]">
        {scheduleArray.map((items) => (
          <tr className=" w-[100%] h-[45px] text-[#344054] border-b">
            <td className="py-[33px]">
              <div className="flex flex-col pl-2 justify-center items-start rounded-[5px] h-[30px]">
                <span className="text-[#11131a] text-[11px] sm:text-[13px] md:text-[14px] lg:text-[17px]">
                  {items.time}
                </span>
                <span className="text-[#6d6f72] text-[13px]">am</span>
              </div>
            </td>
            <td className="">
              <div className="text-[#11131a] text-[11px] sm:text-[13px] md:text-[14px] lg:text-[17px] flex justify-start items-start rounded-[5px] h-[36px] md:h-[42px] lg:h-[50px] pl-2 md:pl-0">
                {items.topic}
              </div>
            </td>
            <td className="">
              <div className="flex flex-col justify-start items-start rounded-[5px] h-[36px] md:h-[42px] lg:h-[50px] pl-2 md:pl-0">
                <span className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[17px] text-[#11131a]">
                  {items.speaker1}
                </span>
                <span className="text-[11px] sm:text-[13px] md:text-[15px] mt-1">{items.speaker2}</span>
              </div>
            </td>
            <td className="hidden md:flex items-center  min-h-[90px]">
              <div className="flex flex-col justify-start items-start rounded-[5px] h-[36px] md:h-[42px] lg:h-[50px] pl-2 md:pl-0">
                <span className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[17px] text-[#11131a]">IKOYI</span>
                <span className="text-[13px]">Lagos State</span>
              </div>
            </td>
            {/* <td className="">
              <div className="flex justify-start items-start rounded-[5px] h-[30px] ">
                <img src={arrow} className="h-[20px] w-[20px]" alt="" />
              </div>
            </td> */}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SectionFive;
