import React from "react";

const SectionOne = () => {
  return (
    <div className=" gap-16 flex w-full px-[10px] xs:px-[20px] sm:px-[30px]  bg-[#f2f0f0] text-[#6d6f72] krona-one py-[80px]">
      <div className="flex max-w-[350px] justify-center">
        <div className="w-[320px] h-[320px] shadow border-8 rounded-[347px] bg-gray-400" />
      </div>
      <div className="flex flex-col justify-center gap-3 w-full">
        <p className="text-[13px]">THE MAIN EVENT</p>
        <p className="text-[30px] w-full md:w-[75%] lg:w-[65%]">
          OUR UNBELIEVABLE MUSIC FESTIVAL
        </p>
        <p>
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* <button className="mt-5 text-[#11131A] bg-[#9bf9b3] w-[200px] h-[50px] shadow border text-[17px]">
          Festival Info
        </button> */}
      </div>
    </div>
  );
};

export default SectionOne;
