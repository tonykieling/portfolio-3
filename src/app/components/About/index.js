"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [ moreInfoOpen, setMoreInfoOpen ] = useState(false);

  return (
    // <section className="bg-[#F9F9F9] h-[calc(100vh-(var(--header-height)))] flex flex-col" id="about">
    // <section className="bg-[#fFf] h-[calc(100vh-(var(--header-height)))] flex flex-col" id="about">
    <section className="bg-[#fFf] flex flex-col" id="about">

      <div className={`${moreInfoOpen ? "mt-6" : "h-[calc((100vh-(var(--header-height)))*0.8)]"} max-[550px]:${moreInfoOpen ? "mt-6" : "h-[calc((100vh-(var(--header-height)))*0.85)]"}`}>
      {/* <div className=" max-[550px]:h-[calc((100vh-68px)*0.85)]"> */}
        <div className="flex h-full max-[550px]:flex-col max-[550px]:items-center">
          <div className="w-3/5 h-full ml-40 flex flex-col items-center justify-center max-[1000px]:ml-14 max-[800px]:ml-4 max-[550px]:order-3 max-[550px]:w-11/12 max-[550px]:ml-0 max-[550px]:text-center max-[550px]:h-1/2 max-[550px]:justify-start">
            <p className="font-extrabold tracking-widest text-5xl mb-8 text-center max-[550px]:text-3xl max-[550px]:mb-4 text-slate-900" id="moreinfo">
              Tony Kieling</p>
            <p 
              className="mx-16 text-2xl leading-loose max-[900px]:leading-relaxed max-[900px]:mx-4 max-[750px]:text-xl max-[750px]:leading-loose max-[550px]:text-lg text-slate-900"
            >
              A <b>Software Engineer</b> / <b>Full Stack Developer</b> with expertise in Javascript ecosystems, mainly React and Node.js, and more. Strong problem-solving & detail-oriented skills with a collaborative mindset.
            </p>

            <Link 
              href={`${moreInfoOpen ? "#about" : "#moreinfo"}`}
              className="self-end mr-8 my-3 text-stone-400"
            >
              <button 
                onClick={() => setMoreInfoOpen(!moreInfoOpen)}
              >
                { moreInfoOpen ? "Less Info" : "More Info"}
              </button>
            </Link>

            <div 
              className={`flex flex-col px-20 text-xl leading-loose max-[900px]:leading-relaxed max-[900px]:mx-4 max-[750px]:text-xl max-[750px]:leading-loose max-[550px]:text-lg text-slate-900 w-full ${moreInfoOpen ? "more-info-visible" : "more-info-hidden"} max-[600px]:px-8 mb-4`}
              // id="moreinfo"
            >
              {/* My background as Systems Analyst for more than ten years provides me solid understanding of the whole lifecycle of a service, which helps me to improve my expertise in software developement. Besides that, my maturity and  of process, maturity and engagement to,  */}
              <p>
                I offer a unique blend of over ten years of experience as a Systems Analyst, specializing in Service Management and ITIL processes, coupled with a track record as a Software Developer. I excel in delivering efficient and secure software solutions.
              </p>
              <p className="mt-4">
                My background provides me with a deep understanding of the entire IT service lifecycle and the vital importance of security and quality.
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

          
          <div className={`h-full w-2/5 flex items-center justify-start p-4 max-[550px]:order-1 max-[550px]:h-1/2 max-[550px]:w-1/2 max-[450px]:w-3/5   ${moreInfoOpen ? "h-screen" : ""}`} id="about">
            <Image 
              src={"/images/tk.jpg"}
              width={300}
              height={300}
              alt="TK's picture"
              className="rounded-full max-[1200px]:w-4/5 max-[800px]:w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="h-[calc((100vh-(var(--header-height)))*0.2)] max-[550px]:h-[calc((100vh-(var(--header-height)))*0.15)] flex justify-center items-center">
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
              // className={`border-2 border-slate-400 hover:border-gray-300 rounded-full bg-[#FEFEFE] hover:bg-gray-400`}
              className={`hover:border hover:border-gray-900 rounded-full`}
            />

          </Link> 
        </div>
      </div>
    </section>
  )
}

export default About;