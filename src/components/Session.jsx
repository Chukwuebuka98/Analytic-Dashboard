import Order from "./Session/Order";
import TopPlatforms from "./Session/TopPlatforms";

const Session = () => {
  return (
    <div className="ml-[60px] md:ml-[65px] lg:ml-[75px] p-4 grid lg:grid-cols-5 grid-cols-1 gap-4">
      <Order />
      <TopPlatforms />
    </div>
  );
};

export default Session;
