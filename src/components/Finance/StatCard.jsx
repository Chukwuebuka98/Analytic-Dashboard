import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../store/themeSlice";
import boxtickIcon from "../../assets/box-tick.png";
import rotate3d from "../../assets/3d-rotate.png";
import shoppingCart from "../../assets/shopping-cart.png";
import coinIcon from "../../assets/coin.png";
import areaChart1 from "../../assets/Group 3.png";
import tradingUp from "../../assets/trending-up.png";
import tradingDown from "../../assets/trending-up (1).png";
import areaChat2 from "../../assets/Group 3 (1).png";

const StatCard = ({ icon, title, value, color, changePercentage }) => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`flex flex-col gap-1 p-4 ${
        darkMode
          ? "border border-slate-700 bg-slate-700 bg-opacity-15"
          : "bg-white border"
      }  rounded lg:justify-center`}
    >
      <div className="flex justify-between">
        <div className={`border rounded-3xl p-2 bg-${color}`}>
          <img src={icon} alt={title} />
        </div>
        <img
          className="cursor-pointer"
          src={changePercentage > 0 ? areaChart1 : areaChat2}
          alt="Area chart"
        />
      </div>
      <span className="text-gray-400">{title}</span>
      <span className="font-bold text-xl text-gray-900">{value}</span>
      <div className="flex justify-between items-center text-xs gap-4">
        <div
          style={{
            background:
              changePercentage > 0
                ? "rgba(52, 202, 165, 0.12)"
                : "rgba(237, 84, 78, 0.12)",
            color: changePercentage > 0 ? "#34CAA5" : "#ED544E",
          }}
          className={`flex border text-${color} bg-opacity-50 rounded-3xl gap-2 items-center text-xs px-[5px]`}
        >
          <img
            src={changePercentage > 0 ? tradingUp : tradingDown}
            alt="Change icon"
          />
          <span>{changePercentage}%</span>
        </div>
        <span className="text-gray-400">vs. previous month</span>
      </div>
    </div>
  );
};

const RecentOrders = () => {
  const stats = [
    {
      icon: boxtickIcon,
      title: "Total Order",
      value: 350,
      color: "green",
      changePercentage: 25.5,
    },
    {
      icon: rotate3d,
      title: "Total Refund",
      value: 270,
      color: "red",
      changePercentage: -25.5,
    },
    {
      icon: shoppingCart,
      title: "Average Sales",
      value: 1567,
      color: "red",
      changePercentage: -25.5,
    },
    {
      icon: coinIcon,
      title: "Total Income",
      value: "$350,000",
      color: "green",
      changePercentage: 25.5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:col-span-2 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default RecentOrders;
