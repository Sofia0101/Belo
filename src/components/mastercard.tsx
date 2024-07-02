import Image from "next/image";
import Belocard from "../../public/img/belocard.png";
import Googleplay from "../../public/img/googleplay.png";
import Appstore from "../../public/img/appstore.png";
import Qrcode from "../../public/img/qr.png";

export default function Mastercard() {
  return (
    <div className="flex flex-col items-center bg-[#2F007D] full-bg_other md:flex-row md:pt-20 md:pb-20">
      <div className="flex flex-col flex-1 px-14 mb-7 md:items-center">
        <Image height={1024} width={1024} alt="belocard" src={Belocard} />
      </div>
      <div className="flex flex-col items-center flex-1 px-4 md:px-10 text-center">
        <div className="font-normal text-white md:text-right">
          <h2 className="font-medium text-[26px] leading-[29px] md:text-[40px] md:leading-[47px]">
            Pedí tu belo Mastercard® gratis
          </h2>
          <p className="text-sm mt-1.5 md:text-[20px] md:leading-[23px]">
            Llega a donde vos quieras en 3 días*
          </p>
          <p className="font-light text-[7px] leading-[8px] mt-2.5 md:text-xs">
            *El plazo de la entrega es estimativo
          </p>
        </div>

        <div className="hidden md:flex md:justify-end md:w-full md:mt-2">
            <div className="bg-[#4E0AB4] w-[262px] h-[115px] flex items-center justify-en rounded-xl pt-2.5 pb-2.5 ">
              <div className="flex flex-col gap-y-2 items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.belo.android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Googleplay}
                    alt="google-play"
                    width={105}
                    height={35}
                    className="max-w-full align-middle block"
                  />
                </a>
                <a
                  href="https://apps.apple.com/co/app/belo-tu-pasaporte-financiero/id1575614708"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src={Appstore}
                    alt="app-store"
                    loading="lazy"
                    width={105}
                    height={35}
                    className="max-w-full align-middle block"
                  />
                </a>
              </div>

              <div className="flex flex-col gap-y-2 items-center">
                <div className="box-border border-solid border-0 block">
                  <Image
                    src={Qrcode}
                    alt="qr"
                    width={85}
                    height={85}
                    loading="lazy"
                    decoding="async"
                    className=""
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    

      <div className="w-full px-4 md:hidden my-8">
        <a
          href="https://app.adjust.com/11d2v0px?label=https://simple.belo.app/app/referral"
          className="w-full undefined"
        >
          <button
            className="w-[100%] md:w-[350px] rounded-xl border-[1px] border-opacity-[1] bg-[#00ffa8] border-black  pt-3 pb-3 text-sm leading-5 font-bold text-black transform-none cursor-pointer 
       "
          >
            Pedí tu tarjeta gratis
          </button>
        </a>
      </div>
    </div>
  );
}
