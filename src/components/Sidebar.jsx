import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "../store/themeSlice";
import { HiMiniBolt } from "react-icons/hi2";
import category from "../assets/category.png";
import { TbCategoryFilled } from "react-icons/tb";
import trendup from "../assets/trend-up.png";
import profile2user from "../assets/profile-2user.png";
import box from "../assets/box.png";
import discountShape from "../assets/discount-shape.png";
import infoCircle from "../assets/info-circle.png";
import brightness from "../assets/brightness 1.png";
import moon from "../assets/moon 1.png";
import arrowIcon from "../assets/arrow-right.png";
import settingsIcon from "../assets/setting-2.png";
import logoutIcon from "../assets/logout.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div
      className={`fixed w-[4.5rem] lg:w-20 h-screen p-4 ${
        darkMode ? "border-slate-800" : ""
      } border-r-[1px]  flex flex-col justify-between `}
    >
      <div className="flex flex-col items-center">
        <div
          className={`${
            darkMode
              ? "bg-[#dcdcdc] text-gray-900 hover:bg-gray-200"
              : "bg-[#34CAA5] hover:bg-[#2db694]"
          }  text-white p-2 rounded-3xl inline-block cursor-pointer  duration-500`}
        >
          <HiMiniBolt color={`${darkMode ? "rgb(17 24 39)" : ""}`} size={25} />
        </div>
        <div className="p-2 rounded-3xl inline-block cursor-pointer mt-3 mb-2 duration-500">
          {darkMode ? (
            <TbCategoryFilled color="gray" size={25} />
          ) : (
            <img src={category} />
          )}
        </div>
        <div className="p-2 rounded-3xl inline-block cursor-pointer mb-2 duration-500">
          <img src={trendup} />
        </div>
        <div className="p-2 rounded-3xl inline-block cursor-pointer mb-2 duration-500">
          <img src={profile2user} />
        </div>
        <div className="p-2 rounded-3xl inline-block cursor-pointer mb-2 duration-500">
          <img src={box} />
        </div>
        <div className="p-2 rounded-3xl inline-block cursor-pointer mb-2 duration-500">
          <img src={discountShape} />
        </div>
        <div className="p-2 rounded-3xl inline-block cursor-pointer mb-2 duration-500">
          <img src={infoCircle} />
        </div>

        {/* Theme */}
        <button
          className={`flex flex-col items-center ${
            darkMode ? "bg-slate-950" : "bg-white"
          }  py-2 px-1 rounded-3xl`}
          onClick={handleToggle}
        >
          <div
            className={`p-2 rounded-3xl inline-block cursor-pointer mb-2 ${
              !darkMode ? "bg-[#2db694]" : ""
            }`}
          >
            <img src={brightness} alt="brightness image" />
          </div>
          <div
            className={`p-1 lg:p-2 rounded-3xl inline-block cursor-pointer mb-2 duration-200 ${
              !darkMode ? "" : "bg-[#f2f1f1]"
            }`}
          >
            <img src={moon} alt="moon-image" />
          </div>
        </button>
      </div>

      <div>
        <div className="p-2 rounded-3xl inline-block cursor-pointer mb-2 duration-500">
          <img src={arrowIcon} />
        </div>
        <div className="p-2 rounded-3xl inline-block cursor-pointer mb-2 duration-500">
          <img src={settingsIcon} />
        </div>
        <div className="p-2 rounded-3xl inline-block cursor-pointer mb-2 duration-500">
          <img src={logoutIcon} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
