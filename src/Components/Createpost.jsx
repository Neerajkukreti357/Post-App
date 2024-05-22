import { useRef, useContext } from "react";
import { PostListContextApi } from "../Store/post-list-contextApi";

export const Createpost = () => {
  const { addPost } = useContext(PostListContextApi);
  const title = useRef();
  const description = useRef();
  const tags = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let titleOfPost = title.current.value;
    let descriptionOfPost = description.current.value;
    let tagsOfPost = tags.current.value;
    addPost(titleOfPost, descriptionOfPost, tagsOfPost);
  };

  return (
    <>
      <h1 className="text-center p-4">CREATE POST</h1>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            ref={title}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title of your post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            ref={description}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Tags
          </label>
          <input
            ref={tags}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Tags Here With # tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
