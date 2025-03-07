import React, { useState } from "react";
import google from "../../assets/icons/Google svg.svg";
import eye from "../../assets/icons/eye.png";
import wallpaper from "../../assets/img/unsplash_lQpFRPrepQ8.png";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../../api/axios";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggin, setIsLoggin] = useState(true);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const handleLoginn = () => {
    setIsLoading(true);
    const existingUserData = {
      email: email,
      password: password,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, existingUserData)
      .then((response) => {
        if (response.status === 200) {
          setAccessToken(response.data.token);
          localStorage.setItem("firstName", response.data.data[0].firstName);
          localStorage.setItem("lastName", response.data.data[0].lastName);
          localStorage.setItem("email", response.data.data[0].email);
          localStorage.setItem("ids", response.data.data[0]._id);
          localStorage.setItem("sessionId", response.data.token);
          localStorage.setItem("role", response.data.data[0].role);
          navigate("/PlayerOnboard");
        }
      })
      .catch(({ error, response }) => {
        // console.error(response);
        if (!response) {
          toast("Please check internet connection", {
            position: "top-right", // Or use toast.POSITION.TOP_RIGHT (depending on library)
          });
        } else {
          toast.error(response.data.message, {
            position: "top-right",
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validate = !email || !password;

  return (
    <>
      <div
        className="flex flex-col items-center h-screen"
        style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "100vh",
        }}
      >
        {isLoggin ? (
          <div className="flex flex-col items-center py-10 rounded-[12px] my-14 bg-white shadow w-[95%] xs:w-[85%]">
            <div className="mb-7">
              <button className="w-[300px] font-semibold flex gap-2 shadow shadow-[#00f16cb4] justify-center items-center h-[48px] rounded-[5px]">
                <img alt="/" src={google} />
                Continue with Google
              </button>
            </div>

            <div className="w-[90%] xs:w-[60%] ">
              <div className="flex flex-col gap-[48px]">
                <div className="flex flex-col gap-[15px] sm:gap-[30px] font-semibold">
                  <div className="flex flex-col gap-[8px]">
                    <input
                      className="w-full h-[45px] p-[16px] font-normal shadow shadow-[#90b485ab] text-[#ABABAB] rounded-[12px]"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <div className="flex items-center pr-1 shadow shadow-[#90b485ab] rounded-[12px]">
                      <input
                        className="w-full h-[45px] p-[16px] font-normal text-[#ABABAB] rounded-[12px]"
                        placeholder="Password"
                        required
                        value={password}
                        // type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="px-1 ml-1 bg-[#f6f6f6]">
                        <img src={eye} className="w-4 cursor-pointer" alt="/" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-between items-end">
                <button
                  onClick={handleLoginn}
                  disabled={validate}
                  className={`flex shadow shadow-[#00f160b4] font-semibold h-[48px] w-[180px] ${
                    !validate ? "bg-[#00f160b4] text-white" : ""
                  } justify-center items-center rounded-[5px]`}
                >
                  {isLoading ? "loading..." : "Log in"}
                </button>

                <p className="font-light text-[14px] cursor-pointer underline">
                  forget password?
                </p>
              </div>

              <div className="flex justify-center mt-5 text-[14px]">
                <p>
                  Don't have an account?{" "}
                  <span
                    onClick={() => setIsLoggin(false)}
                    className="underline cursor-pointer"
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-10 rounded-[12px] my-14 bg-white shadow w-[95%] xs:w-[85%]">
            <div className="mb-7">
              <button className="w-[300px] font-semibold flex gap-2 shadow shadow-[#00f16cb4] justify-center items-center h-[48px] rounded-[5px]">
                <img alt="/" src={google} />
                Continue with Google
              </button>
            </div>

            <div className="w-[90%] xs:w-[60%] ">
              <div className="flex flex-col gap-[48px]">
                <div className="flex flex-col gap-[15px] sm:gap-[30px] font-semibold">
                  <div className="flex flex-col gap-[8px]">
                    <input
                      className="w-full h-[45px] p-[16px] font-normal shadow shadow-[#90b485ab] text-[#ABABAB] rounded-[5px]"
                      placeholder="First Name"
                      required
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <input
                      className="w-full h-[45px] p-[16px] font-normal shadow shadow-[#90b485ab] text-[#ABABAB] rounded-[5px]"
                      placeholder="Last Name"
                      required
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <input
                      className="w-full h-[45px] p-[16px] font-normal shadow shadow-[#90b485ab] text-[#ABABAB] rounded-[5px]"
                      placeholder="Email"
                      required
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <div className="flex items-center pr-1 shadow shadow-[#90b485ab] rounded-[5px]">
                      <input
                        className="w-full h-[45px] p-[16px] font-normal text-[#ABABAB] rounded-[5px]"
                        placeholder="Password"
                        required
                        // value={password}
                        // type={showPassword ? "text" : "password"}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="px-1 ml-1 bg-[#f6f6f6]">
                        <img src={eye} className="w-4 cursor-pointer" alt="/" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-between items-end">
                <button
                  onClick={() => navigate("/Dashboard")}
                  className="rounded-[8px] border-green-600 border bg-green-50 font-semibold drop-shadow h-[40px] w-[150px]"
                >
                  Sign up
                </button>

                <p className="font-light text-[14px] cursor-pointer underline">
                  forget password?
                </p>
              </div>

              <div className="flex justify-center mt-5 text-[14px]">
                <p>
                  Don't have an account?{" "}
                  <span
                    onClick={() => setIsLoggin(true)}
                    className="underline cursor-pointer"
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-5">
          <div className="grid grid-cols-3 text-center  text-[12px] font-bold">
            <p className="hover:underline cursor-pointer">Terms of Use</p>
            <p className="hover:underline cursor-pointer">Code of Conduct</p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Corperae</p>
            <p className="hover:underline cursor-pointer">Support</p>
            <p className="hover:underline cursor-pointer">Contact</p>
          </div>

          <div className="text-[10px] text-center mt-10 flex justify-center font-light">
            <p>
              © 2005-2024 Globe Ltd. All rights reserved. All trademarks are the
              property of their respective owners.
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
