import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../store/themeSlice";

const TopPlatforms = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`${
        darkMode ? "border-slate-700 bg-slate-700 bg-opacity-15" : "bg-white"
      } col-span-5 lg:col-span-2 p-4 border rounded animate-fade-in`}
    >
      <div className="flex justify-between pb-4">
        <h2 className="font-bold">Top Platform</h2>
        <span className="text-[#34CAA5] cursor-pointer">See All</span>
      </div>

      <div className="flex flex-col overflow-y-scroll scroll-smooth h-[45vh] py-4 gap-4 custom-scrollbar">
        {platforms.map((platform, index) => (
          <div
            key={platform.name}
            className={`flex flex-col gap-2 relative max-w-[98%] animate-fade-in-up delay-${
              index + 1
            }`}
          >
            <h2 className="font-bold">{platform.name}</h2>

            <div className="animation h-2 rounded-3xl  bg-gray-200 group">
              <span
                style={{ width: `${platform.progress}%` }}
                className={`skill-per relative block h-[100%] rounded-3xl ${platform.color} group transition-all`}
              >
                <span
                  className={`tooltip hidden group-hover:flex absolute right-[-14px] top-[-28px] text-xs font-medium text-white py-[2px] px-[6px] rounded-sm ${platform.color} z-10 before:content-[''] before:absolute before:left-[50%] before:bottom-[-2px] before:h-[10px] before:w-[10px] before:-z-10 before:${platform.color} before:translate-x-[-50%] before:rotate-45 transition-opacity ease-in-out duration-300`}
                >
                  {platform.progress}%
                </span>
              </span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>{platform.amount}</span>
              <span>{platform.growth}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const platforms = [
  {
    name: "Book Bazzar",
    progress: 50,
    amount: "$2,500,000",
    growth: "+15%",
    color: "bg-[#6160DC]",
  },
  {
    name: "Artisan Aisle",
    progress: 45,
    amount: "$1,800,000",
    growth: "+10%",
    color: "bg-[#54C5EB]",
  },
  {
    name: "Toy Troop",
    progress: 35,
    amount: "$1,200,000",
    growth: "+8%",
    color: "bg-[#FFB74A]",
  },
  {
    name: "XStore",
    progress: 20,
    amount: "$600,000",
    growth: "+5%",
    color: "bg-[#FF4A55]",
  },
];

export default TopPlatforms;
