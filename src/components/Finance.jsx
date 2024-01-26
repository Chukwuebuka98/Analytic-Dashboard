import Barchart from "./Finance/Barchart";
import StatCard from "./Finance/StatCard";

const Finance = () => {
  return (
    <div className="ml-[60px] md:ml-[65px] lg:ml-[75px] p-4 grid lg:grid-cols-5 grid-cols-1 gap-4">
      <Barchart />
      <StatCard />
    </div>
  );
};

export default Finance;
