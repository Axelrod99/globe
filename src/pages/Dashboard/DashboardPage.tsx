import React, { useState } from "react";
import wallpaper from "../../assets/img/unsplash_r-xKieMqL34.png";
import { DashboardNav, items } from "../../utils/data";
import DashPage from "./DashboardComponents/DashPage";
import SquadPage from "./DashboardComponents/SquadPage";
import ManagementPage from "./DashboardComponents/ManagementPage";
import TransferPage from "./DashboardComponents/TransferPage";
import LoanList from "./DashboardComponents/TransferPageTabs/loanList/loanList";
import CompetitionPage from "./DashboardComponents/competitionPage";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState(DashboardNav[0].name);

  return (
    <div
      className="Roboto"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
      }}
    >
      <div className="flex justify-center mb-5">
        <div className="border-b-2 shadow h-[55px] w-[90%] rounded-[5px] bg-[#343739d5] font-semibold">
          <div className="grid grid-cols-3 lg:grid-cols-6 h-[55px]  text-white">
            {DashboardNav.map((items) => (
              <div
                onClick={() => setActiveTab(items.name)}
                className="cursor-pointer hover:font-black flex items-center justify-center border rounded-l-[5px]"
              >
                {items.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="border-2 py-2 justify-between shadow-lg w-[90%] rounded-t-[5px] gap-5 lg:gap-0 container flex flex-col lg:flex-row items-center px-4 font-semibold bg-white">
          <div className="flex gap-3 w-full">
            <div className="bg-yellow-100 h-[65px] w-[65px] rounded-[40px]" />

            <div className="text-[14px] w-[290px] text-[#333]">
              <p className="">Bayern Leverkuson</p>
              <p className="text-[12px] font-light">Globe League</p>
              <div className="flex gap-2 text-[#333] text-[10px]">
                <span className="font-semibold  flex items-center">
                  Division 1
                </span>
                <p className=" flex items-center border-[#bcbabaf2] border-x px-3">
                  Season <span>6</span>
                </p>
                <p className=" flex items-center">
                  Balance: <span>14</span>M
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center justify-between w-full">
            <div className="hidden sm:flex">
              <button className="border shadow px-6 py-1 rounded-[8px]">
                Invite{" "}
              </button>
            </div>

            <div className="w-[300px] border">
              <div className="border-b w-full flex justify-center bg-[#232F39] text-white">
                Next Fixture
              </div>
              <div className="grid grid-cols-3 text-center items-center h-[32px] bg-[#afb2b5] text-white">
                <div className="h-[32px] flex justify-center items-center">
                  02
                </div>
                <div className="h-[32px] flex justify-center items-center border-x">
                  45
                </div>
                <div className="h-[32px] flex justify-center items-center">
                  03
                </div>
              </div>
              <div className="grid grid-cols-3 text-center items-center text-[#333333] border-t">
                <div className="flex justify-center items-center text-[10px] font-bold">
                  DAYS
                </div>
                <div className="flex justify-center items-center text-[10px] font-bold border-x">
                  HOURS
                </div>
                <div className="flex justify-center items-center text-[10px] font-bold">
                  MINS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {activeTab === DashboardNav[0].name && <DashPage />}
        {activeTab === DashboardNav[1].name && <SquadPage />}
        {activeTab === DashboardNav[2].name && <ManagementPage />}
        {activeTab === DashboardNav[3].name && <TransferPage />}
        {activeTab === DashboardNav[4].name && <CompetitionPage />}
      </div>
    </div>
  );
};

export default DashboardPage;
