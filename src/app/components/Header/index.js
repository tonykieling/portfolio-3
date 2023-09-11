"use client";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../context";
import { useContext } from "react";

const Header = () => {
  const { currentMenu } = useContext(GlobalContext);

  return (
    <section className="sticky z-20 top-0 max-[320px]:pl-9 max-[350px]:pl-8 max-[450px]:pl-5 text-center py-5  bg-blue-900 shadow-md shadow-slate-600" id="header">
      
      {/* it's gonna be my logo */}
      <div className="absolute top-0 left-4 max-[350px]:left-3 h-full">
        <div className="h-full flex flex-col justify-center">
          <Link href={"#about"} >
            <Image 
              src={"/images/logo-tk.png"}
              width={35}
              height={35}
              alt="TK's logo"
              className="max-[320px]:w-7 max-[350px]:w-8"
            />
          </Link>
        </div>
      </div>

      <nav className="list-none text-center font-bold text-xl text--stone-200 max-[450px]:text-lg max-[320px]:text-base ">
        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block hover:cursor-pointer">
          <Link 
            href="#about"
          >
            <span className={`pointer-events-none sm:pointer-events-auto ${ currentMenu === "about" ? "text-slate-200 bg-blue-800 rounded-md" : "bg-blue-900 text-[#FFF]"} px-3 py-2 hover:bg-blue-500 hover:rounded-md`}>
              About
            </span>
          </Link>
        </li>

        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block hover:cursor-pointer">
          <Link href="#portfolio"> 
            <span className={`pointer-events-none sm:pointer-events-auto ${ currentMenu === "portfolio" ? "text-slate-200 bg-blue-800 rounded-md" : "bg-blue-900 text-[#FFF]"} px-3 py-2 hover:bg-blue-500 hover:rounded-md`}>
              Portfolio
            </span>
          </Link>
        </li>

        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block hover:cursor-pointer">
          <Link href="#contact">
            <span className={`pointer-events-none sm:pointer-events-auto ${ currentMenu === "contact" ? "text-slate-200 bg-blue-800 rounded-md" : "bg-blue-900 text-[#FFF]"} px-3 py-2 hover:bg-blue-500 hover:rounded-md`}>
              Contact
            </span>
          </Link>
        </li>
      </nav>
    </section>
  )
}

export default Header;