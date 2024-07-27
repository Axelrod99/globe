import React from "react";

const PlayerSearch = () => {
  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="w-[900px] lg:w-full flex gap-2">
        <div className="w-[65%] flex flex-col gap-3">
          <div className="h-[70px] w-full bg-white shadow flex justify-center items-center gap-1">
            <button className="border border-black text-[#666] bg-[#f0f0f0] py-1 w-[180px] rounded-[5px] font-semibold">
              Previous
            </button>
            <button className="border border-black text-[#666] bg-[#f0f0f0] py-1 w-[180px] rounded-[5px] font-semibold">
              Next
            </button>
          </div>

          <div className="w-full bg-white flex justify-center items-center h-[100px]">
            No player searched
          </div>
        </div>
        <div className="w-[35%] flex justify-end rounded-[4px] shadow mt-[70px] text-[12px] font-semibold">
          <div className="w-fit rounded-[4px] bg-[#ffffffd9] shadow p-2">
            <div>
              <p className="flex items-center gap-4 border-b py-2">
                Player:{" "}
                <span className="w-full">
                  <input
                    className="bg-white border h-[35px] rounded-md w-[80%]"
                    type="text"
                  />
                </span>
              </p>
              <p className="flex items-center gap-4 border-b py-2">
                Position Select:{" "}
                <span>
                  <input
                    className="bg-white border h-[35px] rounded-md w-[120px]"
                    type="text"
                  />
                </span>
              </p>
              <p className="flex items-center gap-4 border-b py-2">
                Rating between:{" "}
                <span className="flex items-center gap-3">
                  <input
                    className="bg-white border h-[35px] rounded-md w-[60px]"
                    type="text"
                  />
                  <p>and</p>
                  <input
                    className="bg-white border h-[35px] rounded-md w-[60px]"
                    type="text"
                  />
                </span>
              </p>
              <p className="flex items-center gap-4 border-b py-2">
                Value:{" "}
                <span className="flex items-center gap-3">
                  <input
                    className="bg-white border h-[35px] rounded-md w-[95px]"
                    type="text"
                  />
                  <p>and</p>
                  <input
                    className="bg-white border h-[35px] rounded-md w-[95px]"
                    type="text"
                  />
                </span>
              </p>
              <p className="flex items-center gap-4 border-b py-2">
                Age between:{" "}
                <span className="flex items-center gap-3">
                  <input
                    className="bg-white border h-[35px] rounded-md w-[60px]"
                    type="text"
                  />
                  <p>and</p>
                  <input
                    className="bg-white border h-[35px] rounded-md w-[60px]"
                    type="text"
                  />
                </span>
              </p>
              <p className="flex items-center gap-4 border-b py-2">
                Nationality:{" "}
                <span className="w-full">
                  <input
                    className="bg-white border h-[35px] rounded-md w-[80%]"
                    type="text"
                  />
                </span>
              </p>
              <p className="flex items-center gap-4 border-b py-2">
                Free Agent:{" "}
                <span>
                  <input
                    className="bg-white border h-[35px] rounded-md w-[40px]"
                    type="checkbox"
                  />
                </span>
              </p>
              <div>
                <button className="border border-green-400 text-green-400 p-2 text-[15px] mt-3 rounded-[6px] w-[90px]">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSearch;
