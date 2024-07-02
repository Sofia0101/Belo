import BitCell from "../../public/img/bitrefill-mobile.png";
import Bitlogo from "../../public/img/belo-bitrefill.png";
import Image from "next/image";

export default function Bitrefill() {
  return (
    <div className="1 flex flex-col py-14 bg-[#0E1E4A] full-bg_bitrefill md:flex-row md:items-center md:justify-center md:gap-x-[88px]">
      <div className="2 flex flex-col">
        <div className="3 flex px-12 mb-8 md:px-0">
          <Image
            width={1128}
            height={1024}
            src={Bitlogo}
            alt="imagen belo y bitrefill"
            decoding="async"
            className="md:w-[341px] md:h-[62px]"
          />
        </div>

        <div className="4 text-white text-center font-medium text-[26px] leading-[29px] px-8 mb-9 md:text-left md:px-0 md:w-[345px] md:mb-0">
          <h2>Usá tus criptomonedas</h2>
          <h2 className="text-[#00FFB2]">
            con privacidad y sin restricciones 😉
          </h2>

          <div className="5 hidden px-4 mt-10 md:block md:px-0">
            <a
              href="https://esbiensimple.com/tiendasvirtuales"
              className="w-full md:w-auto"
            >
              <button
                className="w-[100%] md:w-[350px] rounded-xl border-[1px] border-opacity-[1] border-white bg-transparent pt-3 pb-3 text-sm leading-5 font-bold text-white transform-none cursor-pointer 
        hover:bg-opacity-100 hover:bg-white hover:text-opacity-1 hover:text-black"
              >
                Conocé más sobre tiendas virtuales
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="6 flex px-4 md:basis-[385px] md:px-0">
        <Image
          width={1128}
          height={1024}
          className="hidden md:block md:h-[333px] md:w-[385px]"
          alt="view bitrefill mobile"
          src={BitCell}
        />
      </div>

      <div className="7 px-4 mt-10 md:px-0 md:hidden">
        <a
          href="https://esbiensimple.com/tiendasvirtuales"
          className="w-full md:w-auto"
        >
          <button
            className="w-[100%] md:w-[350px] rounded-xl border-[1px] border-opacity-[1] border-white bg-transparent pt-3 pb-3 text-sm leading-5 font-bold text-white transform-none cursor-pointer 
        hover:bg-opacity-100 hover:bg-white hover:text-opacity-1 hover:text-black"
          >
            Conocé más sobre tiendas virtuales
          </button>
        </a>
      </div>
    </div>
  );
}
