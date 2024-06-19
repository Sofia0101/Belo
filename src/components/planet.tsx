import Image from "next/image";
import Planetimg from "../../public/img/planet.png";

export default function Planet() {
  return (
    <div className="flex flex-col justify-between items-center my-10 pb-6 md:flex-row md:mb-36">
      <div className="flex  px-4">
        <Image src={Planetimg} alt="planet" width={1128} height={1024} />
      </div>

      <div className="flex flex-col justify-center text-center mt-10">
        <div className="text-white my-3.5 md:text-right md:px-8">
          <h2 className="font-medium text-[26px] leading-[29px] px-8  md:text-[40px] md:leading-[47px] md:px-0">
            Recibí plata desde cualquier parte del mundo
          </h2>
          <p className="font-normal mt-4 text-sm px-7 md:text-xl md:px-0">
            Cobrá en
            <strong> dólares o en euros, </strong>o traé tu saldos de
            <strong> Payoneer </strong>y usalos de la forma que quieras
          </p>

          <div className="px-4 mt-10 md:px-0">
            <a href="" className="w-full md:w-auto">
              <button className="w-[100%] md:w-[350px] rounded-xl border-[1px] border-opacity-[1] border-white bg-transparent pt-3 pb-3 text-sm leading-5 font-bold text-white transform-none cursor-pointer 
        hover:bg-opacity-100 hover:bg-white hover:text-opacity-1 hover:text-black">Conocé más</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
