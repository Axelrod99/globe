import React from "react";
import arrow from "../../assets/icons/arrowRight.png";
import { ministers } from "../../utils/data";
import { useNavigate } from "react-router-dom";

const SectionTwo = () => {
  const navigate = useNavigate();

  const handleProfileClick = (items: any) => {
    navigate("/Profiles", { state: { minister: items } });
  };

  return (
    <div className="px-[10px] xs:px-[20px] sm:px-[30px] bg-[#13243a] text-white krona-one pb-[80px] pt-20">
      <div>
        <p className="text-[13px]">MINISTERING</p>
        <p className="text-[30px]">MEET OUR MINISTERS</p>
      </div>

      <hr className="w-full my-[30px] border" />

      {ministers.map((items, i) => (
        <div key={i} className="flex flex-col">
          <div
            onClick={() => handleProfileClick(items)}
            className="flex justify-between items-center cursor-pointer"
          >
            <p className="text-[25px]">
              {items.name}{" "}
              <span className="text-[16px] text-[#9d9ea1]">/{items.title}</span>
            </p>

            <div className="bg-white h-6 w-6 flex justify-center items-center">
              <img className="h-7 w-7" src={arrow} alt="/" />
            </div>
          </div>
          <hr className="w-full my-[20px]" />
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
