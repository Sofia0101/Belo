import Image from "next/image";
import Step1 from "../../public/img/1.png";
import Step2 from "../../public/img/2.png";
import Step3 from "../../public/img/3.png";

export default function Steps() {
  return (
    <div>
      <div className="flex justify-center items-center px-4 my-10">
        <a className="w-full md:w-auto" href="">
          <button
            className="w-[100%] md:w-[350px] rounded-xl border-[1px] border-opacity-[1] border-white bg-transparent pt-3 pb-3 text-sm leading-5 font-bold text-white transform-none cursor-pointer 
        hover:bg-opacity-100 hover:bg-white hover:text-opacity-1 hover:text-black"
          >
            ¿Por qué belo?
          </button>
        </a>
      </div>

      <div className="flex flex-col pt-4 pb-10 relative">
        <div className="flex justify-center items-center px-20">
          <h2
            className="font-title uppercase text-white text-shadow-sm md:text-shadow text-3xl md:text-5xl font-bold
    undefined"
          >
            Empezá con belo
          </h2>
        </div>

        {/* <div className="hidden lg:block 
        after:border-dashed after:border-[2.12px] after:absolute after:w-[630px] left-[25%] top-[71%] h-[0] dash-content-x"></div>
        <div className="md:hidden dash-content-y after:content-[*] after:border-[##00ffb2]
        after:border-dashed after:border-[2.12px] after:absolute after:w-[0] left-[50%] top-[30%] h-[400px]"></div> */}

        <div className="flex flex-col px-20 mt-14 gap-y-5 md:flex-row md:px-11 md:gap-y-0 md:gap-x-24 relative ">
          <div className="flex flex-1 items-center relative rounded-xl border bg-[#280066] border-[#00FFB2]">
            <div className="absolute h-full -left-4">
              <Image
                alt="number-step"
                src={Step1}
                width={35}
                height={128}
                className="h-full"
              />
            </div>
            <p className="pl-12 pr-6 py-12 font-bold text-[#00FFB2] text-[15px] leading-[17px]">
              Descargá la app y verificá tu cuenta con tu documento
            </p>
          </div>

          <div className="flex flex-1 items-center relative rounded-xl border bg-[#280066] border-[#00FFB2]">
            <div className="absolute h-full -left-4">
              <Image
                src={Step2}
                alt="number-step"
                width={35}
                height={128}
                className="h-full"
              />
            </div>
            <p className="pl-12 pr-6 py-12 font-bold text-[#00FFB2] text-[15px] leading-[17px]">
              Depositá tus pesos y criptomonedas, o cobrá tus ingresos del
              exterior
            </p>
          </div>

          <div className="flex flex-1 items-center relative rounded-xl border bg-[#280066] border-[#00FFB2]">
            <div className="absolute h-full -left-4">
              <Image
                src={Step3}
                alt="number-step"
                width={35}
                height={128}
                className="h-full"
              />
            </div>
            <p className="pl-12 pr-6 py-12 font-bold text-[#00FFB2] text-[15px] leading-[17px]">
              Pedí tu tarjeta para usar tu plata donde y como quieras
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
