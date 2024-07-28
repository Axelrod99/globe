import React from 'react'
import { Premier_League } from '../../../../../../../../utils/data'

const YellowCardTable = () => {
  return (
    <div className="">
    <table className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
      <thead className=" w-[100%] py-1 font-semibold bg-[#EEEEEE]">
        <td className="px-1 -l-[6px] -white">
          <div className="flex underline-offset-1 justify-start items-center rounded-[5px] h-[30px]">
            Pos
          </div>
        </td>
        <td className="px-1">
          <div className="flex justify-start items-center rounded-[5px] h-[30px]">
            -
          </div>
        </td>
        <td className="px-1">
          <div className="flex justify-start items-center rounded-[5px] h-[30px]">
            Player
          </div>
        </td>
        <td className="px-1">
          <div className="underline flex justify-start items-center rounded-[5px] h-[30px]">
            Club
          </div>
        </td>
        <td className="px-1">
          <div className="underline flex justify-center items-center rounded-[5px] h-[30px]">
            Yellow Cards
          </div>
        </td>
        <td className="px-1">
          <div className="underline flex justify-center items-center rounded-[5px] h-[30px]">
            Apps
          </div>
        </td>
        <td className="px-1">
          <div className="underline flex justify-center items-center rounded-[5px] h-[30px]">
            Ratio
          </div>
        </td>

      </thead>

      {Premier_League.map((item, i) => (
        <tr className="bg-white font-semibold border-y-2 h-[40px] py-4 border-[#57535391]">
          <td className="-l-[6px] ">
            <div className="flex justify-start font-normal">
              <p className="px-1">{i}</p>
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
              <p className="px-1">H. Robertson</p>
            </div>
          </td>
          <td className="  ">
            <div className="flex justify-start">
              <p className="px-1 font-normal">{item.name}</p>
            </div>
          </td>
          <td>
            <div className="flex justify-center font-bold">
              <p className="flex items-center font-normal">
                28
              </p>
            </div>
          </td>
          <td>
            <div className="flex justify-center">
            <p className="flex items-center font-normal">
                37
              </p>
            </div>
          </td>
          <td>
            <div className="flex justify-center">
            <p className="flex items-center font-normal">
                0.85
              </p>
            </div>
          </td>
        </tr>
      ))}
    </table>
  </div>
  )
}

export default YellowCardTable