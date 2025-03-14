import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../api/axios";
import Countdown from "../../components/CountDown";

const Banner = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [parentItems, setParentItems] = useState([] as any);

  const targetDate = new Date("2025-03-26T00:00:00");

  return (
    <div className="border-[#e99827] border-b-[10px] wallpaper px-[10px] xs:px-[20px] sm:px-[40px] pt-28 flex flex-col items-center gap-12 pb-[75px]">
      <div>
        <img className="h-[130px] w-[130px]" src={logo} alt="/" />
      </div>

      <Countdown targetDate={targetDate} />

      <div className="w-full md:w-[700px] flex justify-center sm:justify-between items-center">
        <div className="hidden sm:flex border-[24px] border-[#debb21] h-[140px] w-[140px] rounded-[150px]"></div>

        <div className="flex flex-col gap-3">
          <div className="flex items-end gap-2">
            <span className="flex justify-center items-center h-[40px]">
              MARCH
            </span>{" "}
            <span className="text-[56px] h-[65px] Lato-Italics font-semibold">
              26
            </span>{" "}
            -{" "}
            <span className="text-[56px] h-[65px] Lato-Italics font-black">
              30
            </span>{" "}
            <span className="flex justify-center items-center h-[40px]">
              2025
            </span>
          </div>

          <div className="text-[12px] Lato-Italics font-black">
            <p>GUIDING LIGHT ASSEMBLY</p>
            <p>LAYI AJAYI BEMBE WAY, PARKVIEW EST,</p>
            <p>IKOYI, LAGOS</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/Gallery")}
        className="mt-12 shadow border-2 hover:border-gray-400 bg-[#c6a200] h-[60px] w-[192px] rounded-[4px] text-white text-[22px] outfit-semibold"
      >
        Memories
      </button>
    </div>
  );
};

export default Banner;
