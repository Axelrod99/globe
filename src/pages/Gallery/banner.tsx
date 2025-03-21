import React, { useEffect, useRef } from "react";
import dropdown from "../../assets/icons/dropdown.svg";
import { textList } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/icons/logo.png'

const Banner = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const scrollContainer: HTMLElement | null =
  //     document.querySelector(".scroll-container");

  //   function autoScroll(): void {
  //     if (scrollContainer) {
  //       scrollContainer.scrollLeft += 20;

  //       if (
  //         scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
  //         scrollContainer.scrollWidth
  //       ) {
  //         scrollContainer.scrollLeft = 0;
  //       }
  //     }
  //   }

  //   setInterval(autoScroll, 700);
  // }, []);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const intervalId = setInterval(() => {
        scrollContainer.scrollLeft += 1;

        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }, 10);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="relative wallpaper px-[10px] xs:px-[20px] sm:px-[40px] pt-28 flex flex-col items-center gap-[16px] pb-[75px] krona-one text-[#333]">
      <p className="text-[30px]">GALLERY</p>
      <div>
        <img className="w-[18px]" src={dropdown} alt="/" />
      </div>

      <div className="absolute bottom-0 bg-[#eec48a]">
        {/* <div className="whitespace-nowrap flex gap-5 animate-scroll-x bg-[#eec48a] text-[#333]">
          {textList.map((items, i) => (
            <div key={i} className="scroll-content relative bg-[#eec48a]">
              <p className="text-[20px] bg-[#eec48a] py-1">{items.name}</p>
            </div>
          ))}
        </div> */}
        <div
          ref={scrollContainerRef}
          id="scroll-image"
          className="scroll-container whitespace-nowrap flex gap-[40px]"
        >
          <div className="whitespace-nowrap flex gap-5 animate-scroll-x bg-[#eec48a] text-[#333]">
            {textList.map((items, i) => (
              <div key={i} className="scroll-content relative bg-[#eec48a]">
                <p className="text-[20px] bg-[#eec48a] py-1">{items.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p
        onClick={() => navigate("/")}
        className="Axiforma-semibold absolute top-4 sm:top-7 left-6 sm:left-10 text-[20px] xs:text-[28px] cursor-pointer"
      >
        <img className="h-[80px] w-[80px]" src={logo} alt="/" />
      </p>
    </div>
  );
};

export default Banner;
