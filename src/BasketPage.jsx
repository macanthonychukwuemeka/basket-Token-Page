import CartItems from "./components/CartItems";

const BasketPage = () => {
  return (
    <>
      <div className=" overflow-auto sm:pb-[65px] md:ml-[60px] lg:ml-[60px]">
        <div className="px-2.5 lg:px-10 mx-auto pb-20 sm:pb-0 mt-10 w-full">
          <div className="max-w-[1166px] mx-auto">
            <div className="mb-[50px]">
              <div className="flex justify-between items-center px-7.5 mb-4">
                <span className="font-abcBold text-white text-xl leading-none">
                  Featured Baskets
                </span>
                <div>
                  <button
                    className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-destructive/90 px-4 py-2 rounded-[11px] h-10 bg-blue-500 w-[151px] text-gray-101 font-proximaSemiBold text-xs leading-none"
                    disabled
                  >
                    CREATE BASKET
                  </button>
                </div>
              </div>
              <div className="gap-[10px] flex flex-wrap">
                {/* *** FIRST CARD *** */}
                <CartItems />
                {/* ***SECOND CARD*** */}
                <div
                  className=" bg-notifyBg rounded-[25px] w-[382px] h-[260px] py-7 px-5 flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(to bottom right, rgba(22, 22, 29, 0.6), rgba(59, 61, 73, 0.05))",
                  }}
                >
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-xl text-gray-100 font-proximaSemiBold tracking-[-0.56px]">
                      Mix of Everything
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
                              className="rounded-full block max-w-40 max-h-40"
                            ></img>
                          </div>
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-109 -ml-4">
                          <div className="bg-gray-109 relative flex justify-center items-center rounded-full min-h-40 min-w-40 max-h-40 max-w-40">
                            <img
                              src="https://storage.googleapis.com/dexhunter-images/tokens/25f0fc240e91bd95dcdaebd2ba7713fc5168ac77234a3d79449fc20c534f4349455459.webp"
                              alt="25f0fc240e91bd95dcdaebd2ba7713fc5168ac77234a3d79449fc20c534f4349455459"
                              width="40"
                              height="40"
                              className="rounded-full block max-w-40 max-h-40"
                            ></img>
                          </div>
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-109 -ml-4">
                          <div className="bg-gray-109 relative flex justify-center items-center rounded-full  min-h-40 min-w-40 max-w-40 max-h-40">
                            <img
                              src="https://storage.googleapis.com/dexhunter-images/tokens/5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114494147.webp"
                              alt="5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114494147"
                              width="40"
                              height="40"
                              className="rounded-full block max-w-40 max-h-40"
                            ></img>
                          </div>
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-500 -ml-4 flex justify-center items-center z-10">
                          <span className="font-proximaRegular text-sm leading-none text-gray-100">
                            +2
                          </span>
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
                        5
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
                {/* ***THIRD CARD*** */}
                <div
                  className=" bg-notifyBg rounded-[25px] w-[382px] h-[260px] py-7 px-5 flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(to bottom right, rgba(22, 22, 29, 0.6), rgba(59, 61, 73, 0.05))",
                  }}
                >
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-xl text-gray-100 font-proximaSemiBold tracking-[-0.56px]">
                      Infrastructure Basket
                    </span>
                    <button className="z-10">
                      <div className="flex pl-4">
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-109 -ml-4">
                          <div className="bg-gray-109 relative flex justify-center items-center rounded-full min-w-40 mix-w-40 min-h-40 max-h-40">
                            <img
                              src="https://storage.googleapis.com/dexhunter-images/tokens/1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e776f726c646d6f62696c65746f6b656e.webp"
                              alt="1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e776f726c646d6f62696c65746f6b656e"
                              width="40"
                              height="40"
                              className="rounded-full block max-w-40 max-h-40"
                            ></img>
                          </div>
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-109 -ml-4">
                          <div className="bg-gray-109 relative flex justify-center items-center rounded-full min-w-40 max-w-40 min-h-40 max-h-40">
                            <img
                              src="https://storage.googleapis.com/dexhunter-images/tokens/5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114494147.webp"
                              alt="5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114494147"
                              width="40"
                              height="40"
                              className="rounded-full block max-w-40 max-h-40 "
                            ></img>
                          </div>
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-109 -ml-4">
                          <div className="bg-gray-109 relative flex justify-center items-center rounded-full  min-w-40 mix-w-40 min-h-40 max-h-40">
                            <img
                              src="https://storage.googleapis.com/dexhunter-images/tokens/edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e993444794e5458.webp"
                              alt="edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e993444794e5458"
                              width="40"
                              height="40"
                              className="rounded-full block max-w-40 max-h-40"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex h-[5px] rounded-[4px] mb-[18px] text-gray-400">
                    <div className="h-full text-center pt-[6px] rounded-l-[4px] bg-rgb-82-223-255 w-5000 ">
                      <span className="uppercase font-proximaSemiBold text-[10px]">
                        WMT
                      </span>
                    </div>
                    <div className="h-full text-center pt-[6px] bg-rgb(12,61, 185) w-3000 ">
                      <span className="uppercase font-proximaSemiBold text-[10px]">
                        IAG
                      </span>
                    </div>
                    <div className="h-full text-center pt-[6px]  rounded-r-[4px] bg-rgb(155,89,182) w-20000">
                      <span className="uppercase font-proximaSemiBold text-[10px]">
                        NTX
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

                <div className="mb-[40px]">
                  <div className="px-7 py-5 mb-10">
                    <span className="font-abcBold text-white text-xl leading-none">
                      My Baskets
                    </span>
                  </div>
                  <div className="gap-[10px] flex flex-wrap">
                    <div className="bg-[#0d0d12] rounded-[25px] w-[382px] h-[260px] px-7 py-5 flex flex-col justify-between">
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-2xl text-gray-101 font-proximaSemiBold tracking-[-0.56px]">
                          <div className="animate-pulse rounded-md p-2 h-8 w-40 bg-[#414853]"></div>
                        </span>
                        <div className="flex pl-4">
                          <div className="animate-pulse rounded-full h-10 w-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-full h-10 w-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-full h-10 w-10 bg-[#414853]"></div>
                        </div>
                      </div>
                      <div className="flex h-[5px] rounded-[4px] mb-[18px] text-gray-101">
                        <div className="animate-pulse rounded-md w-full h-[6px] bg-[#414853]"></div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-gray-103 font-proximaSemiBold text-sm leading-none pb-[5px]">
                            <div className="animate-pulse rounded-md w-24 h-[14px] bg-[#414853]"></div>
                          </div>
                          <div className="font-proximaRegular text-white text-xl leading-none">
                            <div className="animate-pulse rounded-md w-32 h-5 bg-[#414853]"></div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-gray-103 font-proximaSemiBold text-sm leading-none pb-[5px]">
                            <div className="animate-pulse rounded-md w-20 h-[14px] bg-[#414853] float-right"></div>
                          </div>
                          <div className="font-proximaRegular text-white text-xl leading-none">
                            <div className="animate-pulse rounded-md w-24 h-5 bg-[#414853]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-[5px]">
                          <div className="animate-pulse rounded-md w-10 h-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-md w-10 h-10 bg-[#414853]"></div>
                        </div>
                        <div className="flex gap-[5px]">
                          <div className="animate-pulse rounded-md w-[100px] h-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-md w-[100px] h-10 bg-[#414853]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#0d0d12] rounded-[25px] w-[382px] h-[260px] px-7 py-5 flex flex-col justify-between">
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-2xl text-gray-101 font-proximaSemiBold tracking-[-0.56px]">
                          <div className="animate-pulse rounded-md p-2 h-8 w-40 bg-[#414853]"></div>
                        </span>
                        <div className="flex pl-4">
                          <div className="animate-pulse rounded-full h-10 w-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-full h-10 w-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-full h-10 w-10 bg-[#414853]"></div>
                        </div>
                      </div>
                      <div className="flex h-[5px] rounded-[4px] mb-[18px] text-gray-101">
                        <div className="animate-pulse rounded-md w-full h-[6px] bg-[#414853]"></div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-gray-103 font-proximaSemiBold text-sm leading-none pb-[5px]">
                            <div className="animate-pulse rounded-md w-24 h-[14px] bg-[#414853]"></div>
                          </div>
                          <div className="font-proximaRegular text-white text-xl leading-none">
                            <div className="animate-pulse rounded-md w-32 h-5 bg-[#414853]"></div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-gray-103 font-proximaSemiBold text-sm leading-none pb-[5px]">
                            <div className="animate-pulse rounded-md w-20 h-[14px] bg-[#414853] float-right"></div>
                          </div>
                          <div className="font-proximaRegular text-white text-xl leading-none">
                            <div className="animate-pulse rounded-md w-24 h-5 bg-[#414853]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-[5px]">
                          <div className="animate-pulse rounded-md w-10 h-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-md w-10 h-10 bg-[#414853]"></div>
                        </div>
                        <div className="flex gap-[5px]">
                          <div className="animate-pulse rounded-md w-[100px] h-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-md w-[100px] h-10 bg-[#414853]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#0d0d12] rounded-[25px] w-[382px] h-[260px] px-7 py-5 flex flex-col justify-between">
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-2xl text-gray-101 font-proximaSemiBold tracking-[-0.56px]">
                          <div className="animate-pulse rounded-md p-2 h-8 w-40 bg-[#414853]"></div>
                        </span>
                        <div className="flex pl-4">
                          <div className="animate-pulse rounded-full h-10 w-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-full h-10 w-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-full h-10 w-10 bg-[#414853]"></div>
                        </div>
                      </div>
                      <div className="flex h-[5px] rounded-[4px] mb-[18px] text-gray-101">
                        <div className="animate-pulse rounded-md w-full h-[6px] bg-[#414853]"></div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-gray-103 font-proximaSemiBold text-sm leading-none pb-[5px]">
                            <div className="animate-pulse rounded-md w-24 h-[14px] bg-[#414853]"></div>
                          </div>
                          <div className="font-proximaRegular text-white text-xl leading-none">
                            <div className="animate-pulse rounded-md w-32 h-5 bg-[#414853]"></div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-gray-103 font-proximaSemiBold text-sm leading-none pb-[5px]">
                            <div className="animate-pulse rounded-md w-20 h-[14px] bg-[#414853] float-right"></div>
                          </div>
                          <div className="font-proximaRegular text-white text-xl leading-none">
                            <div className="animate-pulse rounded-md w-24 h-5 bg-[#414853]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-[5px]">
                          <div className="animate-pulse rounded-md w-10 h-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-md w-10 h-10 bg-[#414853]"></div>
                        </div>
                        <div className="flex gap-[5px]">
                          <div className="animate-pulse rounded-md w-[100px] h-10 bg-[#414853]"></div>
                          <div className="animate-pulse rounded-md w-[100px] h-10 bg-[#414853]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BasketPage;
