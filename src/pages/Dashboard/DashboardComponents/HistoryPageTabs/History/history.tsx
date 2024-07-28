import React, { useState } from "react";
import dropdown from "../../../../../assets/icons/icons8-down-arrow-50.png";
import {
  historyTableNav,
  Premier_League,
  statsNav,
  tableNav,
} from "../../../../../utils/data";
import Honors from "./HistoryComponent/Honors/Honors";
import BestManager from "./HistoryComponent/BestManager/BestManager";
import HistoryTable from "./HistoryComponent/Table/HistoryTable";
import Stats from "./HistoryComponent/Stats/Stats";
import RecordTransfer from "./HistoryComponent/RecordTransfer/RecordTransfer";
import GoalsTable from "./HistoryComponent/Stats/StatsTable/GoalsTable";
import AssistTable from "./HistoryComponent/Stats/StatsTable/AssistTable";
import RatingTable from "./HistoryComponent/Stats/StatsTable/RatingTable";
import MotmTable from "./HistoryComponent/Stats/StatsTable/motmTable";
import YellowCardTable from "./HistoryComponent/Stats/StatsTable/YellowCardTable";
import RedCardTable from "./HistoryComponent/Stats/StatsTable/RedCardTable";
import NormalTable from "./HistoryComponent/Table/TableComponent/NormalTable";
import FullTable from "./HistoryComponent/Table/TableComponent/FullTable";
import FormTable from "./HistoryComponent/Table/TableComponent/FormTable";

const History = () => {
  const [activeTab, setActiveTab] = useState(historyTableNav[0].name);
  const [statsTab, setStatsTab] = useState(statsNav[0].name);
  const [leagueTab, setleagueTab] = useState(tableNav[0].name);

  return (
    <div>
      <div className="w-[100%] text-[12px] sm:text-[14px] text-black bg-white">
        <div className=" w-[100%] py-1 font-semibold bg-[#EEEEEE]">
          <div className="px-1 border w-full">
            <div className="flex justify-center text-[18px] gap-1 px-5 items-center h-[40px]">
              Wall of Champions{" "}
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-scroll">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="flex flex-col w-[98%] mt-5 font-semibold text-[20px] text-white">
                <button className="border px-4 flex justify-between items-center shadow bg-gray-400  h-[50px] rounded-[4px]">
                  <span className="opacity-0">.</span>
                  Season 1{" "}
                  <span>
                    <img className="h-5 w-5" src={dropdown} alt="" />
                  </span>
                </button>

                <div className="w-full">
                  <div className="overflow-x-scroll">
                    <div className="mt-4 text-[12px] w-[550px] sm:w-full text-black">
                      <div className="flex font-semibold">
                        {historyTableNav.map((item) => (
                          <div
                            onClick={() => setActiveTab(item.name)}
                            className={`${
                              activeTab === item.name
                                ? "border-b-4 border-[#37778b]"
                                : ""
                            } w-full cursor-pointer flex justify-center items-center h-[60px]`}
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>

                      <div className="w-full">
                        <div className="">
                          {activeTab === historyTableNav[0].name && <Honors />}
                          {activeTab === historyTableNav[1].name && (
                            <BestManager />
                          )}
                          {activeTab === historyTableNav[2].name && (
                            <>
                              <div className="flex font-semibold">
                                {tableNav.map((item) => (
                                  <div
                                    onClick={() => setleagueTab(item.name)}
                                    className={`${
                                      leagueTab === item.name
                                        ? "border-b-4 border-[#37778b]"
                                        : ""
                                    } w-full cursor-pointer flex justify-center items-center h-[60px]`}
                                  >
                                    {item.name}
                                  </div>
                                ))}
                              </div>

                              {leagueTab === tableNav[0].name && (
                                <NormalTable />
                              )}

                              {leagueTab === tableNav[1].name && <FullTable />}

                              {leagueTab === tableNav[2].name && <FormTable />}
                            </>
                          )}

                          {activeTab === historyTableNav[3].name && (
                            <>
                              <div className="flex font-semibold w-full">
                                {statsNav.map((item) => (
                                  <div
                                    onClick={() => setStatsTab(item.name)}
                                    className={`${
                                      statsTab === item.name
                                        ? "border-b-4 border-[#37778b]"
                                        : ""
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
                              {statsTab === statsNav[4].name && (
                                <YellowCardTable />
                              )}
                              {statsTab === statsNav[5].name && (
                                <RedCardTable />
                              )}
                            </>
                          )}

                          {activeTab === historyTableNav[4].name && (
                            <RecordTransfer />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
