import React, { useState } from "react";
import { leagueNav, tableNav } from "../../../../utils/data";

const LeagueTab = () => {
  const [activeTab, setActiveTab] = useState(leagueNav[0].name);
  const [leagueTab, setleagueTab] = useState(tableNav[0].name);

  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="w-[800px] lg:w-[85%] flex flex-col mb-10 bg-white">
        <div className="flex justify-between w-full">
          <div className="w-[70%] flex font-semibold">
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

          <div className="w-[20%] flex items-center">
            <button className="flex  border items-center gap-2 text-black shadow drop-shadow-md px-10 py-1 rounded-[5px] bg-white  border-[#3379b79b] font-semibold ">
              Division 1
            </button>
          </div>
        </div>

        {activeTab === leagueNav[0].name && (
          <>
            <div className="flex font-semibold">
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

            {leagueTab === tableNav[0].name && <div>tab1</div>}

            {leagueTab === tableNav[1].name && (
              <div className="flex font-semibold">tab2</div>
            )}

            {leagueTab === tableNav[2].name && (
              <div className="flex font-semibold">tab3</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LeagueTab;
