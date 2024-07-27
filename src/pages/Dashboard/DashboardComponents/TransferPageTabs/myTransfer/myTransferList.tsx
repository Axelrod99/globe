import React from "react";
import TranferTable from "./tranferTable";

const MyTransferList = () => {
  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="w-[800px] lg:w-[85%] flex flex-col gap-3 mb-10">
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
    </div>
  );
};

export default MyTransferList;
