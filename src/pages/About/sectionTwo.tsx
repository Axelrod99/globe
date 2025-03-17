import React from "react";
import { imgArray, imgArray2, ministers } from "../../utils/data";
import { useNavigate } from "react-router-dom";

const SectionTwo = () => {
  const navigate = useNavigate();

  const handleProfileClick = (items: any) => {
    navigate("/Profiles", { state: { minister: items } });
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="px-[15px] xs:px-[20px] sm:px-[40px] py-[90px] bg-white grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-4 sm:gap-y-0">
        {ministers.map((items, i) => (
          <img
          onClick={() => handleProfileClick(items)}
            key={i}
            src={items.img}
            className="w-full xl:w-[323px] h-[420px] sm:h-[400px] md:h-[510px] lg:h-[585px] xl:h-[323px] shadow transition-transform transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
