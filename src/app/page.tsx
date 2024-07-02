import Image from "next/image";
import Nav from "@/components/nav";
import Head from "@/components/head";
import Cards from "@/components/cards";
import Steps from "@/components/steps";
import Planet from "@/components/planet";
import Crypto from "@/components/crypto";
import Mastercard from "@/components/mastercard";
import Bitrefill from "@/components/bitrefill";
import Discounts from "@/components/discounts";

export default function Home() {
  return (
    <div className="bg-[#6E00FF]">
    
      <Nav />

      <div className="pt-20">
        <Head />
        <Cards />
        <Steps />
        <Planet />
        <Crypto />
        <Mastercard />
        <Bitrefill />
        <Discounts />



      </div>
        
      
    </div>
  );
}
