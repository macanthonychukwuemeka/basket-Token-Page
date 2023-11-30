const Navbar = () => {
  return (
    <>
      {/* <div
        className="px-4 md:px-6 py-2 backdrop-blur-[13.5px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600"
        // style={{
        //   background: "linear-gradient(to right, #16161D9A, #3B3D4980)",
        // }}
      >
        <div className="flex flex-wrap items-center mx-auto">
          <div className="flex-1 text-base text-white md:pr-[60px] lg:pr-[60px]">
            <a className="ml-16 mr-3 sm:ml-0 flex items-center" href="/trends">
              <img
                alt="DexHunter Logo"
                loading="lazy"
                width="21"
                height="26"
                decoding="async"
                data-nimg="1"
                className="h-[26px] w-[21px] hidden sm:block sm:mr-2"
                style={{ color: "transparent" }}
                src="https://storage.googleapis.com/dexhunter-images/public/logo.svg"
              ></img>
              <span className="font-abcBold">Dex</span>
              <span className="font-abcLight">Hunter</span>
            </a>
          </div>
          <div className="md:justify-start sm:hidden md:ml-[30px] flex-1 flex lg:justify-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-[20px] pointer-events-none">
                <img
                  alt="magnifier"
                  loading="lazy"
                  width="14"
                  height="14"
                  decoding="async"
                  data-nimg="1"
                  className="top-3 text-white"
                  style={{ color: "transparent" }}
                  src="https://storage.googleapis.com/dexhunter-images/public/magnifier.svg"
                />
              </div>

              <input
                type="search"
                className="border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-[490px] sm:w-[490px] md:w-[280px] h-10 p-4 pl-[45px] text-sm text-gray-900 border-none rounded-xl bg-[#2C2F3780] focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-102 placeholder-shown:text-sm font-proximaMedium"
                id="default-search"
                placeholder="Search tokens"
              />

              <div className="absolute top-[11px] right-[20px] w-[18px] h-[18px] flex justify-center items-center pointer-events-none bg-gray-104 md:bg-gray-111 rounded-[3px]">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 6 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[6px] text-gray-102"
                >
                  <path
                    d="M1.89017 8L6 0H4.10983L0 8H1.89017Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-center gap-3 sm:gap-1 lg:order-2">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:Rb6ja:"
              data-state="closed"
            >
              <div
                className="sm:hidden flex items-center justify-between gap-2 p-2 cursor-pointer rounded-xl border-2 border-solid border-blue-500 md:hidden h-[40px]"
                style={{ boxShadow: "0px 0px 4px 0px #007DFF" }}
              >
                <img
                  alt="Coin Logo"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  className="h-[28px] w-[28px] rounded-full"
                  style={{ color: "transparent" }}
                  src="https://storage.googleapis.com/dexhunter-images/public/hunt-token.svg"
                />

                <span className="text-sm text-white font-proximaSemiBold text-center hover:text-gray-300 transition-all duration-100 leading-none">
                  0
                </span>
              </div>
            </button>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:Rj6ja:"
              data-state="closed"
            >
              <button className="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 sm:hidden shadow rounded-xl bg-blue-101 w-[230px] hover:bg-blue-600 transition-colors duration-200 ease-in-out text-white font-proximaMedium text-xl">
                <span className="text-md font-proximaMedium text-center">
                  Connect Wallet
                </span>
              </button>
            </button>
            <div className="sm:hidden">
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:Rr6ja:"
                data-state="closed"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-106 p-1.5 flex justify-center items-center">
                  <img
                    alt=""
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://storage.googleapis.com/dexhunter-images/public/settings-icon.svg"
                  ></img>
                </div>
              </button>
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:R136ja:"
                data-state="closed"
              >
                <div className="flex w-10 h-10 rounded-xl bg-gray-106 p-1.5 justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 12"
                    fill="none"
                  >
                    <rect
                      width="16"
                      height="1.5"
                      rx="0.75"
                      fill="currentColor"
                    ></rect>
                    <rect
                      y="5"
                      width="16"
                      height="1.5"
                      rx="0.75"
                      fill="currentColor"
                    ></rect>
                    <rect
                      y="10"
                      width="16"
                      height="1.5"
                      rx="0.75"
                      fill="currentColor"
                    ></rect>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          ></div>
        </div>
      </div> */}
    </>
  );
};
export default Navbar;
