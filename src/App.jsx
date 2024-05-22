import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Sidebar } from "./Components/Sidebar";
import { Createpost } from "./Components/Createpost";
import { PostLists } from "./Components/PostList";
import { useState } from "react";
import { PostListContextProvider } from "./Store/post-list-contextApi";
import "./App.css";

function App() {
  const [active, setActive] = useState("home");

  const handleClickHome = (e) => {
    e.preventDefault();
    setActive("home");
  };

  const handleClickCreatePost = (e) => {
    e.preventDefault();
    setActive("cp");
  };

  return (
    <PostListContextProvider>
      <div className="constainer-div">
        <Sidebar
          isActive={active}
          handleClickHome={handleClickHome}
          handleClickCreatePost={handleClickCreatePost}
        />
        <div className="contents">
          <Header />

          {active == "home" ? <PostLists /> : <Createpost />}

          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
