import { createContext, useReducer, useState, useEffect } from "react";

const POST_ACTION = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  LIKE_POST: "LIKE_POST",
  DISLIKE_POST: "DISLIKE_POST",
  ADD_SMILE: "ADD_SMILE",
};

const genratesRandomNumber = async () => {
  const min = 1;
  const max = 1000;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

const PostManagereducer = (currentState, action) => {
  if (action.type == POST_ACTION.CREATE) {
    const tags = action.payload.tags.split("#");

    return [
      ...currentState,
      {
        title: action.payload.title,
        body: action.payload.description,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes,
        smiles: action.payload.smiles,
        tags: tags,
      },
    ];
  } else if (action.type === POST_ACTION.DELETE) {
    return currentState.filter((post, index) => {
      if (index !== action.payload.index) {
        return post;
      }
    });
  } else if (action.type === POST_ACTION.LIKE_POST) {
    return currentState.map((post, index) => {
      if (action.payload.index === index) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
  } else if (action.type === POST_ACTION.DISLIKE_POST) {
    return currentState.map((post, index) => {
      if (action.payload.index === index) {
        return { ...post, dislikes: post.dislikes + 1 };
      }
      return post;
    });
  } else if (action.type === POST_ACTION.ADD_SMILE) {
    return currentState.map((post, index) => {
      if (action.payload.index === index) {
        return { ...post, smiles: post.smiles + 1 };
      }
      return post;
    });
  } else return currentState;
};

export const PostListContextApi = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  handleLikeEvent: () => {},
  handleDislikeEvent: () => {},
  handleSmileEvent: () => {},
});

export const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostManagereducer, []);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [smiles, setSmiles] = useState(0);

  useEffect(() => {
    const setterFun = async () => {
      let likes = await genratesRandomNumber();
      let dislikes = await genratesRandomNumber();
      let smiles = await genratesRandomNumber();
      setLikes(likes);
      setDislikes(dislikes);
      setSmiles(smiles);
    };
    setterFun();
  }, [postList]);

  const addPost = (title, description, tags) => {
    dispatchPostList({
      type: POST_ACTION.CREATE,
      payload: {
        title,
        description,
        tags,
        likes,
        dislikes,
        smiles,
      },
    });
  };

  const deletePost = (index) => {
    dispatchPostList({
      type: POST_ACTION.DELETE,
      payload: {
        index,
      },
    });
  };

  const handleLikeEvent = (theElement, index) => {
    theElement.disabled = true;
    dispatchPostList({
      type: POST_ACTION.LIKE_POST,
      payload: {
        index,
      },
    });
  };

  const handleDislikeEvent = (theElement, index) => {
    theElement.disabled = true;
    dispatchPostList({
      type: POST_ACTION.DISLIKE_POST,
      payload: {
        index,
      },
    });
  };

  const handleSmileEvent = (theElement, index) => {
    theElement.disabled = true;
    dispatchPostList({
      type: POST_ACTION.ADD_SMILE,
      payload: {
        index,
      },
    });
  };

  return (
    <PostListContextApi.Provider
      value={{
        postList,
        addPost,
        deletePost,
        handleLikeEvent,
        handleDislikeEvent,
        handleSmileEvent,
      }}
    >
      {children}
    </PostListContextApi.Provider>
  );
};
