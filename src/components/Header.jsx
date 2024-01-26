import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/themeSlice";
import searchIcon from "../assets/Icon - Search.png";
import { FaTimes } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import userImage from "../assets/Rectangle 1061.png";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../App.css";

const UserDropdown = () => {
  const darkMode = useSelector(selectDarkMode);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative z-10 ">
      <div
        className={`${
          darkMode
            ? "lg:border lg:border-slate-700 hover:border-slate-400"
            : "lg:border hover:border-[#34CAA5]"
        } rounded-3xl flex items-center px-3 py-1 text-center cursor-pointer duration-500 group`}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <img src={userImage} alt="user image" className="max-h-8" />
        <div className="px-1 md:px-2">
          <h2 className="hidden md:flex text-xs lg:text-sm font-semibold ">
            Justin Bergson
          </h2>
          <p className="hidden md:flex text-xs text-[#787486]">
            Justin@gmail.com
          </p>
        </div>
        <div className="hidden lg:flex">
          <IoIosArrowDown />
        </div>
      </div>

      {isDropdownOpen && (
        <div
          className={`absolute md:left-0 right-5 md:right-0 mt-1 w-[12rem]   ${
            darkMode
              ? "bg-slate-950 border border-slate-700"
              : "bg-white border border-gray-200"
          }  rounded shadow-md text-sm`}
        >
          <div
            className={`p-2 ${
              darkMode ? "hover:bg-slate-400" : ""
            } hover:bg-[#34CAA5] hover:text-white duration-300`}
          >
            <div className="flex items-center gap-3">
              <FaRegUser /> <span>Profile</span>
            </div>
          </div>
          <div
            className={`p-2 ${
              darkMode ? "hover:bg-slate-400" : ""
            } hover:bg-[#34CAA5] hover:text-white duration-300`}
          >
            <div className="flex items-center gap-3">
              <MdOutlineSettings />
              <span>Settings</span>
            </div>
          </div>
          <div
            className={`p-2 ${
              darkMode ? "hover:bg-slate-400" : ""
            } hover:bg-[#34CAA5] hover:text-white duration-300`}
          >
            <div className="flex items-center gap-3">
              <IoMdLogOut color="red" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const darkMode = useSelector(selectDarkMode);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 100000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const clearSearchInput = () => {
    setSearchInput("");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="grid md:grid-cols-5 grid-cols-2 py-3 ml-[70px] lg:ml-[80px] w-full">
        <div className="flex w-full justify-between px-4 items-center md:col-span-3 col-span-1">
          <h2 className="font-bold lg:text-lg">Dashboard</h2>
          <form action="" className="hidden lg:flex">
            <div className="relative flex items-center focus-within:text-gray-600">
              <img
                src={searchIcon}
                className="absolute ml-3 pointer-events-none"
              />
              <input
                type="text"
                name="search"
                placeholder="Search..."
                aria-label="Search"
                autoComplete="off"
                value={searchInput}
                onChange={handleSearchInputChange}
                className={`pr-3 pl-10 py-2 font-semibold placeholder-gray-500 ${
                  darkMode
                    ? "bg-slate-950 text-white ring-slate-700 focus:ring-slate-700 "
                    : "text-black"
                }  rounded-3xl border-none ring-2  ring-gray-300 focus:ring-gray-300 focus:ring-2`}
              />
              {searchInput && (
                <FaTimes
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={clearSearchInput}
                />
              )}
            </div>
          </form>
        </div>

        <div className="flex justify-end lg:justify-between md:justify-around items-center md:col-span-2 col-span-1 px-4">
          <div className="flex justify-between items-center">
            <MdOutlineCalendarMonth
              size={30}
              className="max-h-5 hidden lg:flex mr-4"
            />

            <p className="hidden lg:flex font-semibold md:text-sm lg:text-[1rem] ">
              {formattedDate}
            </p>
          </div>
          <div
            className={`hidden lg:flex ${
              darkMode
                ? "border border-slate-700 hover:border-slate-400"
                : "border hover:border-[#34CAA5]"
            }   rounded-3xl p-2 cursor-pointer max-h-10 duration-500 ease-in-out group`}
          >
            <GoBell
              size={30}
              className="max-h-5 w-full h-full rounded-3xl shake-on-hover"
            />
          </div>

          <UserDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
