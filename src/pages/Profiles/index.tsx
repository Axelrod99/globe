import React, { useEffect, useRef } from "react";
import logo from "../../assets/icons/logo.png";
import arrow from "../../assets/icons/auth_arrow.png";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../components/Layout/Footer";

const Profiles = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const minister = location.state?.minister;

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

  useEffect(() => {
    handleHomes();
  }, []);

  return (
    <>
      <div ref={homes} className="flex flex-col mb-32">
        <div className="flex items-center h-[90px] px-[20px] sm:px-[40px] bg-white justify-between">
          <img className="h-[70px] w-[70px]" src={logo} alt="/" />
        </div>
        <div className="mt-10 flex flex-col gap-8 items-center px-[10px] xs:px-[20px] sm:px-[40px]">
          <div className="flex flex-col w-full">
            <div className="flex justify-start w-full">
              <div
                onClick={() => navigate(-1)}
                className="cursor-pointer h-[30px] w-[30px] bg-black rounded-[40px] flex justify-center items-center "
              >
                <img src={arrow} alt="/" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="krona-one text-[40px]">{minister?.name}</p>
              <p className="Axiforma-bold text-[18px] text-[#6d6f72]">
                {minister?.title}
              </p>
            </div>
          </div>

          <img
            src={minister?.img}
            className=" max-h-[800px]  object-contain" // Use object-contain or object-cover
            alt="Minister Image"
          />

          <div>
            <p className="text-[#6d6f72] text-[17px] KumbhSans-Regular">
              {minister?.bio}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profiles;
