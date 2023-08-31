import Image from "next/image";
import Link from "next/link";
import gmailIcon from "../../images/gmail.svg";
import linkedinIcon from "../../images/linkedin.svg";
import githubIcon from "../../images/github.svg";


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
              src={gmailIcon}
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
              src={linkedinIcon}
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
              src={githubIcon}
              width={28}
              height={28}
              alt="GitHub"
              title="GitHub"
            />
          </a>
        </li>
      </nav>

      <div className="justify-center pt-3 font-semibold">Tony Kieling &copy; - {getYear()}  </div>

    </section>
  )
}

export default Footer;