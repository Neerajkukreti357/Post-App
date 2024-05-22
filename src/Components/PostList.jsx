import { Post } from "./Post";
import { useContext } from "react";
import { PostListContextApi } from "../Store/post-list-contextApi";

export const PostLists = () => {
  const { postList } = useContext(PostListContextApi);

  return (
    <>
      <h1 className="p-5 text-center">POSTS</h1>
      <div className="post-lists h1-style">
        {postList.length === 0 ? (
          <h1 className="text-center p-5 ">No Post To Show</h1>
        ) : (
          postList.map((item, index) => {
            return <Post key={index} item={item} postIndex={index} />;
          })
        )}
      </div>
    </>
  );
};
