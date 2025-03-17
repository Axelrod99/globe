import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../api/axios";
import Countdown from "../../components/CountDown";
import { textList } from "../../utils/data";
import banner_img from "../../assets/img/Header Title.png";

const Banner = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [parentItems, setParentItems] = useState([] as any);

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

  const targetDate = new Date("2025-03-26T00:00:00");

  return (
    <div className="border-[#e99827] border-b-[10px] wallpaper pt-28 flex flex-col items-center gap-12">
      <div>
        <img className="h-[130px] w-[130px]" src={logo} alt="/" />
      </div>

<div className="flex flex-col">
<Countdown targetDate={targetDate} />

<div className="w-full md:w-[700px] flex justify-center sm:justify-between items-center">
  <img src={banner_img} alt="/" />
</div>
</div>

      <div className="relative h-[400px] w-full text-white overflow-hidden krona-one">
        <div
          className="absolute left-0 top-40 w-full bg-[#BB85FA]  shadow border-t"
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
          className="absolute left-0 top-40 w-full bg-white shadow border-t"
          style={{ transform: "rotate(10deg)" }}
        >
          <div className="whitespace-nowrap flex gap-5 animate-scroll-x-reverse bg-white">
            {textList.map((items, i) => (
              <div
                key={i}
                className="scroll-content relative bg-white text-[#333]"
              >
                <p className="text-[20px] bg-white py-1">{items.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <button
        onClick={() => navigate("/Gallery")}
        className="mt-12 shadow border-2 hover:border-gray-400 bg-[#c6a200] h-[60px] w-[192px] rounded-[4px] text-white text-[22px] outfit-semibold"
      >
        Memories
      </button> */}
    </div>
  );
};

export default Banner;
