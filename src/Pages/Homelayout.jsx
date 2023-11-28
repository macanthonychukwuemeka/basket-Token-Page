import Navbar from "../Navbar";
import BasketPage from "./BasketPage";
import SwapPage from "./SwapPage";

const Homelayout = () => {
  return (
    <div className=" bg-black text-primary-foreground relative overflow-y-auto overflow-x-hidden">
      <div className="sm:hidden fixed;z-index:-1;left:-10px">
        <img
          src="https://storage.googleapis.com/dexhunter-images/public/test_bg_left.svg"
          alt="left_bg"
        ></img>
      </div>
      <Navbar />
      <SwapPage />
      <BasketPage />
    </div>
  );
};

export default Homelayout;
