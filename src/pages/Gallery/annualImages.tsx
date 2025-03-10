import React, { FC } from "react";
import arrow from "../../assets/icons/auth_arrow.png";

type GalleryProps = {
  handleBack?: () => void;
  parentItem?: any;
};

const AnnualImages: FC<GalleryProps> = ({ parentItem, handleBack }) => {
  return (
    <>
      <div className="flex flex-col gap-10 bg-[#F8F8F8] px-[10px] xs:px-[20px] sm:px-[40px] py-[80px] krona-one">
        <div className="flex gap-2 items-center">
          <div
            onClick={handleBack}
            className="cursor-pointer h-[30px] w-[30px] bg-black rounded-[40px] flex justify-center items-center "
          >
            <img src={arrow} alt="" />
          </div>
          <p className="text-[25px]">{`${parentItem.name} memories`}</p>
        </div>

        <div className="grid grid-cols-3 gap-y-10 gap-x-5">
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer shadow rounded-[5px] w-full min-h-[300px] bg-blue-100" />
            <p className="text-[20px] font-semibold">Content</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer shadow rounded-[5px] w-full min-h-[300px] bg-blue-100" />
            <p className="text-[20px] font-semibold">Content</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer shadow rounded-[5px] w-full min-h-[300px] bg-blue-100" />
            <p className="text-[20px] font-semibold">Content</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer shadow rounded-[5px] w-full min-h-[300px] bg-blue-100" />
            <p className="text-[20px] font-semibold">Content</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer shadow rounded-[5px] w-full min-h-[300px] bg-blue-100" />
            <p className="text-[20px] font-semibold">Content</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer shadow rounded-[5px] w-full min-h-[300px] bg-blue-100" />
            <p className="text-[20px] font-semibold">Content</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnualImages;
