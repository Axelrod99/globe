import React from "react";
import tactics from "../../assets/icons/icons8-strategy-50.png";
import user_plus from "../../assets/icons/icons8-user-plus-48.png";
import football from "../../assets/icons/icons8-football-100.png"
import arrows from "../../assets/icons/icons8-change-80.png"

const MobileModal = () => {
  return (
    <div className="flex w-full justify-between h-[50px] border-y border-gray-300 ">
      <div className="flex justify-center items-center w-full">
        <div
          className={
            // ? "bg-slate-200 w-[40px] h-[40px] rounded-[30px] shadow shadow-orange-200 border-b border-gray-400  flex justify-center items-center p-[3px]"
            "bg-gray-200 cursor-pointer w-[40px] h-[40px] rounded-[30px] shadow shadow-green-700 border-b border-gray-400  flex justify-center items-center p-[3px]"
          }
        >
          <img className="h-[25px]" src={tactics} alt="/" />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div
          className={
            // ? "bg-slate-200 w-[40px] h-[40px] rounded-[30px] shadow shadow-orange-200 border-b border-gray-400  flex justify-center items-center p-[3px]"
            "bg-gray-200 cursor-pointer w-[40px] h-[40px] rounded-[30px] shadow shadow-green-700 border-b border-gray-400  flex justify-center items-center p-[3px]"
          }
        >
          <img className="h-[25px]" src={"https://smimgs.com/images/assets/formation.svg"} alt="/" />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div
          className={
            // ? "bg-slate-200 w-[40px] h-[40px] rounded-[30px] shadow shadow-orange-200 border-b border-gray-400  flex justify-center items-center p-[3px]"
            "bg-gray-200 cursor-pointer w-[40px] h-[40px] rounded-[30px] shadow shadow-green-700 border-b border-gray-400  flex justify-center items-center p-[3px]"
          }
        >
          <img className="h-[25px]" src={user_plus} alt="/" />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div
          className={
            // ? "bg-slate-200 w-[40px] h-[40px] rounded-[30px] shadow shadow-orange-200 border-b border-gray-400  flex justify-center items-center p-[3px]"
            "bg-gray-200 cursor-pointer w-[40px] h-[40px] rounded-[30px] shadow shadow-green-700 border-b border-gray-400  flex justify-center items-center p-[3px]"
          }
        >
          <img className="h-[25px]" src={football} alt="/" />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div
          className={
            // ? "bg-slate-200 w-[40px] h-[40px] rounded-[30px] shadow shadow-orange-200 border-b border-gray-400  flex justify-center items-center p-[3px]"
            "bg-gray-200 cursor-pointer w-[40px] h-[40px] rounded-[30px] shadow shadow-green-700 border-b border-gray-400  flex justify-center items-center p-[3px]"
          }
        >
          <img className="h-[25px]" src={arrows} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
