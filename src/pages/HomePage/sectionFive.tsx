import React from "react";
import arrow from "../../assets/icons/arrowRight.png";
import { textList } from "../../utils/data";

const SectionFive = () => {
  return (
    <div className="krona-one py-[90px] px-[10px] xs:px-[20px] sm:px-[30px] flex flex-col">
      <p className="text-[13px]">CALENDER</p>
      <div className="text-[35px] flex justify-between items-center">
        <p>EVENT SCHEDULE</p>
        <p className="text-[14px]">View More</p>
      </div>

      <div className="flex border-b-2 border-b-[#2a2d30]">
        <p className="text-[15px] text-[#6d6f72] hover:text-[#c699fb] px-[12px] py-[20px] cursor-pointer">
          Day #1 - may 01.2025
        </p>
        <p className="text-[15px] text-[#6d6f72] hover:text-[#c699fb] px-[12px] py-[20px] cursor-pointer">
          Day #2 - may 02.2025
        </p>
        <p className="text-[15px] text-[#6d6f72] hover:text-[#c699fb] px-[12px] py-[20px] cursor-pointer">
          Day #3 - may 03.2025
        </p>
      </div>

      <table className="w-[100%]">
        {textList.map((items) => (
          <tr className=" w-[100%] h-[45px] text-[#344054] border-b">
            <td className="py-[33px]">
              <div className="flex flex-col pl-2 justify-center items-start rounded-[5px] h-[30px]">
                <span className="text-[#11131a] text-[17px]">
                  10:00 - 12:00
                </span>
                <span className="text-[#6d6f72] text-[13px]">am</span>
              </div>
            </td>
            <td className="">
              <div className="text-[#11131a] text-[17px] flex justify-start items-start rounded-[5px] h-[50px]">
                The World of Blues
              </div>
            </td>
            <td className="">
              <div className="flex flex-col justify-start items-start rounded-[5px] h-[50px]">
                <span className="text-[17px] text-[#11131a]">
                  Ashton Porter
                </span>
                <span className="text-[13px]">Music Director</span>
              </div>
            </td>
            <td className="">
              <div className="flex flex-col justify-start items-start rounded-[5px] h-[50px]">
                <span className="text-[17px] text-[#11131a]">NEW YORK</span>
                <span className="text-[13px]">Manhattan Club</span>
              </div>
            </td>
            <td className="">
              <div className="flex justify-start items-start rounded-[5px] h-[30px] ">
                <img src={arrow} className="h-[20px] w-[20px]" alt="" />
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SectionFive;
