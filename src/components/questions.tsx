"use client";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "../components/dropdown";

export default function Questions() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className="1 flex flex-col items-center pb-12 md:pb-14
    bg-[#2F007D] full-bg_other w-full"
    >
      <div className="2 pt-0.5 pb-14 mx-4 border-dashed border-t-2 border-[#00FFB2] w-full md:self-center">
        <div className="3 flex justify-center px-12 mb-12 md:mb-16">
          <h2
            className="font-title uppercase text-white text-shadow-sm md:text-shadow text-3xl md:text-4xl font-bold
    undefined"
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div
          className="4 flex flex-col items-center px-8 space-y-10 w-full
      md:space-y-16 md:px-20
    text-white"
        >
          <div className="5 flex flex-col w-full cursor-pointer">
            <div className="6 flex justify-between items-center space-x-16 font-normal text-sm md:text-xl mb-2">
              <span className="text-left flex-1">
                ¿Cómo crear una cuenta para menores de 18 años?
              </span>
              <div className="7 h-[25px] w-[25px]">
                <svg
                  className="w-full h-full rotate-90"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.61649 0.459644L9.7623 7.58425C9.84712 7.66907 9.90705 7.76095 9.94211 7.85991C9.97773 7.95886 9.99555 8.06488 9.99555 8.17797C9.99555 8.29106 9.97773 8.39708 9.94211 8.49603C9.90705 8.59498 9.84712 8.68687 9.7623 8.77169L2.61649 15.9175C2.41858 16.1154 2.1712 16.2144 1.87434 16.2144C1.57748 16.2144 1.32303 16.1083 1.11099 15.8963C0.898948 15.6842 0.792927 15.4369 0.792927 15.1541C0.792927 14.8714 0.898948 14.624 1.11099 14.412L7.34502 8.17797L1.11099 1.94394C0.913085 1.74603 0.814132 1.50232 0.814132 1.21282C0.814132 0.922743 0.920153 0.671685 1.13219 0.459644C1.34424 0.247602 1.59162 0.14158 1.87434 0.14158C2.15706 0.14158 2.40445 0.247602 2.61649 0.459644Z"
                    fill="#00FFB2"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="App">
              {isOpen && <Dropdown />}

              <button onClick={toggle}>Botoncito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
