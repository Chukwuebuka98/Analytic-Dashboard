import { useSelector } from "react-redux";
import { selectDarkMode } from "../../store/themeSlice";
import printIcon from "../../assets/document-download.png";
import orderImages from "../../assets/orderImages";

const OrderItem = ({ name, image, date, amount, status }) => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`grid grid-cols-4 md:grid-cols-6 text-gray-500 text-sm gap-4 items-center p-2  ${
        darkMode ? "border-t border-slate-700" : "border-t"
      } `}
    >
      <div className="md:col-span-2 flex items-center gap-2 py-4">
        <img className="hidden md:flex" src={image} alt={name} />
        <p className="font-bold">{name}</p>
      </div>
      <span className="hidden md:flex">{date}</span>
      <span className="font-bold">{amount}</span>
      <span className={`${status.color}`}>{status.text}</span>
      <div className="flex items-center gap-1 cursor-pointer">
        <img className="h-[15px]" src={printIcon} alt="Print" />
        <span className="text-xs">View</span>
      </div>
    </div>
  );
};

const Order = () => {
  const darkMode = useSelector(selectDarkMode);
  const orders = [
    {
      name: "Marcus Bergson",
      image: orderImages[0],
      date: "Nov 15 2023",
      amount: "$80,000",
      status: { text: "Paid", color: "text-[#34CAA5]" },
    },
    {
      name: "Jaydon Vaccaro",
      image: orderImages[1],
      date: "Nov 15 2023",
      amount: "$150,000",
      status: { text: "Refund", color: "text-[#ED544E]" },
    },
    {
      name: "Corey Schleifer",
      image: orderImages[2],
      date: "Nov 14 2023",
      amount: "$87,000",
      status: { text: "Paid", color: "text-[#34CAA5]" },
    },
    {
      name: "Cooper Press",
      image: orderImages[3],
      date: "Nov 14 2023",
      amount: "$100,000",
      status: { text: "Refund", color: "text-[#ED544E]" },
    },
    {
      name: "Philip Lubin",
      image: orderImages[4],
      date: "Nov 13 2023",
      amount: "$78,000",
      status: { text: "Paid", color: "text-[#34CAA5]" },
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "border-slate-700 bg-slate-700 bg-opacity-15" : "bg-white"
      } lg:col-span-3 col-span-5 p-4 border rounded-lg flex flex-col gap-4 animate-fade-in`}
    >
      <div className="flex justify-between ">
        <h2 className="font-bold">Last Order</h2>
        <span className="text-[#34CAA5] cursor-pointer">See All</span>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 text-gray-500 text-sm gap-4">
        <span className="md:col-span-2">Name</span>
        <span className="hidden md:flex">Date</span>
        <span>Amount</span>
        <span>Status</span>
        <span>Invoice</span>
      </div>

      <div className="flex flex-col overflow-y-scroll scroll-smooth h-[40vh] p-1 custom-scrollbar">
        {orders.map((order, index) => (
          <OrderItem key={index} {...order} />
        ))}
      </div>
    </div>
  );
};

export default Order;
