import React, { useEffect, useRef, useState } from "react";
import arrow from "../../assets/icons/auth_arrow.png";
import { dateList, textList } from "../../utils/data";
import AnnualImages from "./annualImages";

const SectionOne = () => {
  const [showGallery, setShowGallery] = useState(null);

  useEffect(() => {
    const scrollContainer: HTMLElement | null =
      document.querySelector(".scroll-container");

    function autoScroll(): void {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 50;

        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }

    setInterval(autoScroll, 1000);
  }, []);

  const handleShowMore = (items: any) => {
    handleHomes();
    setShowGallery(items);
  };

  const handleBack = () => {
    handleHomes();
    setShowGallery(null);
  };

  const homes = useRef(null);

  const handleHomes = () => {
    if (homes.current) {
      (
        homes.current as {
          scrollIntoView: (options: ScrollIntoViewOptions) => void;
        }
      ).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={homes}>
      {showGallery ? (
        <AnnualImages handleBack={handleBack} parentItem={showGallery} />
      ) : (
        <div className="relative flex flex-col gap-10 bg-[#F8F8F8] px-[10px] xs:px-[20px] sm:px-[40px] py-[80px] krona-one">
          <p className="text-[25px]">Share our memories with us</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5">
            {dateList.map((items) => (
              <div className="flex flex-col gap-2">
                <div
                  onClick={() => handleShowMore(items)}
                  className="cursor-pointer shadow rounded-[5px] w-full min-h-[300px] bg-blue-100"
                />
                <p className="text-[20px] font-semibold">{items.name}</p>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 bg-[#a5f1a2]">
            <div className="whitespace-nowrap flex gap-5 animate-scroll-x bg-[#a5f1a2] text-[#333]">
              {textList.map((items, i) => (
                <div key={i} className="scroll-content relative bg-[#a5f1a2]">
                  <p className="text-[20px] bg-[#a5f1a2] py-1">{items.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionOne;
