import React from "react";
import facebook_icon from "../../../assets/icons/facebook.png";
import instagram_icon from "../../../assets/icons/instagram.png";
import twitter_icon from "../../../assets/icons/twitter.png";
import cloud_icon from "../../../assets/icons/cloud.png";

const Footer = () => {
  return (
    <div className="py-[90px] px-[10px] xs:px-[20px] sm:px-[30px] bg-[#6f6f6f] text-[#ffffff] krona-one flex flex-col gap-[90px]">
      <div className="text-[24px] xs:text-[28px] md:text-[31px] flex flex-col gap-2 sm:gap-0">
        <p>WE CREATED AN INCREDIBLE</p>
        <p className="text-[#9d9ea1]">MUSIC SHOW</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-[#d4d4d6] outfit-thin">
        Glais40 © 2025. All Rights Reserved.
        </p>

        <div className="flex gap-[5px]">
          <div className="border border-white h-[40px] w-[40px] rounded-[40px] flex justify-center items-center p-[11px]">
            <img src={facebook_icon} alt="" />
          </div>
          <div className="border border-white h-[40px] w-[40px] rounded-[40px] flex justify-center items-center p-[11px]">
            <img src={twitter_icon} alt="" />
          </div>
          <div className="border border-white h-[40px] w-[40px] rounded-[40px] flex justify-center items-center p-[11px]">
            <img src={cloud_icon} alt="" />
          </div>
          <div className="border border-white h-[40px] w-[40px] rounded-[40px] flex justify-center items-center p-[11px]">
            <img src={instagram_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
