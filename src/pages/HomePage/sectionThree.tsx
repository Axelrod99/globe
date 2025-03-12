import React, { useEffect } from "react";
import { textList } from "../../utils/data";
import { useNavigate } from "react-router-dom";

const SectionThree = () => {
  const navigate = useNavigate();

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

    // setInterval(autoScroll, 1700);

    setInterval(autoScroll, 10000);
  }, []);

  return (
    <div className="flex flex-col gap-[90px] bg-[#cccdcd] text-white krona-one py-[80px]">
      <div className=" gap-16 flex w-full px-[10px] xs:px-[20px] sm:px-[30px]">
        <div className="flex max-w-[350px] justify-center">
        <div className="w-[320px] h-[320px] shadow border-8 rounded-[347px] bg-gray-400" />
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
            className="mt-5 text-[#11131A] bg-[#9bf9b3] w-[200px] h-[50px] shadow border text-[17px]"
          >
            Event Info
          </button>
        </div>
      </div>

      <div>
        <div
          id="scroll-image"
          className="scroll-container whitespace-nowrap flex gap-5"
        >
          {textList.map((items, i) => (
            <div className="scroll-content relative">
              <div className="flex items-center gap-5">
                <div className="min-w-[536px] h-[295px] bg-gray-50 gap-9"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
