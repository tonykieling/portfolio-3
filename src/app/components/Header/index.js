"use client";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../context";
import { useContext } from "react";

const Header = () => {
  const { currentMenu } = useContext(GlobalContext);

  return (
    <section className="sticky z-50  top-0   pl-2 flex items-center justify-center max-[500px]:justify-between max-[500px]:pr-6 py-5 shadow-md shadow-slate-600 bg-gradient-to-r from-blue-600 min-[700px]:from-purple-700 min-[700px]:to-blue-900 to-blue-900" id="header">
      
      {/* it's gonna be my logo */}
      <div className="min-[500px]:absolute min-[500px]:top-0 left-4  h-full">
        <div className="h-full flex items-center justify-center">
          <Link href={"#about"} >
            {/* <Image 
              src={"/images/logo-tk.png"}
              width={35}
              height={35}
              alt="TK's logo"
              className="bg-gradient-to-r from-white to-slate-500  rounded-full"
            /> */}
            {/* <span className="bg-gradient-logo rounded-full p-1 font-bold text-lg"> */}
            <span className="bg-gradient-to-tr from-blue-100 to-blue-500 rounded-full p-2 font-bold text-2xl hover:outline hover:outline-white pointer-events-none sm:pointer-events-auto" title="TK's Home Page">

            {/* <span className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white to-black  rounded-full p-2 font-bold text-3xl"> */}
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-700"> */}
              <span className="text-blue-900">
                TK
              </span>
            </span>
          </Link>
        </div>
      </div>
      {/* <div className="bg-blue-900">ads</div> */}

      <nav className="list-none text-center font-bold text-xl text--stone-200 max-[450px]:text-lg max-[320px]:text-base ">
        <li className="px-1 min-[600px]:px-4 inline-block hover:cursor-pointer">
          <Link 
            href="#about"
          >
            <span className={`pointer-events-none sm:pointer-events-auto ${ currentMenu === "about" ? "text-slate-200 bg-gradient-to-tr from-blue-600 to-blue-800 rounded-md" : "text-[#FFF]"} px-2 min-[600px]:px-4 py-2 hover:bg-gradient-to-bl from-blue-600 to-blue-800 hover:rounded-md`}>
              About
            </span>
          </Link>
        </li>

        <li className="px-1 min-[600px]:px-4 inline-block hover:cursor-pointer">
          <Link href="#portfolio"> 
          <span className={`pointer-events-none sm:pointer-events-auto ${ currentMenu === "portfolio" ? "text-slate-200 bg-gradient-to-tr from-blue-600 to-blue-800 rounded-md" : "text-[#FFF]"} px-2 min-[600px]:px-4 py-2 hover:bg-gradient-to-bl from-blue-600 to-blue-800 hover:rounded-md`}>
              Portfolio
            </span>
          </Link>
        </li>

        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block hover:cursor-pointer">
          <Link href="#contact">
            <span className={`pointer-events-none sm:pointer-events-auto ${ currentMenu === "contact" ? "text-slate-200 bg-gradient-to-tr from-blue-600 to-blue-800 rounded-md" : "text-[#FFF]"} px-2 py-2 hover:bg-gradient-to-bl from-blue-600 to-blue-800 hover:rounded-md`}>
              Contact
            </span>
          </Link>
        </li>
      </nav>
    </section>
  )
}

export default Header;