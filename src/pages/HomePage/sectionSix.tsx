import React from "react";
import sectionImg from '../../assets/img/leaders.png'

const SectionSix = () => {
  return (
    <div className="flex w-full">
      <div className="hidden md:flex w-full bg-[#eec48a] justify-center items-center">
        <img src={sectionImg} className="h-[500px] bg-gray-500" />
      </div>
      <div className=" krona-one flex w-full bg-[#11131A] text-white flex-col items-center text-start py-[80px]">
        <div className="flex flex-col max-w-[90%] sm:max-w-[80%] md:max-w-[333px]">
          <p className="text-[13px]">WHO WE ARE</p>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[35px]">GUIDING LIGHT ASSEMBLY</p>
            <p className="text-[17px]">
              Guiding Light Assembly is a Christ-centered church dedicated to
              discipleship, leadership development, and community
              transformation. For 40 years, GLA has been a place where faith
              meets purpose, raising leaders who shape society with godly
              influence.
            </p>
          </div>

          {/* <button className="mt-12 shadow border-2 border-gray-400 bg-[#c699fb] h-[50px] w-[192px] rounded-[4px]  text-[#111364] text-[14px]">
            Buy Tickets
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
