import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
  bukibehGroup,
  champFXTGroup,
  poojaGroup,
  positionContent,
  youthBoolean,
} from "../../utils/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AxiosInstance from "../../api/axios";

interface Option {
  value: string;
  label: string;
}

const PlayerOnboardPage = () => {
  const userRoles = ["pooja", "champFXT", "bukibeh"];

  const [isLoading, setIsLoading] = useState(false);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const Session_role = localStorage.getItem("role");

  const [previewRole, setPreviewRole] = useState<any | null>(null);

  const user_role = previewRole;

  useEffect(() => {
    setPreviewRole(Session_role);
  }, []);

  const [selectedGroup, setSelectedGroup] = useState<any>([]);
  const handleSelectGroupChange = (selected: any) => {
    setSelectedGroup(selected);
  };

  const [selectedYouthStatus, setSelectedYouthStatus] = useState<any>([]);
  const handleSelectYouthChange = (selected: any) => {
    setSelectedYouthStatus(selected);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [rating, setRating] = useState("");
  const [value, setValue] = useState("");
  const [wages, setwages] = useState("");
  const handleSelectChange = (selected: any) => {
    setSelectedOptions(selected);
  };

  const User_id = localStorage.getItem("ids");

  const handleSubmit = () => {
    setIsLoading(true);

    const positionArray = selectedOptions.map((option) => option.value);

    const newPlayer = {
      firstName: firstName,
      lastName: lastName,
      position: positionArray,
      DOB: startDate,
      club: selectedGroup.value,
      rating: rating,
      value: value,
      youthTeam: selectedYouthStatus.value,
      wages: wages,
    };

    try {
      AxiosInstance.post(`/player/createPlayer/${User_id}`, newPlayer)
        .then((response) => {
          if (response.status === 200) {
            toast.success(`new player created`);
          }
          setIsLoading(false);
          setFirstName("");
          setLastName("");
          setSelectedOptions([]);
          setStartDate(null);
          setSelectedGroup([]);
          setRating("");
          setValue("");
          setwages("");
          setSelectedYouthStatus([]);
        })
        .catch((error) => {
          toast.error(error.response?.data?.message);
          toast.error(error.data.message, {
            position: "top-right",
          });
          setIsLoading(false);
        });
    } catch (error) {
      toast.error(`An error occured`);
    }
  };

  const validate =
    !firstName ||
    !lastName ||
    selectedOptions.length === 0 ||
    !rating ||
    !value ||
    !wages;

  const userGroupOptions: Record<string, any> = {
    pooja: poojaGroup,
    bukibeh: bukibehGroup,
    champFXT: champFXTGroup,
  };

  return (
    <>
      <div className="flex flex-col gap-7 p-10">
        <p className="font-semibold text-[24px]">Onboard Players</p>

        <div className="flex flex-col gap-7">
          <div className="flex gap-2 w-full xl:w-[80%]">
            <div className="flex flex-col gap-2 w-[100%]">
              <p className="text-[14px] font-semibold">First Name</p>
              <div>
                <input
                  className="border bg-[#f4f5f5] h-[42px] rounded-lg w-full xl:w-[80%] p-[10px]"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-2 w-[100%]">
                <p className="text-[14px] font-semibold">Last Name</p>
                <div>
                  <input
                    className="border bg-[#f4f5f5] h-[42px] rounded-lg w-full xl:w-[80%] p-[10px]"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full">
              <div className="flex flex-col gap-2 w-[100%]">
                <p className="text-[14px] font-semibold">Position</p>
                <div className="relative border bg-[#f4f5f5] font-semibold h-[42px] rounded-lg w-full px-[1px]">
                  <Select
                    options={positionContent}
                    isMulti
                    value={selectedOptions}
                    onChange={handleSelectChange}
                    className="absolute top-[1px] rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full">
              <div className="flex flex-col gap-2 w-[100%]">
                <p className="text-[14px] font-semibold">Date of Birth</p>

                <div className="w-full">
                  <DatePicker
                    className="border bg-[#f4f5f5] h-[42px] rounded-lg w-[250px] sm:w-[500px] lg:w-[800px] xl:w-[80%] p-[10px]"
                    placeholderText="mm/dd/yy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-2 w-[100%]">
              <p className="text-[14px] font-semibold">Club</p>
              <div className="relative text-[12px] Axiforma border bg-blue-50 h-[42px] rounded-lg w-full px-[1px]">
                <Select
                  options={userGroupOptions[user_role]}
                  value={selectedGroup}
                  onChange={handleSelectGroupChange}
                  className="absolute top-[1px] rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 w-full xl:w-[80%]">
            <div className="w-full">
              <div className="flex flex-col gap-2 w-[100%]">
                <p className="text-[14px] font-semibold">Rating</p>
                <div>
                  <input
                    className="border bg-[#f4f5f5] h-[42px] rounded-lg mt-1 w-full p-[10px]"
                    type="text"
                    name="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-2 w-[100%]">
                <p className="text-[14px] font-semibold">Value</p>
                <div>
                  <input
                    className="border bg-[#f4f5f5] h-[42px] rounded-lg mt-1 w-full p-[10px]"
                    type="text"
                    name="value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 w-full xl:w-[80%]">
            <div className="w-full">
              <div className="flex flex-col gap-2 w-[100%]">
                <p className="text-[14px] font-semibold">Youth Team</p>
                <div className="relative border bg-[#f4f5f5] font-semibold h-[42px] rounded-lg w-full px-[1px]">
                  <Select
                    options={youthBoolean}
                    value={selectedYouthStatus}
                    onChange={handleSelectYouthChange}
                    className="absolute top-[1px] rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-2 w-[100%]">
                <p className="text-[14px] font-semibold">Wages</p>
                <div>
                  <input
                    className="border bg-[#f4f5f5] h-[42px] rounded-lg mt-1 w-full p-[10px]"
                    type="text"
                    name="wages"
                    value={wages}
                    onChange={(e) => setwages(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-end w-full gap-3">
            <button
              onClick={handleSubmit}
              disabled={validate}
              className={`flex shadow w-[260px] shadow-[#a3a3aa] ${
                !validate ? "bg-[#bfbfc3] text-white" : ""
              } h-[38px] font-semibold justify-center items-center rounded-[5px]`}
            >
              {isLoading ? "Loading..." : "Continue"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default PlayerOnboardPage;
