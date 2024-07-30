import React, { useState } from "react";
import { communityChampion } from "../../../../../utils/data";
import CommunityChampionResult from "./CommunityChampionComponent/Result/CommunityChampionResult";

const CommunityChampionTab = () => {
  const [activeTab, setActiveTab] = useState(communityChampion[0].name);

  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="w-full xs:w-[800px] lg:w-[85%] flex flex-col mb-10 bg-white">
        <div className="flex justify-between w-full">
          <div className="w-[70%] text-[14px] xs:text-[16px] flex font-semibold">
            {communityChampion.map((item) => (
              <div
                onClick={() => setActiveTab(item.name)}
                className={`${
                  activeTab === item.name ? "border-b-4 border-[#37778b]" : ""
                } w-[200px] cursor-pointer flex justify-center items-center h-[60px]`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {activeTab === communityChampion[0].name && <CommunityChampionResult />}
      </div>
    </div>
  );
};

export default CommunityChampionTab;
