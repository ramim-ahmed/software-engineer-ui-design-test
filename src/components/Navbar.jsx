import React from "react";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import avatar from '../assets/avatar.jpg';
const Navbar = ({ brand }) => {
  return (
    <div className=" bg-white px-5 sm:px-0 h-16 flex items-center shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="w-1/5 flex items-center">
        <p className=" font-medium">{brand}</p>
        <span className="ml-2"><FaCaretDown /></span>
        </div>
        <div className=" flex items-center w-4/5 ml-3">
        <div className=" bg-neutral_2 text-neutral_8 p-3 rounded-l-md "> <FaSearch/></div>
          <input
            className="px-2 w-3/5 p-2 rounded-r-md bg-neutral_2 focus:outline-0"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center justify-end w-2/5 space-x-4">
          <span>
            <IoIosNotificationsOutline className=" text-neutral_8" size={30} />
          </span>
          <img className=' w-10 h-10 rounded-3xl ml-1' src={avatar} alt="" />
          <p>Jone Doe</p>
          <span><FaCaretDown /></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
