import React, { useEffect, useRef, useState } from "react";
import arrow from "../../assets/icons/auth_arrow.png";
import { dateList, textList } from "../../utils/data";
import AnnualImages from "../Gallery/annualImages";
import DashboardAnnuaImgs from "./DashboardAnnuaImgs";
import AxiosInstance from "../../api/axios";
import edit_icon from "../../assets/icons/edit.svg";
import EditModal from "./editModal";

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [parentCategories, setParentCategories] = useState([] as any);
  const [showEdit, setShowEdit] = useState(null);
  const [showEditModal, setShowEditModal] = useState<any>(null);

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

  // const handleEditBack = () => {
  //   setShowEditModal(false)
  //   fetchCategories()
  // }

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
            {parentCategories?.map((items: any, i: number) => (
              <div
                key={i}
                onMouseLeave={() => setShowEdit(null)}
                onMouseOver={() => setShowEdit(items._id)}
                className="flex flex-col gap-2 relative"
              >
                <img
                  src={items?.image}
                  onClick={() => handleShowMore(items?.category)}
                  className="cursor-pointer shadow rounded-[5px] w-full min-h-[300px]"
                />
                <p className="text-[20px] font-semibold">{items?.category}</p>

                {showEdit === items._id && (
                  <div key={i} className="absolute top-2 right-2">
                    <img
                      onClick={() => setShowEditModal(items._id)}
                      className="h-6 w-6 z-[9] "
                      src={edit_icon}
                      alt="/"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {showEditModal && (
        <>
          <div className=" fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center">
            <EditModal
              handleReload={() => {
                setShowEditModal(false);
                fetchCategories();
              }}
              parentItem={showEditModal}
              handleBack={() => setShowEditModal(false)}
            />
          </div>
          <div className="fixed w-screen h-screen z-[999] bg-[#00000055] top-0 left-0" />
        </>
      )}
    </div>
  );
};

export default Gallery;
