import React, { useState } from "react";
import { globeCupNav, statsNav } from "../../../../../utils/data";
import GlobeShieldResult from "./GlobeShieldComponent/Result/GlobeShieldResult";
import GoalsTable from "./GlobeShieldComponent/Stats/StatsTable/GoalsTable";
import AssistTable from "./GlobeShieldComponent/Stats/StatsTable/AssistTable";
import RatingTable from "./GlobeShieldComponent/Stats/StatsTable/RatingTable";
import MotmTable from "./GlobeShieldComponent/Stats/StatsTable/motmTable";
import YellowCardTable from "./GlobeShieldComponent/Stats/StatsTable/YellowCardTable";
import RedCardTable from "./GlobeShieldComponent/Stats/StatsTable/RedCardTable";

const GlobeShieldTab = () => {
  const [activeTab, setActiveTab] = useState(globeCupNav[0].name);
  const [statsTab, setStatsTab] = useState(statsNav[0].name);

  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="w-full xs:w-[800px] lg:w-[85%] flex flex-col mb-10 bg-white">
        <div className="flex justify-between w-full">
          <div className="w-[70%] flex font-semibold">
            {globeCupNav.map((item) => (
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

        {activeTab === globeCupNav[0].name && <GlobeShieldResult />}

        {activeTab === globeCupNav[1].name && (
          <>
            <div className="flex font-semibold text-[12px] xs:text-[16px]">
              {statsNav.map((item) => (
                <div
                  onClick={() => setStatsTab(item.name)}
                  className={`${
                    statsTab === item.name ? "border-b-4 border-[#37778b]" : ""
                  } w-full cursor-pointer flex justify-center items-center h-[60px]`}
                >
                  {item.name}
                </div>
              ))}
            </div>

            {statsTab === statsNav[0].name && <GoalsTable/>}
            {statsTab === statsNav[1].name && <AssistTable/>}
            {statsTab === statsNav[2].name && <RatingTable/>}
            {statsTab === statsNav[3].name && <MotmTable/>}
            {statsTab === statsNav[4].name && <YellowCardTable/>}
            {statsTab === statsNav[5].name && <RedCardTable/>}
          </>
        )}
      </div>
    </div>
  );
};

export default GlobeShieldTab;
