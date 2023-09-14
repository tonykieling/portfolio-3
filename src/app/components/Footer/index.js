import Image from "next/image";

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
        <ul className="flex">
          <li className="mx-5 my-2 outline outline-1 outline-slate-400 hover:outline-slate-600 hover:shadow-md hover:shadow-slate-600  p-2 rounded-full">
            <a 
              href="mailto:tony.kieling@gmail.com"
            >
              <Image
                src={"/images/gmail.svg"}
                width={28}
                height={28}
                alt="Contact"
                title="tony.kieling@gmail.com"
              />
            </a>
          </li>
          
          <li className="mx-5 my-2 outline outline-1 outline-slate-400 hover:outline-slate-600 hover:shadow-md hover:shadow-slate-600  p-2 rounded-full">
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

          <li className="mx-5 my-2 outline outline-1 outline-slate-400 hover:outline-slate-600 hover:shadow-md hover:shadow-slate-600  p-2 rounded-full">
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
        </ul>
      </nav>

      <div className="max-[800px]:mb-28 mb-16 font-medium">
        <span 
          className="justify-center pt-3  text-lg tracking-wide" 
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