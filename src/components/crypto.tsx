import Image from "next/image";
import Belotag from "../../public/img/belotag.png";

export default function Crypto() {
  return (
    <div className="flex pt-16 pb-16 px-4 lg:px-0 bg-[#4400AB] full-bg_primary flex-col-reverse md:flex-row md:justify-around">
      <div className="my-auto md:flex-row-reverse">
        <div className="flex items-center">
          <div className="font-normal text-white text-xl text-center md:text-left">
            <h2 className="font-medium text-[25px] leading-[29px] px-5 md:text-[40px] md:leading-[47px] md:px-0 md:w-[290px]">
              Rendimientos en tus monedas en tiempo real
            </h2>
            <p className="text-sm my-4 md:text-xl md:my-6 md:w-[429px]">
              Las criptomonedas en tu cuenta generan rendimientos de forma
              automática, en todo momento
            </p>
            <div className="mt-8 mb-4">
              <a href="" className="w-full md:w-auto">
                <button
                  className="w-[100%] md:w-[350px] rounded-xl border-[1px] border-opacity-[1] border-white bg-transparent pt-3 pb-3 text-sm leading-5 font-bold text-white transform-none cursor-pointer 
        hover:bg-opacity-100 hover:bg-white hover:text-opacity-1 hover:text-black"
                >
                  Conocé más sobre rendimientos
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex z-10 mb-16 md:mb-0 ">
        <Image src={Belotag} width={372} height={372} alt="Belotag" />
      </div>
    </div>
  );
}
