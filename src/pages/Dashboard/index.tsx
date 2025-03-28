import React, { useState } from "react";
import Select from "react-select";
import wallpaper_dash from "../../assets/img/wallpaper_dash.png";
import logo from "../../assets/icons/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dashboardNav, dateList } from "../../utils/data";
import AxiosInstance, { handleLogout } from "../../api/axios";
import Gallery from "./gellery";
import UsersArray from "./usersArray";
import LogoutModal from "../../components/LogoutModal";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const User_id = localStorage.getItem("glais40EmailAdmin");
  const [showLoggoutModal, setShowLoggoutModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(dashboardNav[0].name);

  const [selectedDisplayPictures, setSelectedDisplayPictures] = useState<
    File[]
  >([]);
  const [previewDisplayImages, setPreviewDisplayImages] = useState<string[]>(
    []
  );

  const handleChangeDisplayPic = (e: any) => {
    const newFiles: File[] = Array.from(e.target.files);

    setSelectedDisplayPictures((prevFiles) => [...prevFiles, ...newFiles]);

    const newPreviews: string[] = [];
    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        newPreviews.push(event.target?.result as string);
        if (newPreviews.length === newFiles.length) {
          setPreviewDisplayImages((prevPreviews) => [
            ...prevPreviews,
            ...newPreviews,
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (indexToRemove: number) => {
    setSelectedDisplayPictures((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
    setPreviewDisplayImages((prevPreviews) =>
      prevPreviews.filter((_, index) => index !== indexToRemove)
    );
  };

  const [parentList, setParentList] = useState([] as any);

  const [content, setContent] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<any>([parentList.Tag]);

  const handleSelectChange = (selected: any) => {
    setSelectedOptions(selected);
  };

  const options = [
    { value: "2015-2024", label: "2015-2024" },
    { value: "2005-2014", label: "2005-2014" },
    { value: "1995-2004", label: "1995-2004" },
    { value: "1985-1994", label: "1985-1994" },
  ];

  const handleSubmit = async () => {
    setIsLoading(true);

    const category = selectedOptions.value;

    try {
      const postPromises = selectedDisplayPictures.map(async (file) => {
        const formData = new FormData();
        formData.append("category", category);
        formData.append("image", file);
        formData.append("content", content);

        const response = await AxiosInstance.post(`/post/createPost`, formData);
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(`Failed to create post for ${file.name}`);
        }
      });

      const results = await Promise.all(postPromises);

      toast.success(`new post(s) created`);

      setContent("");
      setSelectedDisplayPictures([]);
      setPreviewDisplayImages([]);
      setSelectedOptions([]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create all posts");
      setIsLoading(false);
    }
  };

  const validate =
    selectedDisplayPictures.length === 0 || selectedOptions.length === 0;

  return (
    <>
      {User_id ? (
        <div
          className=" bg-[#f0f5f6] flex flex-col text-black pb-20 outfit"
          style={{ backgroundImage: `url(${wallpaper_dash})` }}
        >
          <div className="flex items-center h-[90px] px-[20px] sm:px-[40px] bg-white shadow border-b justify-between">
            <img className="h-[70px] w-[70px]" src={logo} alt="/" />

            <button
              onClick={() => setShowLoggoutModal(true)}
              className="h-[39px] w-[140px] rounded-[5px] border border-red-400 text-red-400"
            >
              Logout
            </button>
          </div>

          <div className="flex px-[20px] sm:px-[40px] krona-one mt-5 gap-4 xs:gap-7 text-[14px] xs:text-[16px]">
            {dashboardNav.map((items) => (
              <p
                onClick={() => {
                  setActiveTab(items.name);
                }}
                className={`cursor-pointer ${
                  activeTab === items.name ? "text-blue-400" : "text-[#333]"
                }`}
              >
                {items.name}
              </p>
            ))}
          </div>

          {activeTab === dashboardNav[0].name && (
            <div className="px-[20px] sm:px-[40px] mt-5 flex flex-col gap-6">
              <p className="text-[24px] font-semibold krona-one">
                Create A Post
              </p>

              <div className="flex flex-col gap-3 w-[100%] text-black">
                <p className="text-[14px] font-semibold">Category</p>

                <Select
                  options={options}
                  value={selectedOptions}
                  onChange={handleSelectChange}
                />
              </div>

              <div className="flex flex-col gap-2 w-full md:w-[80%]">
                <p className="text-[14px] font-semibold">Images</p>
                <div className="shadow shadow-[#bfbfc3] h-[230px] border-y-[#ac5a5a74] border-y bg-white rounded-md flex justify-center items-center">
                  <div className="flex overflow-x-auto">
                    {previewDisplayImages.map((image, index) => (
                      <div key={index} className="relative mx-2">
                        <img
                          src={image}
                          alt={`Selected Icon ${index}`}
                          className="h-[200px] w-[200px] object-cover rounded-md"
                        />
                        <div className="absolute top-[-10px] right-[-8px]">
                          <div
                            className="h-5 w-5 bg-red-700 text-white rounded-[30px] text-[12px] krona-one flex justify-center items-center cursor-pointer"
                            onClick={() => removeImage(index)}
                          >
                            X
                          </div>
                        </div>
                      </div>
                    ))}
                    <label className="mx-2">
                      <p className="flex justify-center items-center text-[38px] cursor-pointer font-black bg-[#bfbfc3] shadow text-white w-[60px] h-[60px] rounded-[30px]">
                        +
                      </p>
                      <input
                        name="displayImages"
                        id="displayImages"
                        type="file"
                        accept="image/*"
                        onChange={handleChangeDisplayPic}
                        className="hidden"
                        multiple // Allow multiple file selection
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-[100%]">
                <p className="text-[14px] font-semibold">Content</p>

                <textarea
                  className="h-[196px] border-y-[#ac5a5a74] border-y p-[10px] border bg-white rounded-md w-full nonResizableTextarea"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  disabled={validate}
                  onClick={handleSubmit}
                  className={`${
                    !validate
                      ? "bg-[#c6a200] text-[#fff]"
                      : "bg-white text-[#c6a200] border border-[#c6a200]"
                  } h-[52px] w-[210px] rounded-[5px] outfit-semibold justify-center items-center gap-[8px] flex shadow`}
                >
                  {isLoading ? "Loading..." : "Publish"}
                </button>
              </div>
            </div>
          )}

          {activeTab === dashboardNav[1].name && <Gallery />}

          {activeTab === dashboardNav[2].name && <UsersArray />}

          <ToastContainer />

          {showLoggoutModal && (
            <>
              <div className=" fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center">
                <LogoutModal onClose={() => setShowLoggoutModal(false)} />
              </div>
              <div className="fixed w-screen h-screen z-[999] bg-[#00000055] top-0 left-0" />
            </>
          )}
        </div>
      ) : (
        <div className="h-[85vh] flex flex-col gap-3 justify-center items-center text-[28px]">
          <div>
            <img src={logo} className="h-[220px] w-[220px]" alt="/" />
          </div>
          <p className="krona-one">Kindly log in</p>
          <button
            onClick={() => navigate("/Admin-Signup")}
            className="rounded-[5px] h-[39px] w-[170px] border border-blue-300 shadow text-[17px] "
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Dashboard;
