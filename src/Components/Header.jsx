import React from "react";
import { NavLink } from "react-router-dom";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { TbBell } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { user } from "../Data/dummy";

const Header = () => {
  const navActive = ({ isActive }) =>
    `navlink ${
      isActive ? `bg-gray-800 hover:bg-gray-800` : `hover:bg-gray-600`
    }`;

  return (
    <header className="flex  flex-shrink-0 ">
      {/* Header Profile */}
      <div className=" hidden w-64 flex-shrink-0 bg-gray-800 px-4 py-3 md:block">
        <button className="flex w-full items-center">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src={user.image}
            alt=""
          />
          <span className=" ml-5 mr-3 text-sm font-medium text-white">
            {user.name}
          </span>
          <BiChevronDown className="ml-auto h-6 w-6 text-gray-400" />
        </button>
      </div>
      {/* Header Right Side */}
      <div className="flex flex-1 items-center justify-between bg-gray-700 px-4 py-2">
        {/* Nav Links */}
        <nav className="hidden lg:flex lg:gap-2">
          <NavLink className={navActive} to="/">
            Mailbox
          </NavLink>
          <NavLink className={navActive} to="/customers">
            Customers
          </NavLink>
          <NavLink className={navActive} to="/reporting">
            Reporting
          </NavLink>
          <NavLink className={navActive} to="/manage">
            Manage
          </NavLink>
        </nav>
        {/* //Mobile Menu */}
        <nav className="flex h-10 w-10 items-center justify-center rounded-full text-3xl text-gray-200 hover:bg-gray-600 hover:text-gray-50 lg:hidden">
          <span>
            <BiMenu />
          </span>
        </nav>
        {/* Search and other Options */}
        <div className="flex items-center justify-start gap-1">
          <span className="relative ">
            <FiSearch className="absolute -inset-y-2 inset-x-4 text-gray-500" />
          </span>
          <input
            className="mr-2 rounded-lg bg-gray-900 py-2 pl-9 pr-4 text-sm text-white outline-none placeholder:text-gray-400 focus:bg-gray-100 focus:text-gray-800 "
            placeholder="Search"
          />
          <button className="rounded-full p-2 text-gray-300 hover:bg-gray-600 hover:text-gray-50">
            <TbBell className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 text-gray-300 hover:bg-gray-600 hover:text-gray-50">
            <AiOutlineQuestionCircle className="h-5 w-5  fill-current" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
