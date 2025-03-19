import React, { useEffect, useRef, useState } from "react";
import envlope_icon from "../../assets/icons/envelope.png";
import envelope_purple from "../../assets/icons/purple-envelope.png";
import axios from "axios";
import { toast } from "react-toastify";
import { linkArray } from "../../utils/data";
import YouTube from "react-youtube";

const SectionFour = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showParentEmail, setParentEmail] = useState<any>(null);
  const [tokens, setTokens] = useState<any>({
    token1: "",
    token2: "",
    token3: "",
    token4: "",
    token5: "",
    token6: "",
  });

  const loggedEmail = localStorage.getItem("glais40LoggedInEmail");

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

  const handleJoin = () => {
    setLoading(true);

    const newUserData = {
      email: email,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/Register`, newUserData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("glais40LoggedOutEmail", email);
          localStorage.setItem(
            "glais40VerificationToken",
            response.data.data.VerificationToken
          );
          setShowPopup(true);
        }
      })
      .catch(({ error, response }) => {
        if (!response) {
          toast("Please check internet connection", {
            position: "top-right",
          });
          setLoading(false);
        } else {
          toast.error(response.data.message, {
            position: "top-right",
          });
        }
      });
  };

  const handleCheck = async () => {
    const allTokens = Object.values(tokens).join("");
    setIsLoading(true);

    const verificationCode = localStorage.getItem("glais40VerificationToken");
    const emailss = localStorage.getItem("glais40LoggedOutEmail");
    localStorage.setItem("glais40LoggedInEmail", email);

    const newUserData = {
      email: emailss,
    };

    // console.log(verificationCode, emailss, allTokens)
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    if (verificationCode === allTokens) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/save`, newUserData)
        .then((response) => {
          if (response.status === 200) {
            setShowPopup(false);
            setParentEmail(emailss);
            localStorage.setItem("glais40VerificationToken", "");
            localStorage.setItem("glais40LoggedOutEmail", "");
            setShowPopup(false);
          }
        })
        .catch(({ error, response }) => {
          if (!response) {
            toast("Please check internet connection", {
              position: "top-right",
            });
            setIsLoading(false);
          } else {
            toast.error(response.data.message, {
              position: "top-right",
            });
          }
        });
    }
  };

  useEffect(() => {
    if (loggedEmail !== null) {
      setParentEmail(loggedEmail);
    }
  }, [loggedEmail]);

  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  useEffect(() => {
    if (linkArray.length > 0) {
      setSelectedItem(linkArray[0]);
    }
  }, [linkArray]);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event: any) => {
    // Access to player in all event handlers via event.target
    // event.target.pauseVideo();
  };

  return (
    <div className="py-[90px] flex flex-col gap-[150px] bg-[#F8F8F8]">
      {showParentEmail ? (
        <div className="relative flex flex-col gap-[24px] w-full items-center">
          <div className="flex flex-col gap-6 items-center xs:items-start w-[95%] xs:w-[75%]">
            <div className="z-[9] flex justify-between w-fit border-b-2 border-[#6d6f72]">
              <p className="text-[20px] xs:text-[28px] sm:text-[32px] outfit-semibold text-[#6d6f72]">
                {showParentEmail}
              </p>
            </div>
          </div>

          <div className="absolute left-0 right-0 top-0 bottom-72 text-[65px] sm:text-[90px] md:text-[110px] lg:text-[130px] xl:text-[145px] text-[#6d6f7294] opacity-10 flex justify-center krona-one">
            REGISTER
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col gap-[24px] w-full items-center">
          <div className="flex flex-col gap-6 items-start w-[92%] sm:w-[85%] md:w-[75%]">
            <div className="z-[9] flex justify-between w-full border-b border-[#6d6f72]">
              <input
                className="h-[65px] w-full bg-transparent text-[20px] sm:text-[24px] md:text-[28px]"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                // onClick={() => setShowPopup(true)}
                onClick={handleJoin}
                className="text-[#11131a] text-[14px] krona-one flex justify-center items-center gap-2 hover:text-purple-400"
              >
                <span className="hidden sm:flex justify-center items-center pb-1">
                  <img
                    className="w-[45px] h-[22px]"
                    src={envlope_icon}
                    alt="/"
                  />
                </span>
                {loading ? "Loading..." : "Register"}
              </button>
            </div>

            {/* <div className="flex z-[9]">
              <div className="flex items-center gap-[13px]">
                <input type="checkbox" />
                <p className="mt-1">
                  I agree to the{" "}
                  <span className="underline text-[#6d6f72] cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div> */}
          </div>

          <div className="absolute left-0 right-0 top-0 bottom-72 text-[65px] sm:text-[90px] md:text-[110px] lg:text-[130px] xl:text-[145px] text-[#6d6f7294] opacity-10 flex justify-center krona-one">
            REGISTER
          </div>

          {showPopup && (
            <div className=" bg-[#00000015] absolute z-[9] left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center h-[220px]">
              <div className="flex flex-col gap-3">
                <div className="flex justify-end">
                  <div
                    onClick={() => {
                      setShowPopup(false);
                      setLoading(false);
                    }}
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
                        className="text-black flex justify-center p-[10px] items-center text-[24px] outfit-semibold w-[40px] xs:w-[60px] md:w-[80px] h-[40px] xs:h-[60px] md:h-[80px] border-2 rounded-[4px] border-black bg-white"
                        ref={(el) => {
                          if (el) {
                            inputRefs.current[i - 1] = el;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleCheck}
                    className="h-[35px] w-[100px] hover:bg-blue-200 rounded-[5px] shadow bg-[#9bf9b3] text-white mt-2"
                  >
                    {isLoading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </div>

              {/* <div className="fixed w-screen h-screen z-[999] bg-[#00000055] top-0 left-0" /> */}
            </div>
          )}
        </div>
      )}

      <div className="px-[10px] xs:px-[20px] sm:px-[30px] flex flex-col gap-7 justify-center items-center">
        {selectedItem && (
          <div className="w-full">
            <YouTube videoId={selectedItem.url} opts={opts} onReady={onReady} />
          </div>
        )}

        <div className="flex gap-3">
          {linkArray.map((items) => (
            <div
              onClick={() => handleItemClick(items)}
              key={items.url}
              className={`cursor-pointer h-2 w-4 rounded-[20px] ${
                selectedItem && selectedItem.url === items.url ? 'bg-[#eec48a]' : 'bg-[#13243a]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
