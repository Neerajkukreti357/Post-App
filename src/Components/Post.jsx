import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { useContext, useRef } from "react";
import { PostListContextApi } from "../Store/post-list-contextApi";

export const Post = ({ item, postIndex }) => {
  const { deletePost, handleLikeEvent, handleDislikeEvent, handleSmileEvent } =
    useContext(PostListContextApi);
  const likeElement = useRef();
  const dislikeElement = useRef();
  const smileElement = useRef();

  return (
    <>
      <div className="p-5 d-flex">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.body}</p>
            {item.tags.length === 0
              ? null
              : item.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="badge text-bg-primary "
                      style={{ margin: "5px" }}
                    >
                      {tag}
                    </span>
                  );
                })}

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <a
                href="#"
                className="btn btn-danger"
                style={{ margin: "5px" }}
                onClick={(e) => {
                  deletePost(postIndex);
                }}
              >
                <RiDeleteBin5Fill />
              </a>
              <button
                type="button"
                className="btn btn-primary"
                style={{ margin: "5px" }}
                ref={likeElement}
                onClick={() => {
                  handleLikeEvent(likeElement.current, postIndex);
                }}
              >
                <AiFillLike />
              </button>

              <button
                type="button"
                className="btn btn-warning"
                style={{ margin: "5px" }}
                ref={dislikeElement}
                onClick={() => {
                  handleDislikeEvent(dislikeElement.current, postIndex);
                }}
              >
                <AiFillDislike />
              </button>
              <button
                type="button"
                className="btn btn-info"
                style={{ margin: "5px", zIndex: "0" }}
                ref={smileElement}
                onClick={() => {
                  handleSmileEvent(smileElement.current, postIndex);
                }}
              >
                <FaRegSmile />
              </button>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <p style={{ borderRight: "1px solid black", padding: "10px" }}>
                <AiFillLike />
                {item.likes}
              </p>
              <p style={{ borderRight: "1px solid black", padding: "10px" }}>
                <AiFillDislike />
                {item.dislikes}
              </p>
              <p style={{ padding: "10px" }}>
                <FaRegSmile />
                {item.smiles}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
