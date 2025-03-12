import React, { FC, useEffect, useState } from "react";
import arrow from "../../assets/icons/auth_arrow.png";
import commentIcon from "../../assets/icons/comment.png";
import CommentPopup from "./commentPopup";
import AxiosInstance from "../../api/axios";
import loadingIcon from "../../assets/icons/loading-icon.gif";

type GalleryProps = {
  handleBack?: () => void;
  parentItem?: any;
};

const AnnualImages: FC<GalleryProps> = ({ parentItem, handleBack }) => {
  const [showComments, setShowComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [parentItems, setParentItems] = useState([] as any);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const res = await AxiosInstance.get(`/post/all`);
      setParentItems(res.data);
      // console.log(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const reloadPost = async () => {
    try {
      
      const res = await AxiosInstance.get(`/post/all`);
      setParentItems(res.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const closeComment = () => {
    setShowComments(null);
    reloadPost();
  };

  return (
    <>
      {loading ? (
        <div className="h-[70vh] w-full flex justify-center items-center">
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <div className="flex flex-col gap-10 bg-[#F8F8F8] px-[10px] xs:px-[20px] sm:px-[40px] py-[80px] krona-one">
          <div className="flex gap-2 items-center pr-5 cursor-pointer">
            <div
              onClick={handleBack}
              className="cursor-pointer h-[30px] w-[30px] bg-black rounded-[40px] flex justify-center items-center "
            >
              <img src={arrow} alt="" />
            </div>
            <p className="text-[25px]">{`${parentItem.name} memories`}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5">
            {parentItems.map((items: any) => (
              <div className="flex flex-col gap-2">
                <div className="cursor-pointer shadow rounded-[5px] w-full ">
                  <>
                    {loading ? (
                      <img
                        src={loadingIcon}
                        className="w-full h-[270px]"
                        alt=""
                      />
                    ) : (
                      <img
                        src={items.image}
                        className="w-full h-[270px]"
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
    </>
  );
};

export default AnnualImages;
