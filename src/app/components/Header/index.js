import Image from "next/image";
import logo from "../../images/logo-tk.png";
import Link from "next/link";

const Header = () => {

  return (
    <section className="sticky top-0 max-[320px]:pl-9 max-[350px]:pl-8 max-[450px]:pl-5 text-center py-5  bg-stone-200" id="header">
      
      <div className="absolute top-0 left-4 max-[350px]:left-3 h-full">
        <div className="h-full flex flex-col justify-center">
          <Image 
            src={logo}
            width={35}
            height={35}
            alt="TK's logo"
            className="max-[320px]:w-7 max-[350px]:w-8"
          />
        </div>
      </div>

      <nav className="list-none text-center font-medium text-xl text--stone-200 max-[450px]:text-lg max-[320px]:text-base">
        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block text-stone-800  hover:cursor-pointer">
          <Link href={"#about"} 
            className="hover:text-stone-200 hover:bg-stone-600 rounded-md px-2 py-1 transition-colors duration-700 ease-in-out "
          > About </Link>
        </li>
        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block text-stone-800 hover:cursor-pointer">
          <Link href="#portfolio" 
            // className="hover:text-stone-200 hover:bg-stone-800 hover:rounded-md px-2 py-1"
          > 
          <p className="relative group">
            <span>Portfolio</span>
            <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
          </p>
           </Link>
        </li>
        <li className="max-[320px]:px-2 max-[450px]:px-3 max-[600px]:px-4 px-6 inline-block text-stone-800  hover:cursor-pointer">
        <Link href={"#contact"} className="hover:text-stone-200 hover:bg-stone-800 hover:rounded-md px-2 py-2"> Contact </Link>
        </li>
      </nav>
    </section>
  )
}

export default Header;