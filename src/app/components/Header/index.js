import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
    // <section className="sticky z-10 top-0 max-[320px]:pl-9 max-[350px]:pl-8 max-[450px]:pl-5 text-center py-5  bg-[#458ABB]" id="header">
    <section className="sticky z-10 top-0 max-[320px]:pl-9 max-[350px]:pl-8 max-[450px]:pl-5 text-center py-5  bg-[blue] shadow-md shadow-slate-600" id="header">
      
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

      <nav className="list-none text-center font-bold text-xl text--stone-200 max-[450px]:text-lg max-[320px]:text-base text-[#FFFFFF]">
        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block   hover:cursor-pointer">
          <Link href={"#about"}>
            <p className="relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#D9EAF4] transition-all duration-500 group-hover:w-full"></span>
            </p>
          </Link>
        </li>

        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block hover:cursor-pointer">
          <Link href="#portfolio" 
          > 
            <p className="relative group">
              <span>Portfolio</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#D9EAF4] text-[#273448] transition-all duration-500 group-hover:w-full"></span>
            </p>
          </Link>
        </li>

        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block hover:cursor-pointer">
          <Link href={"#contact"}>
            <p className="relative group">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#D9EAF4] text-[#273448] transition-all duration-500 group-hover:w-full"></span>
            </p>
          </Link>
        </li>
      </nav>
    </section>
  )
}

export default Header;