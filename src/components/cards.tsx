import Image from "next/image";
import Pin1 from "../../public/img/pin1.png";
import Pin2 from "../../public/img/pin2.png";
import Pin3 from "../../public/img/pin3.png";
import Pin4 from "../../public/img/pin4.png";
import Pin5 from "../../public/img/pin5.png";
import Pin6 from "../../public/img/pin6.png";

import Arrow from "../../public/img/arrow.png";
import Card from "../../public/img/card.png";
import Exchange from "../../public/img/exchange.png";
import Buy from "../../public/img/buy.png";
import Cash from "../../public/img/cash.png";
import Pay from "../../public/img/pay.png";

export default function Cards() {
  return (
    <div className="flex flex-wrap justify-around gap-y-10 md:justify-between mt-9 px-4 md:gap-x-7 lg:px-8 shadow-sm">
      <div className="flex flex-col items-center  rounded-xl w-[129px] h-[152px] bg-[#6500F4] shadow-[-5px_5px_0_0_rgb(0_0_0)]">
        <div className="shadow h-[82px] flex w-full justify-center items-center relative rounded-t-xl border border-black bg-[#280066]">
          <div className="absolute -top-1">
            <Image src={Pin1} width={16} height={16} alt="Pin" />
          </div>

          <div className="w-[35px] h-[35px] relative">
            <Image src={Arrow} width={35} height={35} alt="simbolo" />
          </div>
        </div>

        <div className="flex-1 flex space-x-4 items-center px-2 rounded-b-xl border border-black gradient-primary">
          <p className="font-bold text-white text-center text-[10px] leading-[11.72px]">
            Cobrá al exterior en dólares y euros. Ingresá pesos o criptomonedas
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center  rounded-xl w-[129px] h-[152px] bg-[#6500F4] shadow-[-5px_5px_0_0_rgb(0_0_0)]">
        <div className="shadow h-[82px] flex w-full justify-center items-center relative rounded-t-xl border border-black bg-[#280066]">
          <div className="absolute -top-1">
            <Image src={Pin2} width={16} height={16} alt="Pin" />
          </div>

          <div className="w-[45px] h-[35px] relative">
            <Image src={Card} width={45} height={35} alt="simbolo" />
          </div>
        </div>

        <div className="flex-1 flex space-x-4 items-center px-2 rounded-b-xl border border-black gradient-primary">
          <p className="font-bold text-white text-center text-[10px] leading-[11.72px]">
            Pedí gratis tu tarjeta Mastercard® Internacional{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center  rounded-xl w-[129px] h-[152px] bg-[#6500F4] shadow-[-5px_5px_0_0_rgb(0_0_0)]">
        <div className="shadow h-[82px] flex w-full justify-center items-center relative rounded-t-xl border border-black bg-[#280066]">
          <div className="absolute -top-1">
            <Image src={Pin3} width={16} height={16} alt="Pin" />
          </div>

          <div className="w-[35px] h-[35px] relative">
            <Image src={Exchange} width={35} height={35} alt="simbolo" />
          </div>
        </div>

        <div className="flex-1 flex space-x-4 items-center px-2 rounded-b-xl border border-black gradient-primary">
          <p className="font-bold text-white text-center text-[10px] leading-[11.72px]">
            Intercambiá pesos y criptomonedas sin comisiones{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center  rounded-xl w-[129px] h-[152px] bg-[#6500F4] shadow-[-5px_5px_0_0_rgb(0_0_0)]">
        <div className="shadow h-[82px] flex w-full justify-center items-center relative rounded-t-xl border border-black bg-[#280066]">
          <div className="absolute -top-1">
            <Image src={Pin4} width={16} height={16} alt="Pin" />
          </div>

          <div className="w-[42px] h-[35px] relative">
            <Image src={Buy} width={42} height={35} alt="simbolo" />
          </div>
        </div>

        <div className="flex-1 flex space-x-4 items-center px-2 rounded-b-xl border border-black gradient-primary">
          <p className="font-bold text-white text-center text-[10px] leading-[11.72px]">
            Pagá con cripto tus compras de todos los días{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center  rounded-xl w-[129px] h-[152px] bg-[#6500F4] shadow-[-5px_5px_0_0_rgb(0_0_0)]">
        <div className="shadow h-[82px] flex w-full justify-center items-center relative rounded-t-xl border border-black bg-[#280066]">
          <div className="absolute -top-1">
            <Image src={Pin5} width={16} height={16} alt="Pin" />
          </div>

          <div className="w-[50px] h-[32.03px] relative">
            <Image src={Cash} width={50} height={32.03} alt="simbolo" />
          </div>
        </div>

        <div className="flex-1 flex space-x-4 items-center px-2 rounded-b-xl border border-black gradient-primary">
          <p className="font-bold text-white text-center text-[10px] leading-[11.72px]">
            Retirá efectivo en cajeros link o banelco{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center  rounded-xl w-[129px] h-[152px] bg-[#6500F4] shadow-[-5px_5px_0_0_rgb(0_0_0)]">
        <div className="shadow h-[82px] flex w-full justify-center items-center relative rounded-t-xl border border-black bg-[#280066]">
          <div className="absolute -top-1">
            <Image src={Pin6} width={16} height={16} alt="Pin" />
          </div>

          <div className="w-[36.33px] h-[42px] relative">
            <Image src={Pay} width={36.33} height={42} alt="simbolo" />
          </div>
        </div>

        <div className="flex-1 flex space-x-4 items-center px-2 rounded-b-xl border border-black gradient-primary">
          <p className="font-bold text-white text-center text-[10px] leading-[11.72px]">
            Pagá tus servicios de la forma más simple
          </p>
        </div>
      </div>
    </div>
  );
}
