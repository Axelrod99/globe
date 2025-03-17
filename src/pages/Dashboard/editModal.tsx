import React, { FC, useState } from "react";
import AxiosInstance from "../../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PopupProps = {
  handleBack?: () => void;
  parentItem?: any;
  handleReload: () => void;
};

const EditModal: FC<PopupProps> = ({
  handleBack,
  parentItem,
  handleReload,
}) => {
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [selectedDisplayPicture, setSelectedDisplayPicture] = useState<File[]>(
    []
  );
  const [previewDisplayImage, setPreviewDisplayImage] = useState<string | null>(
    null
  );
  const [selectedDisplay, setSelectedDisplay] = useState("");

  const handleChangeDisplayPic = (e: any) => {
    setSelectedDisplay(e.target.files[0]);

    const newImages = e.target.files || [];
    setSelectedDisplayPicture([...selectedDisplayPicture, ...newImages]);

    if (newImages.length > 0 && previewDisplayImage === null) {
      const reader = new FileReader();
      reader.onload = (e) =>
        setPreviewDisplayImage((e.target as any).result as string);
      reader.readAsDataURL(newImages[0]);
    }
  };

  const updateImage = async () => {
    setLoadingUpload(true);

    const formData = new FormData();
    formData.append("image", selectedDisplay);

    try {
      AxiosInstance.patch(`/category/updateCategory/${parentItem}`, formData)
        .then((response) => {
          if (response.status === 200) {
            toast.success(`image updated`);
            handleReload();
          }
        })
        .catch((error) => {
          toast.error(error.response);
          toast.error(error, {
            position: "top-right",
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(parentItem);

  return (
    <div className="w-[350px] h-[350px] bg-white p-2 rounded-[4px]">
      <div className="border border-blue-200 w-full h-[280px] flex justify-center items-center rounded-[8px]">
        {previewDisplayImage ? (
          <img
            src={previewDisplayImage}
            alt="Selected Icon"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <>
            <label>
              <p className="flex justify-center items-center text-[38px] cursor-pointer font-black bg-[#bfbfc3] shadow text-white w-[60px] h-[60px] rounded-[30px]">
                +
              </p>
              <input
                name="displayImage"
                id="displayImage"
                type="file"
                accept="image/*"
                onChange={handleChangeDisplayPic}
                className="hidden"
              />
            </label>
          </>
        )}
      </div>

      <div className="flex gap-3 justify-end w-full pt-2 items-center">
        <p onClick={handleBack} className="cursor-pointer">
          Cancel
        </p>

        <button
          onClick={updateImage}
          className="bg-blue-200 h-[35px] w-[150px] text-white rounded-[5px]"
        >
          {loadingUpload ? "Posting..." : "Post"}
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EditModal;
