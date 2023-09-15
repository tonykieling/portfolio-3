"use client";
import Link from "next/link";
import { GlobalContext } from "../context";
import { useContext } from "react";

const Header = () => {
  const { currentMenu } = useContext(GlobalContext);

  return (
    <section className="sticky z-50  top-0   pl-1 flex items-center justify-center max-[500px]:justify-between py-5 shadow-md shadow-slate-600 bg-gradient-to-r from-blue-600 min-[700px]:from-purple-700 min-[700px]:to-blue-900 to-blue-900" id="header">
      
      {/* TK's logo */}
      <div className="min-[501px]:absolute min-[500px]:top-0 left-4  h-full">
        <div className="h-full flex items-center justify-center">
          <a href="/">
            <span className="bg-gradient-to-tr from-blue-100 to-blue-500 rounded-full p-2 font-bold text-2xl hover:outline hover:outline-white pointer-events-none sm:pointer-events-auto" title="TK's Home Page">
              <span className="text-blue-900 tracking-tight">
                TK
              </span>
            </span>
          </a>
        </div>
      </div>

      <nav className="list-none text-center font-bold text-xl text--stone-200 max-[450px]:text-lg max-[320px]:text-base ">
        <ul>
          <li className="px-1 min-[600px]:px-4 inline-block hover:cursor-pointer">
            <Link 
              href="#about"
            >
              <span className={`pointer-events-none sm:pointer-events-auto ${ currentMenu === "about" ? "text-slate-200 bg-gradient-to-tr from-blue-400 to-blue-800 rounded-md" : "text-[#FFF]"} px-2 min-[600px]:px-4 py-2 hover:bg-gradient-to-bl from-blue-400 to-blue-800 hover:rounded-md`}>
                About
              </span>
            </Link>
          </li>

          <li className="px-1 min-[600px]:px-4 inline-block hover:cursor-pointer">
            <Link href="#portfolio"> 
              <span className={`pointer-events-none sm:pointer-events-auto ${ currentMenu === "portfolio" ? "text-slate-200 bg-gradient-to-tr from-blue-400 to-blue-800 rounded-md" : "text-[#FFF]"} px-2 min-[600px]:px-4 py-2 hover:bg-gradient-to-bl from-blue-400 to-blue-800 hover:rounded-md`}>
                  Portfolio
              </span>
            </Link>
          </li>

          <li className="max-[320px]:pr-2 max-[450px]:pr-3 max-[600px]:pr-4 pr-6 inline-block hover:cursor-pointer">
            <Link href="#contact">
              <span className={`pointer-events-none sm:pointer-events-auto ${ currentMenu === "contact" ? "text-slate-200 bg-gradient-to-tr from-blue-400 to-blue-800 rounded-md" : "text-[#FFF]"} px-2 min-[600px]:px-4 py-2 hover:bg-gradient-to-bl from-blue-400 to-blue-800 hover:rounded-md`}>
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Header;