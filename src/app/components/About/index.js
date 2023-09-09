"use client";

import { Oregano } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { GlobalContext } from "../context";
import { useContext } from "react";

const oregano = Oregano({ 
  subsets: ['latin'],
  weight: ["400"]
});

const About = () => {
  const [ moreInfoOpen, setMoreInfoOpen ] = useState(false);
  const [ initialState, setInitialState ] = useState(true);
  const [onAbout, setOnAbout ] = useState(false);
  const { setCurrentMenu } = useContext(GlobalContext);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      (entry.isIntersecting) && setCurrentMenu("about");
      if (initialState) {
        setOnAbout(true);
        setInitialState(false);
      }

    },
      { threshold: 0.5 }
    );

    observer.observe(aboutRef.current);
    
    return() => {
      observer.disconnect();
      if (aboutRef) observer.unobserve(aboutRef);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section className="bg-[#FFF] flex flex-col" id="about" ref={aboutRef}>

      <div className={`mt-6 ${moreInfoOpen ? "" : "h-[calc((100vh-(var(--header-height)))*0.8)]"} max-[550px]:${moreInfoOpen ? "" : "h-[calc((100vh-(var(--header-height)))*0.85)]"}`}>
        <div className={`flex h-full flex-col justify-start min-[350px]:justify-around min-[700px]:flex-row items-center ${moreInfoOpen ? "min-[700px]:items-start" : ""}`}>
          <div className="w-11/12 h-full  flex flex-col items-center justify-center min-[700px]:ml-2 max-[699px]:order-3 min-[700px]:w-3/5 max-[700px]:h-1/2 max-[700px]:justify-start min-[900px]:ml-20 min-[1000px]:ml-36">
            <p className={`${oregano.className} ${onAbout ? "about-name-visible" : "about-name-hidden"} ${moreInfoOpen ? "" : ""} font-extrabold tracking-widest text-5xl mb-4 text-center min-[700px]:text-7xl min-[700px]:mb-5 text-slate-900`} id="moreinfo">
              Tony Kieling</p>
            <p 
              className={`${onAbout ? "about-description-visible" : "about-description-hidden"} text-left mx-4 min-[900px]:mx-12 min-[700px]:leading-loose text-base min-[400px]:text-lg min-[700px]:text-xl  `}
            >
              A <b>Software Engineer</b> / <b>Full Stack Developer</b> with expertise in Javascript ecosystems, mainly React and Node.js, and more. My background provides me with a solid understanding of the entire IT service lifecycle and the vital importance of security and quality.
            </p>

            <Link 
              href={`${moreInfoOpen ? "#about" : "#moreinfo"}`}
              className={`${onAbout ? "about-others-visible" : "about-others-hidden"} self-end mr-8 my-3 text-stone-400 z-10 hover:font-bold`}
            >
              <button 
                onClick={() => setMoreInfoOpen(!moreInfoOpen)}
              >
                { moreInfoOpen ? "Less Info" : "More Info"}
              </button>
            </Link>

            <div 
              className={`flex flex-col px-6 text-base min-[400px]:text-lg min-[700px]:text-xl leading-relaxed min-[700px]:leading-loose min-[700px]:pl-4 min-[900px]:pl-12 text-slate-900 w-full ${moreInfoOpen ? "block" : "hidden"} min-[600px]:px-12 mb-4`}
            >
              <p className="text-left">
                I offer a unique blend of over ten years of experience as a Systems Analyst, specializing in Service Management and ITIL processes, coupled with a track record as a Software Developer. I excel in delivering efficient and secure software solutions.
              </p>
              <p className="mt-4 text-left">
                {/* My background provides me with a deep understanding of the entire IT service lifecycle and the vital importance of security and quality. */}
                Strong problem-solving & detail-oriented skills with a collaborative mindset.
              </p>
              <p className="mt-4">
                Curious to learn more about my skills? 
              </p>
              <p className="mt-4">
                Feel free to&nbsp;
                <Link href="#contact" className="hover:underline text-[blue] font-bold">
                  connect
                </Link> or&nbsp; 
                <Link href="#contact" className="hover:underline text-[blue] font-bold">
                  message me
                </Link>.
              </p>
            </div>
          </div>

          
          <div className={`${onAbout ? "about-picture-visible" : "about-picture-hidden"} h-1/3 w-3/4 flex justify-center order-1 min-[700px]:order-0  min-[700px]:w-2/5 min-[700px]:h-1/2 min-[1200px]:ml-3 min-[900px]:justify-start   ${moreInfoOpen ? "min-[700px]:h-screen min-[700px]:pt-20" : ""}`} id="about">
            <Image 
              src={"/images/tk.webp"}
              width={300}
              height={300}
              alt="TK's picture"
              className={`rounded-full w-auto ${moreInfoOpen ? "h-52 min-[700px]:h-1/4 min-[700px]:w-3/4 min-[1200px]:w-1/2" : ""}`}
            />
          </div>
        </div>
      </div>
      
      <div 
        className={`${onAbout ? "about-others-visible" : "about-others-hidden"} h-[calc((100vh-(var(--header-height)))*0.2)] max-[550px]:h-[calc((100vh-(var(--header-height)))*0.15)] flex justify-center items-center`}
      >
        <div className="flex align-bottom">
          <Link 
            href={"#portfolio"}
          >
            <Image 
              src={"/images/arrow-down.svg"}
              width={60}
              height={60}
              alt="arrow down"
              title="Keep going for more"
              className={"pointer-events-none sm:pointer-events-auto hover:border hover:border-gray-900 rounded-full"}
            />

          </Link> 
        </div>
      </div>
    </section>
  )
}

export default About;