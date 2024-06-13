import Image from "next/image";
import Cell from "../../public/img/cell.png";
import Googleplay from "../../public/img/googleplay.png";
import Appstore from "../../public/img/appstore.png";
import Qr from "../../public/img/qr.png";

export default function Head() {
  return (
    <div className="container mx-auto max-w-screen-lg pt-20">
      <div className="flex flex-col justify-around items-center md:flex-row-reverse px-2 md:px-4 lg:px-0">
        <div className="flex items-center ">
          <Image
            src={Cell}
            width={425}
            height={525}
            alt="main-image-phone"
            className="w-[175px] h-[200px] md:w-[377px] md:h-[377px] tranp"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start">
          <h2 className="font-title uppercase text-white text-shadow-sm md:text-shadow text-3xl md:text-5xl font-bold">
            Tu plata, sin límites
          </h2>
          <div className="font-normal text-white text-sm my-2 text-center md:text-[20px] md:leading-[23px] md:text-left md:my-3.5 md:ml-2">
            <p>
              La experiencia más simple para enviar y recibir
              <strong>pagos de cualquier lugar del mundo. </strong>
              Usá tu plata donde y como quieras.
            </p>
          </div>

          <div className="hidden md:block ml-2">
            <div className="bg-[#4E0AB4] w-[262px] h-[115px] flex items-center justify-around rounded-xl pt-2.5 pb-2.5">
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
                    src={Qr}
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
      </div>
    </div>
  );
}
