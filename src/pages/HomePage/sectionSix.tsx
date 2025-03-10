import React from "react";

const SectionSix = () => {
  return (
    <div className="flex w-full">
      <div className=" flex w-full bg-[#f1ff4f] justify-center items-center">
        <div className="min-w-[350px] h-[500px] bg-gray-500"/>
      </div>
      <div className=" krona-one flex w-full bg-[#11131A] text-white flex-col items-center text-start py-[80px]">
        <div className="flex flex-col max-w-[333px]">
          <p className="text-[13px]">WHO WE ARE</p>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[35px]">
              THE BIGGEST MOST IMPORTANT DANCE MUSIC FESTIVAL ON THE PLANET
            </p>
            <p className="text-[17px]">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco .
            </p>
          </div>

          <button className="mt-12 shadow border-2 border-gray-400 bg-[#c699fb] h-[50px] w-[192px] rounded-[4px]  text-[#111364] text-[14px]">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
