import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { useState, useContext } from "react";
import { PostListContextApi } from "../Store/post-list-contextApi";

export const Header = ({ handleSearchClickEvent }) => {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { postList } = useContext(PostListContextApi);

  const handleSearchEvent = (e) => {
    const query = e.target.value;
    setSearch((preValue) => e.target.value);
    setFilteredList(() =>
      postList.filter((item) => {
        return item.title.toLowerCase().startsWith(query.toLowerCase());
      })
    );
  };

  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center ">
            <form
              className="col-12 col-lg-7 mb-3 mb-lg-0 me-lg-3 "
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark w-100 "
                placeholder="Enter Title"
                aria-label="Search"
                onChange={handleSearchEvent}
              />
            </form>
            {search !== "" ? (
              <select
                class="form-select position-absolute"
                size="3"
                aria-label="Size 3 select example"
                style={{
                  marginTop: "150px",
                  width: "45%",
                  marginRight: "40px",
                  zIndex: "1",
                }}
              >
                {filteredList.length !== 0 ? (
                  filteredList.map((item, index) => {
                    return index === 0 ? (
                      <option key={index} selected>
                        {item.title}
                      </option>
                    ) : (
                      <option key={index} value={item.title}>
                        {item.title}
                      </option>
                    );
                  })
                ) : (
                  <option>
                    <h1>404 NO DATA FOUND</h1>
                  </option>
                )}
              </select>
            ) : null}

            <div className="text-end">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => handleSearchClickEvent(filteredList)}
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
