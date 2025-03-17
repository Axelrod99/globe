import React, { useEffect, useRef, useState } from "react";
import arrow from "../../assets/icons/auth_arrow.png";
import { dateList, textList } from "../../utils/data";
import AnnualImages from "../Gallery/annualImages";
import DashboardAnnuaImgs from "./DashboardAnnuaImgs";
import AxiosInstance from "../../api/axios";

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [parentCategories, setParentCategories] = useState([] as any);

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

    setInterval(autoScroll, 1700);
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

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await AxiosInstance.get(`/category/all`);
      // console.log(res.data)
      setParentCategories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div ref={homes}>
      {showGallery ? (
        <DashboardAnnuaImgs handleBack={handleBack} parentItem={showGallery} />
      ) : (
        <div className="relative flex flex-col gap-10 px-[10px] xs:px-[20px] sm:px-[40px] py-[80px] krona-one">
          <p className="text-[20px] sm:text-[23px] md:text-[25px]">
            Share our memories with us
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-5">
            {parentCategories?.map((items: any) => (
              <div className="flex flex-col gap-2">
                <img
                  src={items?.image}
                  onClick={() => handleShowMore(items?.category)}
                  className="cursor-pointer shadow rounded-[5px] w-full min-h-[300px]"
                />
                <p className="text-[20px] font-semibold">{items?.category}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
