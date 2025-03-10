import React, { useEffect, useRef, useState } from "react";
import envlope_icon from "../../assets/icons/envelope.png";
import envelope_purple from "../../assets/icons/purple-envelope.png";

const SectionFour = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showParentEmail, setParentEmail] = useState(true);
  const [tokens, setTokens] = useState<any>({
    token1: "",
    token2: "",
    token3: "",
    token4: "",
    token5: "",
    token6: "",
  });

  const [currentInputIndex, setCurrentInputIndex] = useState(0);

  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current[currentInputIndex]) {
      inputRefs.current[currentInputIndex].focus();
    }
  }, [currentInputIndex]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTokens({
      ...tokens,
      [name]: value,
    });

    if (value.length === 1 && name !== "token6") {
      setCurrentInputIndex(currentInputIndex + 1);
    }
  };

  return (
    <div className="py-[90px] flex flex-col gap-[150px] bg-[#F8F8F8]">
      {showParentEmail ? (
        <div className="relative flex flex-col gap-[24px] w-full items-center">
          <div className="flex flex-col gap-6 items-start w-[75%]">
          <div className="z-[9] flex justify-between w-fit border-b-2 border-[#6d6f72]">
            <p className="text-[32px] outfit-semibold text-[#6d6f72]">Johndoe@gmail.com</p>
          </div>
          </div>

          

          <div className="absolute left-0 right-0 top-0 bottom-72 text-[65px] sm:text-[90px] md:text-[110px] lg:text-[130px] xl:text-[145px] text-[#6d6f7294] opacity-10 flex justify-center krona-one">
            NEWSLETTER
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col gap-[24px] w-full items-center">
          <div className="flex flex-col gap-6 items-start w-[75%]">
            <div className="z-[9] flex justify-between w-full border-b border-[#6d6f72]">
              <input
                className="h-[65px] w-full bg-transparent text-[28px]"
                placeholder="Enter Your Email Address"
              />
              <button
                onClick={() => setShowPopup(true)}
                className="text-[#11131a] text-[14px] krona-one flex justify-center items-center gap-2 hover:text-purple-400"
              >
                <span className="flex justify-center items-center pb-1">
                  <img
                    className="w-[45px] h-[22px]"
                    src={envlope_icon}
                    alt=""
                  />
                </span>
                Subscribe
              </button>
            </div>

            <div className="flex z-[9]">
              <div className="flex items-center gap-[13px]">
                <input type="checkbox" />
                <p className="mt-1">
                  I agree to the{" "}
                  <span className="underline text-[#6d6f72] cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-0 right-0 top-0 bottom-72 text-[65px] sm:text-[90px] md:text-[110px] lg:text-[130px] xl:text-[145px] text-[#6d6f7294] opacity-10 flex justify-center krona-one">
            NEWSLETTER
          </div>

          {showPopup && (
            <div className=" bg-[#00000015] absolute z-[9] left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center h-[190px]">
              <div className="flex flex-col gap-3">
                <div className="flex justify-end">
                  <div
                    onClick={() => setShowPopup(false)}
                    className="h-[40px] w-[40px] cursor-pointer shadow Krona-one bg-white rounded-[40px] flex justify-center items-center font-semibold text-[24px]"
                  >
                    x
                  </div>
                </div>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i}>
                      <input
                        type="text"
                        id={`token${i}`}
                        name={`token${i}`}
                        value={tokens[`token${i}`]}
                        onChange={handleChange}
                        className="text-black flex justify-center p-[10px] items-center text-[24px] outfit-semibold w-[80px] h-[80px] border-2 rounded-[4px] border-black bg-white"
                        ref={(el) => {
                          if (el) {
                            inputRefs.current[i - 1] = el;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="fixed w-screen h-screen z-[999] bg-[#00000055] top-0 left-0" /> */}
            </div>
          )}
        </div>
      )}

      <div className="px-[10px] xs:px-[20px] sm:px-[30px] flex gap-7">
        <div className="min-w-[330px] bg-[#333] h-[480px]" />

        <div className="bg-[#585656] h-[480px] w-full" />
      </div>
    </div>
  );
};

export default SectionFour;
