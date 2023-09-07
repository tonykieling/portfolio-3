"use client";
// import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../context";
import { useContext, useEffect } from "react";

const Header = () => {
  const { currentMenu } = useContext(GlobalContext);

  useEffect(() => console.log("currentMenu: ", currentMenu), [currentMenu]);

  return (
    // <section className="sticky z-10 top-0 max-[320px]:pl-9 max-[350px]:pl-8 max-[450px]:pl-5 text-center py-5  bg-[#458ABB]" id="header">
    <section className="sticky z-10 top-0 max-[320px]:pl-9 max-[350px]:pl-8 max-[450px]:pl-5 text-center py-5  bg-[blue] shadow-md shadow-slate-600" id="header">
      
      {/* it's gonna be my logo */}
      {/* <div className="absolute top-0 left-4 max-[350px]:left-3 h-full">
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
      </div> */}

      <nav className="list-none text-center font-bold text-xl text--stone-200 max-[450px]:text-lg max-[320px]:text-base ">
        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block hover:cursor-pointer">
          <Link 
            href="#about"
            className={`${ currentMenu === "about" ? "text-slate-900 bg-blue-500" : "bg-[blue] text-[#FFF]"} px-3 py-2 hover:bg-blue-500 rounded-md`}
          >
            About
            {/* <p className="relative group"> */}

              {/* { thinClient
                  ?
                    <span className={`${ currentMenu === "about" ? "underline" : "" }`}>About</span>
                  :
                    <> */}
                      {/* <span className={`${ currentMenu === "about" ? "text-slate-900 bg-blue-500" : "" } px-3 py-2 hover:bg-blue-500 rounded-md`}>About</span> */}
                      {/* <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#D9EAF4] transition-all duration-500 group-hover:w-full"></span> */}
                    {/* </>
              } */}
            {/* </p> */}
          </Link>
        </li>

        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block hover:cursor-pointer">
          <Link href="#portfolio"> 
            <span className={`${ currentMenu === "portfolio" ? "text-slate-900 bg-blue-500" : "bg-[blue] text-[#FFF]" } px-3 py-2 hover:bg-blue-500 rounded-md`}>Portfolio</span>
              
            {/* <p className="relative group">
              { thinClient
                  ?
                    <span className={`${ currentMenu === "portfolio" ? "underline" : "" }`}>Portfolio</span>
                  :
                    <>
                      <span className={`${currentMenu === "portfolio" ? "text-slate-900" : ""}`}>Portfolio</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#D9EAF4] text-[#273448] transition-all duration-500 group-hover:w-full"></span>
                    </>
              }
            </p> */}
          </Link>
        </li>

        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block hover:cursor-pointer">
          <Link href="#contact">
            <span className={`${ currentMenu === "contact" ? "text-slate-900 bg-blue-500" : "bg-[blue] text-[#FFF]" } px-3 py-2 hover:bg-blue-500 rounded-md`}>Contact</span>

            {/* <p className="relative group">
              { thinClient
                  ?
                    <span className={`${ currentMenu === "contact" ? "underline" : "" }`}>Contact</span>
                  :
                    <>
                      <span className={`${currentMenu === "contact" ? "text-slate-900" : ""}`}>Contact</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#D9EAF4] text-[#273448] transition-all duration-500 group-hover:w-full"></span>
                    </>
              }
            </p> */}
          </Link>
        </li>
      </nav>
    </section>
  )
}

export default Header;