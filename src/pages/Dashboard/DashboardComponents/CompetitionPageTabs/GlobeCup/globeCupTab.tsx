import React, { useState } from "react";
import { globeCupNav, statsNav } from "../../../../../utils/data";
import GlobeCupResult from "./GlobeCupComponent/Result/GlobeCupResult";
import GoalsTable from "./GlobeCupComponent/Stats/StatsTable/GoalsTable";
import AssistTable from "./GlobeCupComponent/Stats/StatsTable/AssistTable";
import RatingTable from "./GlobeCupComponent/Stats/StatsTable/RatingTable";
import MotmTable from "./GlobeCupComponent/Stats/StatsTable/motmTable";
import YellowCardTable from "./GlobeCupComponent/Stats/StatsTable/YellowCardTable";
import RedCardTable from "./GlobeCupComponent/Stats/StatsTable/RedCardTable";

const GlobeCupTab = () => {
  const [activeTab, setActiveTab] = useState(globeCupNav[0].name);
  const [statsTab, setStatsTab] = useState(statsNav[0].name);

  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="w-[800px] lg:w-[85%] flex flex-col mb-10 bg-white">
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

        {activeTab === globeCupNav[0].name && <GlobeCupResult />}

        {activeTab === globeCupNav[1].name && (
          <>
            <div className="flex font-semibold">
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

export default GlobeCupTab;
