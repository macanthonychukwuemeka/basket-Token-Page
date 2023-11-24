import { details } from "../../data";

const CartItems = () => {
  return (
    <div>
      {details.map((detail) => {
        const { id, title, images, totalToken } = detail;
        console.log(detail);
        return (
          <div
            key={id}
            className=" bg-notifyBg rounded-[25px] w-[382px] h-[260px] py-7 px-5 flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(22, 22, 29, 0.6), rgba(59, 61, 73, 0.05))",
            }}
          >
            {detail.title}
            <div className="flex justify-between items-center gap-1">
              <span className="text-xl text-gray-100 font-proximaSemiBold tracking-[-0.56px]">
                {title}
              </span>
              <button data-state="closed" className="z-10">
                <div className="flex pl-4">
                  <div className="w-[40px] h-[40px] rounded-full bg-gray-109 -ml-4">
                    <div className="bg-gray-109 relative flex justify-center items-center rounded-full min-h-40 min-w-40 max-h-40 max-w-40">
                      <img
                        src="https://storage.googleapis.com/dexhunter-images/tokens/95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54.webp"
                        alt="95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54"
                        width="40"
                        height="40"
                        className="rounded-full  block max-w-40 max-h-40"
                      ></img>
                    </div>
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full bg-gray-109 -ml-4">
                    <div className="bg-gray-109 relative flex justify-center items-center rounded-full min-h-40; min-w-40; max-h-40; max-w-40;">
                      <img
                        src="https://storage.googleapis.com/dexhunter-images/tokens/95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54.webp"
                        alt="533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459"
                        width="40"
                        height="40"
                        className="rounded-full block max-w-40 max-h-40"
                      ></img>{" "}
                    </div>
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full bg-gray-109 -ml-4">
                    <div className="bg-gray-109 relative flex justify-center items-center rounded-full min-w-40 min-h-40 max-w-40 max-h-40">
                      <img
                        src="https://storage.googleapis.com/dexhunter-images/tokens/95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54.webp"
                        alt="279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b"
                        width="40"
                        height="40"
                        className="rounded-full block max-w-40p max-h-40"
                      ></img>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="flex h-[5px] rounded-[4px] mb-[18px] text-gray-400">
              <div className="h-full text-center pt-[6px] rounded-l-[4px] bg-rgb-82-223-255 w-5000 ">
                <span className="uppercase font-proximaSemiBold text-[10px]">
                  HUNT
                </span>
              </div>
              <div className="h-full text-center pt-[6px] bg-rgb(12,61, 185) w-3000 ">
                <span className="uppercase font-proximaSemiBold text-[10px]">
                  INDY
                </span>
              </div>
              <div className="h-full text-center pt-[6px]  rounded-r-[4px] bg-rgb(155,89,182) w-20000">
                <span className="uppercase font-proximaSemiBold text-[10px]">
                  SNEK
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-gray-400 font-proximaSemiBold text-sm leading-none pb-[5px]">
                  Your Balance
                </div>
                <div className="font-proximaRegular text-white text-xl leading-none">
                  0 ADA
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 font-sans-serif text-sm leading-none pb-[5px]">
                  Total tokens
                </div>
                <div className="font-proximaRegular text-white text-xl leading-none">
                  3
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[5px]"></div>
              <div className="flex gap-[5px]">
                <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-destructive/90 px-4 py-2 rounded-[11px] h-10 bg-blue-600 w-[100px] text-gray-200 font-proximaSemiBold text-xs leading-none">
                  BUY
                </button>
                <button className="inline-flex items-center justify-center font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-500 hover:text-accent-foreground px-4 py-2 w-[100px] h-10 rounded-[11px] border-blue-101 border-2 bg-notifyBg backdrop-blur-[13.591408729553223px text-gray-200 font-proximaSemiBold text-xs leading-none">
                  SELL
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
