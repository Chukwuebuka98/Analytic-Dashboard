import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../store/themeSlice";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { IoIosArrowDown } from "react-icons/io";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = () => {
  const darkMode = useSelector(selectDarkMode);
  const [chatData, setChatData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  });

  useEffect(() => {
    setChatData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Sales $",
          data: [
            6000, 20000, 3500, 28000, 9000, 45000, 9000, 24000, 31000, 4000,
            30000, 26000, 50000,
          ],
          backgroundColor: (context) => {
            const gradient = context.chart.ctx.createLinearGradient(
              100,
              50,
              30,
              400
            );
            gradient.addColorStop(0, "rgba(52, 202, 165, 1)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            return gradient;
          },
          borderRadius: () => {
            const radius = 30;
            return radius;
          },
          borderWidth: 1,
        },
      ],
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        maintainAspectRatio: false,
        responsive: true,
      }));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={` ${
        darkMode ? "border-slate-700 bg-slate-700 bg-opacity-15" : "bg-white"
      } lg:col-span-3 w-full md:col-span-2 relative m-auto p-4 border rounded-lg`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Sales Trends</h2>
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold">Short by:</h2>
          <div
            className={`flex ${
              darkMode ? "border-slate-700" : ""
            } border rounded-3xl px-3 py-[0.3rem] items-center gap-1 cursor-pointer group`}
          >
            <p className="text-xs">Weekly</p>
            <div className="transition-transform transform group-hover:translate-y-[0.15rem] duration-500">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] lg:h-[40vh] ">
        <Bar data={chatData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Barchart;
