import React, { useEffect, useState } from "react";
import logo from "../../../assets/icons/logo.png";
import menu_icon from "../../../assets/icons/menu.png";
import { headerNav } from "../../../utils/data";
import cancel_icon from "../../../assets/icons/cancell.png";

type HeaderProps = {
  ScheduleClick: () => void;
  MinistersClick: () => void;
  HomeClick: () => void;
  GalleryClick: () => void;
};

const Header: React.FC<HeaderProps> = ({
  GalleryClick,
  MinistersClick,
  ScheduleClick,
  HomeClick,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showOptions, setShowOptions] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      <div
        className={`header-content sticky z-[999] bg-white outfit rounded-b-[15px] px-[10px] xs:px-[20px] sm:px-[40px] lg:px-[60px] shadow ${
          isSticky
            ? "flex justify-between items-center h-[90px] xs:h-[100px]"
            : " flex justify-between items-center h-[90px] xs:h-[100px]"
        } `}
      >
        <div className="text-[30px] xs:text-[36px] cursor-pointer sm:text-[40px] Montserrat">
          <div>
            <img
              onClick={HomeClick}
              className="h-[70px] w-[70px]"
              src={logo}
              alt="/"
            />
          </div>
        </div>

        <div className="hidden xs:flex gap-5 text-[14px] sm:text-[16px] krona-one">
          <p onClick={ScheduleClick} className="cursor-pointer">
            Schedule
          </p>
          <p onClick={MinistersClick} className="cursor-pointer">
            Ministers
          </p>
          <p onClick={GalleryClick} className="cursor-pointer">
            Gallery
          </p>
        </div>

        <div className="flex xs:hidden">
          <img
            onClick={() => setShowOptions(!showOptions)}
            src={menu_icon}
            alt=""
          />
        </div>
      </div>

      {showOptions && (
        <>
          <div className=" fixed top-0 left-0 w-full h-full z-[999] flex items-center justify-center">
            {/* <LogoutModal onClose={() => setShowLogoutModal(false)} /> */}
            <div className="h-[220px] w-[90%] krona-one bg-white border border-[#e99827] rounded-[20px] shadow flex flex-col gap-2 items-center justify-center p-2">
              <div className="flex justify-end w-full">
                <div>
                  <img
                    onClick={() => setShowOptions(false)}
                    src={cancel_icon}
                    alt=""
                  />
                </div>
              </div>

              <p
                onClick={() => {
                  ScheduleClick();
                  setShowOptions(false);
                }}
                className="bg-[#e99827cd] cursor-pointer rounded-[4px] w-full flex justify-center text-[19px] py-2"
              >
                Schedule
              </p>
              <p
                onClick={() => {
                  MinistersClick();
                  setShowOptions(false);
                }}
                className="bg-[#e99827cd] cursor-pointer rounded-[4px] w-full flex justify-center text-[19px] py-2"
              >
                Ministers
              </p>
              <p
                onClick={() => {
                  GalleryClick();
                  setShowOptions(false);
                }}
                className="bg-[#e99827cd] cursor-pointer rounded-[4px] w-full flex justify-center text-[19px] py-2"
              >
                Gallery
              </p>
            </div>
          </div>
          <div className="fixed w-screen h-screen bg-[#000000a6] top-0 left-0" />
        </>
      )}
    </div>
  );
};

export default Header;
