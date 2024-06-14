import Image from "next/image";
import Nav from "@/components/nav";
import Head from "@/components/head";
import Cards from "@/components/cards";
import Steps from "@/components/steps";

export default function Home() {
  return (
    <section className="relative bg-[#6E00FF]">
      <Nav />
      <div className="container mx-auto max-w-screen-lg pt-20">
        <Head />
        <Cards />
        <Steps />

      </div>
    </section>
  );
}
