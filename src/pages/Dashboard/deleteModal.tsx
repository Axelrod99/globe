import { useState } from "react";
import trash from "../../assets/icons/trash.png";
import AxiosInstance from "../../api/axios";

type DeleteModalProps = {
  handleBack: () => void;
  parentItem?: any;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  handleBack,
  parentItem,
}) => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const handleDelete = async () => {
    setIsLoadingDelete(true);
    try {
      const res = await AxiosInstance.delete(`/post/${parentItem}`);
      handleBack();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center w-[498px] text-center bg-white border shadow rounded-[16px] p-5">
      <img src={trash} alt="/" />
      <p className="font-semibold text-[24px] text-[#191919]">
        Delete this Post
      </p>
      <div className="flex flex-col gap-2">
        <p className="text-[#676767]">
          Are you sure you want to delete this Post?
        </p>
        <p className="text-[#676767]">
          Deleting this Post means it would no be available for viewing
        </p>
      </div>

      <div>
        <div className="flex justify-between pt-5">
          <button
            onClick={handleBack}
            className="font-semibold text-[#676767] border h-[48px] w-[173px] rounded-[27px]"
          >
            No, Cancel
          </button>

          <button
            onClick={handleDelete}
            className="font-semibold h-[48px] w-[173px] rounded-[27px] text-white bg-[#A01207]"
          >
            {isLoadingDelete ? "Deleting..." : "Yes, Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
