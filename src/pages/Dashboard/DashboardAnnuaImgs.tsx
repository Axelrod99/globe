import React, { FC, useEffect, useState } from "react";
import arrow from "../../assets/icons/auth_arrow.png";
import commentIcon from "../../assets/icons/comment.png";
// import CommentPopup from "./commentPopup";
import AxiosInstance from "../../api/axios";
import delete_icon from "../../assets/icons/icons8-delete-60.png";
import loadingIcon from "../../assets/icons/loading-icon.gif";
import DeleteModal from "../Dashboard/deleteModal";
import { useLocation, useNavigate } from "react-router-dom";
import CommentPopup from "../Gallery/commentPopup";

type GalleryProps = {
  handleBack?: () => void;
  parentItem?: any;
};

const DashboardAnnuaImgs: FC<GalleryProps> = ({ parentItem, handleBack }) => {
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [parentItems, setParentItems] = useState([] as any);
  const [showDelete, setShowDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState<any>(null);
  const location = useLocation();
  const parentCategories = location.state?.parentCategories;

  const reloadPost = async () => {
    try {
      const res = await AxiosInstance.get(`/category/${parentItem}`);
      setParentItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const closeComment = () => {
    setShowComments(null);
    reloadPost();
  };

  const handleDeleteBack = () => {
    setShowDeleteModal(null);
    reloadPost();
  };

  const getCategory = async () => {
    try {
      const res = await AxiosInstance.get(`/category/${parentItem}`);
      setParentItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="h-[70vh] w-full flex justify-center items-center">
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <div className="flex flex-col gap-10 px-[10px] xs:px-[20px] sm:px-[40px] py-[80px] krona-one">
          <div className="flex gap-2 items-center pr-5">
            <div
              onClick={handleBack}
              className="cursor-pointer h-[30px] w-[30px] bg-black rounded-[40px] flex justify-center items-center "
            >
              <img src={arrow} alt="" />
            </div>
            <p className="text-[25px]">{`${parentItem} memories`}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5">
            {parentItems.map((items: any, i: number) => (
              <div
                key={i}
                onMouseLeave={() => setShowDelete(null)}
                onMouseOver={() => setShowDelete(items._id)}
                className="flex flex-col gap-2 relative"
              >
                <div className="shadow rounded-[5px] w-full ">
                  <>
                    {loading ? (
                      <img
                        src={loadingIcon}
                        className="w-full h-[270px]"
                        alt=""
                      />
                    ) : (
                      <img
                        onClick={() => setShowComments(items)}
                        src={items.image}
                        className="w-full h-[270px] cursor-pointer"
                        alt=""
                      />
                    )}
                  </>
                </div>
                <div className="flex gap-1 justify-between">
                  <p className="text-[14px] font-semibold w-full leading-4 flex items-center">
                    {items.content}
                  </p>
                  <div
                    onClick={() => setShowComments(items)}
                    className="flex gap-1 items-center pr-3 cursor-pointer hover:border-b border-b-black"
                  >
                    <img className="h-[20px]" src={commentIcon} alt="" />
                    <p className="text-[14px]">{items.comments.length}</p>
                  </div>
                </div>

                {showDelete === items._id && (
                  <div key={i} className="absolute top-2 right-2">
                    <img
                      onClick={() => setShowDeleteModal(items._id)}
                      className="h-6 w-6 z-[9] cursor-pointer"
                      src={delete_icon}
                      alt=""
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {showComments && (
        <>
          <div className=" fixed top-0 left-0 w-full h-full z-[999] flex items-center justify-center">
            <CommentPopup parentItem={showComments} handleBack={closeComment} />
          </div>
          <div className="fixed w-screen h-screen bg-[#00000097] top-0 left-0" />
        </>
      )}

      {showDeleteModal && (
        <>
          <div className=" fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center">
            <DeleteModal
              parentItem={showDeleteModal}
              handleBack={handleDeleteBack}
            />
          </div>
          <div className="fixed w-screen h-screen z-[999] bg-[#00000055] top-0 left-0" />
        </>
      )}
    </>
  );
};

export default DashboardAnnuaImgs;
