import Image from "next/image";
import Disc from "../../public/img/discounts.png";

export default function Discounts() {
  return (
    <div className="1 flex pt-16 pb-16 px-4 lg:px-0 bg-[#2F007D] full-bg_other flex-col-reverse md:flex-row md:justify-around">
      <div className="2 flex z-10 mb-16 md:mb-0">
        <Image src={Disc} className="w-[372px]" alt="belo-homepage-phone" />
      </div>
      <div className="3 my-auto md:flex-row-reverse w-[400px]">
        <div className="4 flex items-center">
          <div className="5 font-normal text-white text-xl text-center md:text-left">
            <h2
              className="font-title uppercase text-white text-shadow-sm md:text-shadow text-3xl md:text-4xl font-bold
    undefined"
            >
              Promociones, descuentos y más...
            </h2>
            <div className="6 mt-8 mb-4">
              <a
                href="https://esbiensimple.com/beneficios"
                className="w-full md:w-auto"
              >
                <button
                  className="w-[100%] md:w-[350px] rounded-xl border-[1px] border-opacity-[1] border-white bg-transparent pt-3 pb-3 text-sm leading-5 font-bold text-white transform-none cursor-pointer 
        hover:bg-opacity-100 hover:bg-white hover:text-opacity-1 hover:text-black"
                >
                  Ver promociones
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
