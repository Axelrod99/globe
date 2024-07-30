import React, { useState } from "react";
import { historyNav } from "../../../utils/data";
import History from "./HistoryPageTabs/History/history";
import Overview from "./HistoryPageTabs/Overview/overviewTab";

const HistoryPage = () => {
  const [activeTab, setActiveTab] = useState(historyNav[0].name);

  return (
    <div className="flex justify-center pb-[30px]">
      <div className="flex flex-col gap-[10px] items-start mt-4 w-[95%] md:w-[90%]">
        <div className="flex flex-col items-start w-[100%] lg:w-[85%] bg-white">
          <div className="flex justify-between w-full">
            <div className="w-[90%] sm:w-[70%] flex font-semibold">
              {historyNav.map((item) => (
                <div
                  onClick={() => setActiveTab(item.name)}
                  className={`${
                    activeTab === item.name ? "border-b-4 border-[#37778b]" : ""
                  } w-[240px] cursor-pointer flex justify-center items-center h-[60px]`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className=""> 
            {activeTab === historyNav[0].name && <Overview />}
            {activeTab === historyNav[1].name && <History />}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
