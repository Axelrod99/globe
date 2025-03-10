import React, { useEffect } from "react";
import { textList } from "../../utils/data";

const SectionOne = () => {
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

  return (
    <div className="relative h-[470px] w-full bg-[#13243a] text-white overflow-hidden krona-one">
      <div
        className="absolute left-0 top-40 w-full bg-[#BB85FA]"
        style={{ transform: "rotate(-10deg)" }}
      >
        <div className="whitespace-nowrap flex gap-5 animate-scroll-x bg-[#BB85FA] text-[#333]">
          {textList.map((items, i) => (
            <div key={i} className="scroll-content relative bg-[#BB85FA]">
              <p className="text-[20px] bg-[#BB85FA] py-1">{items.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute left-0 top-40 w-full bg-white"
        style={{ transform: "rotate(10deg)" }}
      >
        <div className="whitespace-nowrap flex gap-5 animate-scroll-x-reverse bg-white">
          {textList.map((items, i) => (
            <div key={i} className="scroll-content relative bg-white text-[#333]">
              <p className="text-[20px] bg-white py-1">{items.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
