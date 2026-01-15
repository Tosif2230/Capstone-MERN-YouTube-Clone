import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice.js";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { PiMicrophone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/authSlice";

function Header() {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const hasChannel = !!user?.channelId;
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchText.trim()) return;
    navigate(`/?search=${encodeURIComponent(searchText.trim())}`);
  };

  return (
    <header className="fixed top-0 z-50 w-full h-12 bg-white flex items-center px-4">
      {/* Left Section */}
      <div className="flex items-center gap-2 w-1/4">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-2 cursor-pointer hover:bg-gray-100 rounded-full"
        >
          ☰
        </button>
        <Link to="/">
          <div className="h-14 flex items-center">
            <h1 className="flex items-center text-xl font-semibold cursor-pointer">
              <img
                src="https://www.youtube.com/s/desktop/12b1ec61/img/favicon_32x32.png"
                alt="YouTube"
                className="h-6 w-auto"
              />
              YouTube Clone
            </h1>
          </div>
        </Link>
      </div>

      {/* Center Section */}
      <div className="flex justify-center items-center w-2/4">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="w-[55%] text-xs h-7 px-4 border border-gray-300 rounded-l-full focus:outline-none"
        />

        <button
          onClick={handleSearch}
          className="h-7 text-2xl px-6 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200"
        >
          <IoSearchOutline />
        </button>

        <button className="m-4 p-1 text-xl rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
          <PiMicrophone />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-4 w-1/4">
        <button className="text-2xl cursor-pointer">
          <BsThreeDotsVertical />
        </button>
        {isAuth &&
          (hasChannel ? (
            <Link to={`/channel/${user.channelId}`}>
              <button className="text-sm font-semibold px-3 py-1 rounded-full hover:bg-gray-100">
                My Channel
              </button>
            </Link>
          ) : (
            <button
              onClick={() => navigate("/create-channel")}
              className="text-sm font-semibold px-3 py-1 rounded-full hover:bg-gray-100"
            >
              Create Channel
            </button>
          ))}
        {!isAuth ? (
          <Link to="/login">
            <button className="flex font-semibold border cursor-pointer border-gray-300 rounded-3xl m-3 p-1 text-blue-600 items-center gap-1">
              <RiAccountCircleLine className="text-2xl" />
              <span>Sign in</span>
            </button>
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <span className="font-semibold text-sm">{user?.userName}</span>
            <button
              onClick={() => dispatch(logout())}
              className="text-xl  border-red-600 text-red-500"
            >
              <GoSignOut />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
