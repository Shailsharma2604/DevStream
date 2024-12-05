import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { toggleMenu } from "../utils/navSlice";
import { cacheResults } from "../utils/searchSlice";
import SearchBar from "./SearchBar";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useAuthStore } from "../utils/user";

const Header = () => {
  const { user, logout } = useAuthStore();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchCacheResults = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCacheResults[searchQuery]) {
        setSearchSuggestions(searchCacheResults[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    fetch(YOUTUBE_SEARCH_API + searchQuery)
      .then((res) => res.json())
      .then((res) => {
        setSearchSuggestions(res[1]);
        if (searchQuery) dispatch(cacheResults({ [searchQuery]: res[1] }));
      })
      .catch((error) => console.log(error));
  };

  const handleLogout= async() => {
    logout();
  }

  return (
    <>
      {!showSearchBar && (
        <div className="flex md:grid-flow-col md:grid justify-between items-center border-b-2 shadow-sm md:shadow-none md:border-none">
          <div className="flex items-center md:col-span-3">
            <button onClick={toggleMenuHandler}>
              <AiOutlineMenu className="hidden md:block mx-4 text-xl cursor-pointer" />
            </button>
            <Link to={"/?filter=Roadmap"} className="flex items-center">
              <img
                className="w-10 cursor-pointer"
                src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png"
                alt="Youtube Logo"
              />
              <b className="cursor-pointer text-lg">DevStream</b>
            </Link>
          </div>
          <div className="hidden md:block col-span-8">
            <SearchBar
              showSearchBar={showSearchBar}
              setShowSearchBar={setShowSearchBar}
              setSearchQuery={setSearchQuery}
              searchSuggestions={searchSuggestions}
            />
          </div>
          <div className="flex space-x-2 mr-2 md:mr-4 text-xl md:col-span-1">
            <AiOutlineSearch
              className="md:hidden"
              onClick={() => setShowSearchBar(!showSearchBar)}
            />

            {user ? (
              <>
                <button
                  data-popover-target="menu"
                  className=" py-1 px-2 border border-transparent text-center text-sm text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                  onClick={()=>handleLogout}
                >
                  <FaUserCircle
                    className="md:text-4xl "
                    style={{ color: "#d30000" }}
                  />
                </button>
              </>
            ) : (
              <div>
                <button
                  className="bg-slate-400 p-2 rounded-md mr-2"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="bg-slate-400 p-2 rounded-md mr-2"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {showSearchBar && (
        <SearchBar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
          setSearchQuery={setSearchQuery}
          searchSuggestions={searchSuggestions}
        />
      )}
    </>
  );
};

export default Header;
