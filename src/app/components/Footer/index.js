import Image from "next/image";
// import { Oregano } from "next/font/google";

// const oregano = Oregano({
//   subsets: ["latin"],
//   weight: "400"
// });

const Footer = () => {
  const getYear = () => {
    const today = new Date();
    return today.getFullYear();
  }

  return (
    <section className="w-full flex flex-col items-center py-6 bg-stone-200" id="footer">

      <div className="w-6/12 max-[1200px]:w-8/12 max-[1000px]:w-9/12 mb-4 border border-black"></div>

      <p className="font-semibold text-lg mb-4">Let&apos;s connect!</p>

      <nav className="list-none flex justify-center mb-4">
        <li className="px-5">
          <a href="mailto:tony.kieling@gmail.com">
            <Image
              src={"/images/gmail.svg"}
              width={28}
              height={28}
              alt="Contact"
              title="tony.kieling@gmail.com"
            />
          </a>
        </li>
        
        <li className="px-5">
          <a target="_blank" href="https://www.linkedin.com/in/tony-kieling/" rel="noopener noreferrer">
            <Image
              src={"/images/linkedin.svg"}
              width={28}
              height={28}
              alt="LinkedIn"
              title="LinkedIn"
            />
          </a>
        </li>

        <li className="px-5">
          <a target="_blank" href="https://github.com/tonykieling" rel="noopener noreferrer">
            <Image
              src={"/images/github.svg"}
              width={28}
              height={28}
              alt="GitHub"
              title="GitHub"
            />
          </a>
        </li>
      </nav>

      <div className="max-[800px]:mb-20">
        <span 
          className={`justify-center pt-3  text-lg tracking-wide `} 
          style={{fontVariant: "small-caps"}}> &nbsp;Tony Kieling
        </span>
          <span>
            &copy; 2019 - {getYear()}
          </span>
        <p className="text-center mt-4"> All rights reserved</p>
      </div> 

    </section>
  )
}

export default Footer;