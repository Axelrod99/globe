import React, { useState } from "react";
import { CompetitionOption, TransferOption } from "../../../utils/data";
import sortImage from "../../../assets/icons/icons8-sort-down-30.png";
import LeagueTab from "./CompetitionPageTabs/leagueTab";

const CompetitionPage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [activeTab, setActiveTab] = useState(CompetitionOption[0].name);

  const ToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="flex justify-center pb-[30px]">
      <div className="flex flex-col gap-[10px] items-center mt-4 w-[90%]">
        <div className="flex flex-col items-start w-full">
          <div className="relative">
            <button
              onClick={ToggleOptions}
              className="flex  border items-center gap-2 text-black shadow drop-shadow-md px-10 py-1 rounded-[8px] bg-white  border-[#3379b79b] font-semibold "
            >
              <p>{activeTab}</p>
              <span>
                <img className="h-5" src={sortImage} alt="" />
              </span>
            </button>

            {showOptions && (
              <div className="absolute bg-white border border-[#3379b79b] text-sm rounded-[5px] font-semibold w-[300px]">
                {CompetitionOption.map((item) => (
                  <p
                    onClick={() => {
                      setActiveTab(item.name);
                      setShowOptions(false);
                    }}
                    className="cursor-pointer hover:bg-gray-300 border-b border-[#3379b79b] py-[6px] px-3"
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="w-full overflow-x-scroll">
            <div className="">
                {activeTab === CompetitionOption[0].name && <LeagueTab/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage;