import React, { useEffect } from "react";
import { textList } from "../../utils/data";

const SectionThree = () => {
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
    <div className="relative flex flex-col md:flex-row px-[10px] xs:px-[20px] sm:px-[40px] pt-[80px] pb-[120px] bg-[#f6f6f6] krona-one gap-[40px]">
      <div className="flex flex-col gap-2 text-[#11131A]">
        <p className="text-[13px]">HUGE HONOR</p>
        <p className="text-[30px] leading-[35px]">OUR AWARDS</p>
      </div>

      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col items-start mt-[25px] border-b border-b-gray-200">
          <p className="text-[#6d6f72] text-[17px] KumbhSans-Regular w-[75%] leading-[30px] pb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua. Nisl tincidunt
            eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum
            dolor sit
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] sm:gap-[30px]">
          <div className="flex flex-col gap-3">
            <div className="text-[14px] sm:text-[16px] flex flex-row sm:flex-col justify-between sm:justify-start text-[#11131a]">
              <p>EVENT OF THE YEAR</p>
              <p>2025</p>
            </div>

            <p className="text-[#a5a6aa] text-[14px] sm:text-[16px]">
              Music Awards
            </p>

            <p className="text-[13px] xs:text-[15px] sm:text-[17px] text-[#6d6f72]">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[14px] sm:text-[16px] flex flex-row sm:flex-col justify-between sm:justify-start text-[#11131a]">
              <p>EVENT OF THE YEAR</p>
              <p>2025</p>
            </div>

            <p className="text-[#a5a6aa] text-[14px] sm:text-[16px]">
              Music Awards
            </p>

            <p className="text-[13px] xs:text-[15px] sm:text-[17px] text-[#6d6f72]">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[14px] sm:text-[16px] flex flex-row sm:flex-col justify-between sm:justify-start text-[#11131a]">
              <p>EVENT OF THE YEAR</p>
              <p>2025</p>
            </div>

            <p className="text-[#a5a6aa] text-[14px] sm:text-[16px]">
              Music Awards
            </p>

            <p className="text-[13px] xs:text-[15px] sm:text-[17px] text-[#6d6f72]">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[14px] sm:text-[16px] flex flex-row sm:flex-col justify-between sm:justify-start text-[#11131a]">
              <p>EVENT OF THE YEAR</p>
              <p>2025</p>
            </div>

            <p className="text-[#a5a6aa] text-[14px] sm:text-[16px]">
              Music Awards
            </p>

            <p className="text-[13px] xs:text-[15px] sm:text-[17px] text-[#6d6f72]">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit.
            </p>
          </div>
        </div>
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
  );
};

export default SectionThree;
