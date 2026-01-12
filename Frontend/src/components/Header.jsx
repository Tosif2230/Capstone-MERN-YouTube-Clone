import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice.js";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { PiMicrophone } from "react-icons/pi";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

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
      </div>

      {/* Center Section */}
      <div className="flex justify-center items-center w-2/4">
        <input
          type="text"
          placeholder="Search"
          className="w-[55%] text-xs cursor-text h-7 px-4 border border-gray-300 rounded-l-full focus:outline-none"
        />
        <button className="h-7 text-2xl px-6 border cursor-pointer border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200">
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

        <Link to="/login">
          <button className="flex font-semibold border cursor-pointer border-gray-300 rounded-3xl m-3 p-1 text-blue-600 items-center">
            <span className="text-2xl">
              <RiAccountCircleLine />
            </span>
            <span>Sign in</span>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
