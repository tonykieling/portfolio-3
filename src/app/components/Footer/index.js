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

      <nav className="list-none flex justify-center">
        <li className="px-5">
          <Link
            href="#contact"
          >
            <Image
              src={gmailIcon}
              width={28}
              height={28}
              alt="Contact"
              title="Contact"
            />
          </Link>
        </li>
        <li className="px-5">
          <Link legacyBehavior href="https://www.linkedin.com/in/tony-kieling/">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src={linkedinIcon}
                width={28}
                height={28}
                alt="LinkedIn"
                title="LinkedIn"
              />
            </a>
          </Link>
        </li>
        <li className="px-5">
          <Link legacyBehavior href="https://github.com/tonykieling">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src={githubIcon}
                width={28}
                height={28}
                alt="GitHub"
                title="GitHub"
              />
            </a>
          </Link>
        </li>
      </nav>

      <div className="justify-center pt-3">Tony Kieling&copy; - {getYear()}  </div>

    </section>
  )
}

export default Footer;