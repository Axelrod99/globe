import React, { useState } from "react";
import wallpaper from "../../assets/img/wallpaper.png";
import logo from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";
import eye from "../../assets/icons/eye.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegLoading, setIsRegLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showToken, setShowToken] = useState(false);

  const validate = !email || !password;

  const handleVerify = () => {
    setShowToken(true);
  };

  const handleJoin = () => {
    setIsLoading(true);

    const newUserData = {
      email: email,
      password: password,
    };

    setTimeout(() => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/AdminSignup`, newUserData)
        .then((response) => {
          if (response.status === 200) {
            handleVerify();
            localStorage.setItem(
              "authToken",
              response.data.data.VerificationToken
            );
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
    }, 2000);
  };

  const handleRegister = async () => {
    setIsRegLoading(true);
    const verificationCode = localStorage.getItem("authToken");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (verificationCode === token) {
      const newUserData = {
        email: email,
        password: password,
      };

      axios
        .post(
          `${process.env.REACT_APP_API_URL}/auth/AdminRegister`,
          newUserData
        )
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("password", "");
            localStorage.setItem("authToken", "");
            navigate("/Admin-Dashboard");
          }
        })

        .catch(({ error, response }) => {
          // console.log(response);
          if (!response) {
            toast("Please check internet connection", {
              position: "top-right",
            });
          } else {
            toast.error(response.data.fields.email, {
              position: "top-right",
            });
          }
        });
    } else {
      toast.error("Incorrect validation token", {
        position: "top-right",
      });
      setIsRegLoading(false);
    }
  };

  return (
    <div className="h-screen">
      <div className="w-full flex">
        <div className="hidden md:flex w-full">
          <img className="w-full h-screen" src={wallpaper} alt="" />
        </div>
        <div className="flex justify-center w-full bg-[#F8F8F8]">
          <div className="pt-[70px] px-[15px] xs:px-[20px] sm:px-[40px] flex flex-col items-center w-full">
            <div>
              <img className="h-[130px] w-[130px]" src={logo} alt="" />
            </div>

            <div className="flex flex-col gap-[15px] sm:gap-[25px] font-semibold w-full mt-8">
              <div className="flex flex-col gap-[8px]">
                <p>Email</p>
                <input
                  className="w-full h-[51px] p-[16px] font-normal border border-[#E9EAF0] text-[#ABABAB] rounded-[5px]"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <p>Password</p>
                <div className="flex items-center pr-1 border border-[#E9EAF0]">
                  <input
                    className="w-full h-[51px] p-[16px] font-normal  text-[#ABABAB] rounded-[5px]"
                    placeholder="Password"
                    required
                    value={password}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="pl-1 w-9 flex justify-center"
                  >
                    <img src={eye} className="cursor-pointer" alt="/" />
                  </div>
                </div>
              </div>

              {showToken && (
                <div className="flex flex-col gap-[8px]">
                  <p>Token</p>
                  <input
                    className="w-full h-[51px] p-[16px] font-normal border border-[#E9EAF0] text-[#ABABAB] rounded-[5px]"
                    placeholder="Enter Token"
                    required
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                </div>
              )}

              <div className="flex justify-end">
                {showToken ? (
                  <button
                    onClick={handleRegister}
                    disabled={validate}
                    className={`flex font-semibold gap-2 shadow h-[48px] w-[200px] rounded-[5px] text-white ${
                      !validate ? "bg-[#c6a200] text-white" : "bg-[#c6a20071]"
                    } justify-center items-center rounded-[5px]`}
                  >
                    {isRegLoading ? "Loading..." : "Sign Up"}
                  </button>
                ) : (
                  <button
                    onClick={handleJoin}
                    disabled={validate}
                    className={`flex font-semibold gap-2 shadow h-[48px] w-[200px] rounded-[5px] text-white ${
                      !validate ? "bg-[#c6a200] text-white" : "bg-[#c6a20071]"
                    } justify-center items-center rounded-[5px]`}
                  >
                    {isLoading ? "Loading..." : "Verify"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
