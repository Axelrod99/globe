import React, { FC } from "react";
import { handleLogout } from "../../api/axios";

interface LoggoutModalProps {
  // show: boolean;
  onClose: () => void;
}

const LogoutModal: FC<LoggoutModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col gap-[32px] font-semibold justify-center items-center w-[548px] h-[283px] rounded-[16px] p-6 bg-white">
      <p className="font-semibold text-[24px] text-center">
        Are you sure you want to exit the dashboard?
      </p>

      <div className="flex text-white flex-col gap-[16px]">
        <button
        onClick={handleLogout}
          // style={{
          //   backgroundImage:
          //     "linear-gradient(104deg, #007BFF -7.65%, #00FF87 85.88%)",
          // }}
          className="h-[48px] w-[333px] rounded-[46px] bg-blue-400"
        >
          Exit
        </button>

        <button
          onClick={onClose}
          className="text-[#333333] border border-blue-400 h-[48px] w-[333px] rounded-[46px]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
