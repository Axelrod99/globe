import React, { useState } from "react";
import { leagueNav, statsNav, tableNav } from "../../../../../utils/data";
import NormalTable from "./leagueTabComponent/Table/NormalTable";
import FullTable from "./leagueTabComponent/Table/FullTable";
import FormTable from "./leagueTabComponent/Table/FormTable";
import Result from "./leagueTabComponent/Result/Result";
import Fixture from "./leagueTabComponent/Fixture/Fixture";
import Stats from "./leagueTabComponent/Stats/Stats";
import GoalsTable from "./leagueTabComponent/Stats/StatsTable/GoalsTable";
import AssistTable from "./leagueTabComponent/Stats/StatsTable/AssistTable";
import RatingTable from "./leagueTabComponent/Stats/StatsTable/RatingTable";
import MotmTable from "./leagueTabComponent/Stats/StatsTable/motmTable";
import YellowCardTable from "./leagueTabComponent/Stats/StatsTable/YellowCardTable";
import RedCardTable from "./leagueTabComponent/Stats/StatsTable/RedCardTable";
// import Stats from "./leagueTabComponent/Stats/Stats";

const LeagueTab = () => {
  const [activeTab, setActiveTab] = useState(leagueNav[0].name);
  const [leagueTab, setleagueTab] = useState(tableNav[0].name);
  const [statsTab, setStatsTab] = useState(statsNav[0].name);

  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="w-full xs:w-[800px] lg:w-[85%] flex flex-col mb-10 bg-white">
        <div className="flex justify-between w-full">
          <div className="w-full xs:w-[70%] flex font-semibold text-[14px] xs:text-[16px]">
            {leagueNav.map((item) => (
              <div
                onClick={() => setActiveTab(item.name)}
                className={`${
                  activeTab === item.name ? "border-b-4 border-[#37778b]" : ""
                } w-full cursor-pointer flex justify-center items-center h-[60px]`}
              >
                {item.name}
              </div>
            ))}
          </div>

          <div className="w-[20%] hidden xs:flex items-center">
            <button className="flex  border items-center gap-2 text-black shadow drop-shadow-md px-10 py-1 rounded-[5px] bg-white  border-[#3379b79b] font-semibold ">
              Division 1
            </button>
          </div>
        </div>

        {activeTab === leagueNav[0].name && (
          <>
            <div className="flex font-semibold text-[14px] xs:text-[16px]">
              {tableNav.map((item) => (
                <div
                  onClick={() => setleagueTab(item.name)}
                  className={`${
                    leagueTab === item.name ? "border-b-4 border-[#37778b]" : ""
                  } w-full cursor-pointer flex justify-center items-center h-[60px]`}
                >
                  {item.name}
                </div>
              ))}
            </div>

            {leagueTab === tableNav[0].name && <NormalTable />}

            {leagueTab === tableNav[1].name && <FullTable />}

            {leagueTab === tableNav[2].name && <FormTable />}
          </>
        )}

        {activeTab === leagueNav[1].name && <Result />}

        {activeTab === leagueNav[2].name && <Fixture />}

        {activeTab === leagueNav[3].name && (
          <>
            <div className="flex font-semibold text-[13px] xs:text-[16px]">
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

            {statsTab === statsNav[0].name && <GoalsTable />}
            {statsTab === statsNav[1].name && <AssistTable />}
            {statsTab === statsNav[2].name && <RatingTable />}
            {statsTab === statsNav[3].name && <MotmTable />}
            {statsTab === statsNav[4].name && <YellowCardTable />}
            {statsTab === statsNav[5].name && <RedCardTable />}
          </>
        )}
      </div>
    </div>
  );
};

export default LeagueTab;
