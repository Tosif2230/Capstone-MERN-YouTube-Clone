import React, { Fragment } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";



function Header() {
  return (
     <header className="w-full h-16 bg-white border-gray-200 flex items-center px-4">
      
      {/* Left Section */}
      <div className="flex items-center gap-4 w-1/4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          ☰
        </button>
        <header className="h-14 flex items-center">
  <h1 className="flex items-center text-xl font-semibold">
    <img
      src="https://www.youtube.com/s/desktop/12b1ec61/img/favicon_32x32.png"
      alt="YouTube"
      className="h-6 w-auto"
    />
    YouTube Clone
  </h1>
</header>

      </div>

      {/* Center Section */}
      <div className="flex items-center w-2/4">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 px-4 border border-gray-300 rounded-l-full focus:outline-none"
        />
        <button className="h-10 text-3xl px-6 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200">
          <IoSearchOutline />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-4 w-1/4">
        <button className='text-2xl'><BsThreeDotsVertical /></button>
        <button className='flex font-semibold border border-gray-300 rounded-3xl m-3 p-1 text-blue-600 items-center'><span className='text-2xl'><RiAccountCircleLine /></span><span className=''>Sign in</span></button>
      </div>

    </header>
  )
}

export default Header
