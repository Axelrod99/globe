import React, { FC, useEffect, useState } from "react";
import service_pic2 from "../../assets/img/service_pic2.png";
import send from "../../assets/icons/send-alt.png";
import { textList } from "../../utils/data";
import arrow from "../../assets/icons/auth_arrow.png";
import AxiosInstance from "../../api/axios";
import loadingIcon from "../../assets/icons/loading-icon.gif";
import { toast } from "react-toastify";

type CommentProps = {
  handleBack?: () => void;
  parentItem?: any;
};

const CommentPopup: FC<CommentProps> = ({ parentItem, handleBack }) => {
  const emailss = localStorage.getItem("glais40LoggedInEmail");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingComment, setLoadingComment] = useState(false);
  const [parentComments, setParentComments] = useState([] as any);
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const handleSend = () => {
    if (emailss !== null) {
      setLoading(true);

      const postId = parentItem._id;

      const newComment = {
        content: comment,
        email: emailss,
      };

      try {
        AxiosInstance.patch(`/post/createComment/${postId}`, newComment).then(
          (response) => {
            if (response.status === 200) {
              toast.success(`new post created`);
            }
            setComment("");
            fetchComment();
            setLoading(false);
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchComment = async () => {
    try {
      setLoadingComment(true);
      const res = await AxiosInstance.get(`/post/comment/${parentItem._id}`);
      setParentComments(res.data);
      // console.log(res.data);
      setLoadingComment(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <div className="relative rounded-[4px] w-[95%] md:w-[90%] overflow-y-scroll h-[90%] md:h-[80vh] lg:h-[90vh] shadow-sm bg-white text-black flex flex-col md:flex-row">
      <div className="flex flex-col w-full border-r">
        <img src={parentItem?.image} className="h-full w-full" alt="/" />

        <div className="px-2 border-t border-t-[#acacac] w-full md:hidden flex gap-1 py-7">
          <input
            className="h-[43px] w-full border-b-2"
            placeholder="Add a comment here..."
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="w-[47px] flex justify-center">
            <button
              disabled={!comment}
              onClick={handleSend}
              className="h-[43px] w-[43px] bg-gray-100 border border-gray-300 shadow rounded-[50px] flex justify-center items-center"
            >
              {loading ? "..." : <img src={send} alt="/" />}
            </button>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col w-full border-l relative">
        <div className="md:border-b border-b-[#acacac] w-full h-fit p-2 text-[13px] md:text-[15px] mb-1 md:mb-0">
          <p>{parentItem?.content}</p>
        </div>

        {/* <div className="px-2 border-t border-t-[#acacac] absolute bottom-0 w-full md:hidden flex gap-1 py-1">
          <input
            className="h-[43px] w-full border-b-2"
            placeholder="Add a comment here..."
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="w-[47px] flex justify-center">
            <button
              disabled={!comment}
              onClick={handleSend}
              className="h-[43px] w-[43px] bg-gray-100 border border-gray-300 shadow rounded-[50px] flex justify-center items-center"
            >
              {loading ? "..." : <img src={send} alt="/" />}
            </button>
          </div>
        </div> */}

        <>
          {loadingComment ? (
            <div className="h-[60px] flex justify-center items-center">
              <img src={loadingIcon} alt="/" />
            </div>
          ) : (
            <>
              <div className="mb-5 md:mb-0 md:h-[80%] flex flex-col md:overflow-y-scroll mt-2">
                {parentComments?.map((items: any) => (
                  <div className="flex flex-col p-2 gap-1">
                    <p className="text-[11px] italic font-semibold">
                      @
                      <span className="text-[#333] axiforma">
                        {" "}
                        {items?.email}
                      </span>
                    </p>
                    <div className="text-[13px] text-[#5d615e]">
                      <p>{items?.content}</p>
                      <div className="flex justify-end text-[#333] outfit-semibold">
                        <p>{formatDate(items?.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>

        {emailss !== null ? (
          <div className="px-2 border-t border-t-[#acacac] absolute bottom-0 w-full hidden md:flex gap-1 py-1">
            <input
              className="h-[43px] w-full border-b-2"
              placeholder="Add a comment here..."
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="w-[47px] flex justify-center">
              <button
                disabled={!comment}
                onClick={handleSend}
                className="h-[43px] w-[43px] bg-gray-100 border border-gray-300 shadow rounded-[50px] flex justify-center items-center"
              >
                {loading ? "..." : <img src={send} alt="/" />}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* <div className="absolute rounded-[50px] text-[20px] krona-one right-3 top-3 h-[35px] w-[35px] flex justify-center items-start border shadow">
im
      </div> */}

      <div className="absolute left-5 top-5">
        <img
          onClick={handleBack}
          src={arrow}
          className="cursor-pointer"
          alt="/"
        />
      </div>
    </div>
  );
};

export default CommentPopup;
