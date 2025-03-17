import React, { useEffect, useRef, useState } from "react";
import { textList } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import circle_icon from "../../assets/img/Tagline@3x.png";
import AxiosInstance from "../../api/axios";

const SectionThree = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [parentCategories, setParentCategories] = useState([] as any);
  // const [activeTab, setActiveTab] = useState(parentCategories[0].category);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const intervalId = setInterval(() => {
        scrollContainer.scrollLeft += 0.5; 

        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }, 20); // Increased delay for slower scrolling

      return () => clearInterval(intervalId);
    }
  }, []);

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

  const handleGalleryClick = (items: any) => {
    navigate("/Gallery", { state: { parentCategories: items } });
  };

  return (
    <div className="flex flex-col gap-[90px] bg-[#cccdcd] text-white krona-one py-[80px]">
      <div className=" gap-16 flex w-full px-[10px] xs:px-[20px] sm:px-[30px]">
        <div className="hidden lg:flex max-w-[350px] justify-center">
          <img src={circle_icon} className=" rounded-[607px] " />
        </div>
        <div className="flex flex-col justify-center gap-3 w-full">
          <p className="text-[13px]">THE MAIN EVENT</p>
          <p className="text-[30px] w-full md:w-[75%] lg:w-[65%]">
            A CALL TO CELEBRATE AND LOOK AHEAD
          </p>
          <p>
            GLA invites members, past and present, as well as the wider
            community, to join in this celebration of faith, unity, and impact.
            As we look back in gratitude, we also look ahead with renewed
            purpose—to build upon the foundation laid over the past 40 years and
            equip the next generation for greater exploits.
          </p>
          <button
            onClick={() => navigate("/About")}
            className="mt-5 text-white bg-[#eec48a] w-[200px] h-[50px] shadow border text-[17px]"
          >
            Event Info
          </button>
        </div>
      </div>

      <div>
        <div
          ref={scrollContainerRef}
          id="scroll-image"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          className="scroll-container whitespace-nowrap flex gap-[40px]"
        >
          {parentCategories.map((items: any, i: number) => (
            <div
              onClick={() => handleGalleryClick(items)}
              className="cursor-pointer scroll-content relative"
            >
              <div className="flex items-center gap-5">
                <img
                  src={items.image}
                  className="min-w-[380px] xs:min-w-[420px] sm:min-w-[536px] h-[295px] gap-9"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
