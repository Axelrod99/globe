import React from "react";
import circle_icon from "../../assets/img/Tagline@3x.png";

const SectionOne = () => {
  return (
    <div className=" gap-16 flex w-full px-[15px] xs:px-[20px] sm:px-[30px]  bg-[#f2f0f0] text-[#6d6f72] krona-one py-[80px]">
      <div className="hidden lg:flex max-w-[350px] justify-center">
        <img src={circle_icon} className=" rounded-[607px] " />
      </div>
      <div className="flex flex-col justify-center gap-3 w-full">
        <p className="text-[13px]">THE MAIN EVENT</p>
        <p className="text-[22px] xs:text-[28px] sm:text-[30px] w-full md:w-[75%] lg:w-[65%]">
          A CALL TO CELEBRATE AND LOOK AHEAD
        </p>
        <p className="text-[14px] xs:text-[16px]">
          GLA invites members, past and present, as well as the wider community,
          to join in this celebration of faith, unity, and impact. As we look
          back in gratitude, we also look ahead with renewed purpose—to build
          upon the foundation laid over the past 40 years and equip the next
          generation for greater exploits.
        </p>
        {/* <button className="mt-5 text-[#11131A] bg-[#9bf9b3] w-[200px] h-[50px] shadow border text-[17px]">
          Festival Info
        </button> */}
      </div>
    </div>
  );
};

export default SectionOne;
