import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
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
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-warning">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
