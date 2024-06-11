import Image from "next/image";
import Logo from "../../public/img/logo.png";

export default function Nav() {
  return (
    <nav className="fixed top-0 z-10 mx-auto w-screen bg-[#6E00FF] px-4">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 md:py-0">
        <a className="flex items-center" href="/">
          <Image width={66} height={32} src={Logo} alt="logo" />
        </a>

        <button>
          <svg
            className="w-6 h-6 text-[#00FFB1]"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"><path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>

        <div
          className="hidden absolute top-0 right-0 w-[267px] shadow-2xl px-6 py-6 z-20 bg-[#6E00FF]
          md:py-0 md:bg-none md:static md:w-fit md:flex md:shadow-none"
        >
          <div className="flex justify-between items-center">
            <img
              src="/images/b2b/logo-business.png"
              className="md:hidden w-10 h-[14px]"
              alt="Belo Logo Mobile"
            />
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                className="self-end"
              >
                <path
                  d="M27.4461 15.3668C27.5685 15.2487 27.6662 15.1074 27.7334 14.9511C27.8006 14.7948 27.836 14.6267 27.8376 14.4566C27.8392 14.2864 27.8068 14.1177 27.7425 13.9602C27.6781 13.8027 27.5831 13.6596 27.4628 13.5393C27.3426 13.4189 27.1996 13.3237 27.0421 13.2592C26.8847 13.1947 26.716 13.1622 26.5459 13.1636C26.3758 13.165 26.2076 13.2003 26.0513 13.2673C25.8949 13.3344 25.7535 13.432 25.6352 13.5543L20.5 18.6878L15.3665 13.5543C15.2492 13.4284 15.1077 13.3274 14.9505 13.2574C14.7934 13.1874 14.6237 13.1497 14.4517 13.1467C14.2796 13.1436 14.1088 13.1753 13.9492 13.2397C13.7897 13.3042 13.6448 13.4001 13.5231 13.5218C13.4014 13.6434 13.3055 13.7883 13.2411 13.9479C13.1766 14.1074 13.145 14.2783 13.148 14.4503C13.1511 14.6224 13.1887 14.792 13.2587 14.9492C13.3288 15.1064 13.4297 15.2478 13.5556 15.3651L18.6857 20.5004L13.5522 25.6339C13.3259 25.8768 13.2027 26.198 13.2085 26.53C13.2144 26.8619 13.3489 27.1786 13.5836 27.4133C13.8183 27.6481 14.135 27.7826 14.467 27.7884C14.7989 27.7943 15.1202 27.6711 15.363 27.4447L20.5 22.3112L25.6335 27.4464C25.8764 27.6728 26.1977 27.796 26.5296 27.7901C26.8615 27.7843 27.1782 27.6498 27.413 27.4151C27.6477 27.1803 27.7822 26.8636 27.788 26.5317C27.7939 26.1997 27.6707 25.8785 27.4444 25.6356L22.3142 20.5004L27.4461 15.3668Z"
                  fill="#00FFB1"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="font-normal flex flex-col py-8 mt-2 gap-y-4 text-white text-sm md:flex-row md:space-x-20 md:mt-0 md:py-3 md:items-center">
            <li className="hidden relative group md:flex">
              <button className="font-normal hover:font-bold">
                ¿Por qué belo?
              </button>

              <div className="w-40 absolute z-10 -top-10 -left-6 hidden bg-gradient-to-t from-[#5806D1] to-[#5100D8] py-8 px-5 mt-2 group-hover:flex group-hover:flex-col group-hover:gap-y-4 text-white">
                <span className="font-bold t v8 uext-sm cursor-default">
                  ¿Por qué belo?
                </span>
                <a href="/">Conocé Belo</a>
                <a href="/">Tarjeta</a>

                <a href="/">Cobros del exterior</a>

                <a href="/">Monedas</a>

                <a href="/">Pago de servicios</a>
              </div>
            </li>

            <li className="md:hidden flex flex-col gap-y-4">
              <span className="font-bold">¿Por qué belo?</span>
              <a href="/">Conocé Belo</a>
              <a href="/">Tarjeta</a>

              <a href="/">Cobros del exterior</a>

              <a href="/">Monedas</a>

              <a href="/">Pago de servicios</a>
            </li>
            <div className="border-[#00FFB1] css-18n1hfv e11fa55l0"></div>
            <a href="#">Empresas</a>
            <li className="md:hidden">
              <div className="border-[#00FFB1] css-18n1hfv e11fa55l0"></div>
            </li>

            <li>
              <a href="" className="font-bold md:font-normal">
                Ayuda
              </a>
            </li>
            <li className="hidden md:block">
              <button type="button" className="block w-full rounded-lg border border-solid border-opacity-100 border-black bg-opacity-100 bg-[#00ffa8] pl-6 pr-6 pb-2.5 pt-2.5 text-[0.875rem] leading-5 font-bold text-opacity-100	text-black cursor-pointer">
                Descargá la app
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
