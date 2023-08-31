"use client";
import Image from "next/image";
import TK from "../../images/tk.jpg";
import ArrowDownButton from "../../images/arrow-down.svg";
import { useEffect, useState } from "react";

// references
// https://dev.to/frehner/css-vh-dvh-lvh-svh-and-vw-units-27k4
// https://redstapler.co/all-css-viewport-units-svh-lvh-svw-lvw-dvh-dvw-explained/ ****
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// https://stackoverflow.com/questions/10505966/determine-what-browser-being-used-using-javascript

const About = () => {
  // function getBrowser() {
    // if( navigator.userAgent.indexOf("Chrome") != -1 ) {
    //   return "Chrome";
    // } else if( navigator.userAgent.indexOf("Opera") != -1 ) {
    //   return "Opera";
    // } else if( navigator.userAgent.indexOf("MSIE") != -1 ) {
    //   return "IE";
    // } else if( navigator.userAgent.indexOf("Firefox") != -1 ) {
    //   return "Firefox";
    // } else {
    //   return "unknown";
    // }
  // }

  const [ t, setT ] = useState({});

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log("vh::: ", vh, " = ", navigator.userAgent.indexOf("Chrome"));
    setT({
      nav: navigator.userAgent.indexOf("Chrome"),
      inner: window.innerHeight,
      ou: window.outerHeight
    });

    if( navigator.userAgent.indexOf("Chrome") != -1 ) {
      console.log("Chrome");
    }
  }, []);


  return (
    <section className="bg-green-400 h-[calc(100vh-69px)] flex flex-col" id="about">

      <div className="h-[calc((100vh-68px)*0.8)] max-[550px]:h-[calc((100vh-68px)*0.85)]">
        <div className="flex h-full max-[550px]:flex-col max-[550px]:items-center">
          <div className="w-3/5 h-full ml-40 flex flex-col items-center justify-center max-[1000px]:ml-14 max-[800px]:ml-4 max-[550px]:order-3 max-[550px]:w-11/12 max-[550px]:ml-0 max-[550px]:text-center max-[550px]:h-3/5 ">
            <p className="font-extrabold text-5xl mb-8 text-center max-[550px]:text-3xl max-[550px]:mb-4">Tony Kieling</p>
            <p className="mx-16 text-2xl leading-loose max-[900px]:leading-relaxed max-[900px]:mx-4 max-[750px]:text-xl max-[750px]:leading-loose max-[550px]:text-lg">A <b>Software Engineer</b> / <b>Full Stack Developer</b> with expertise in <u>Javascript ecosystems</u>, mainly React and Node.js, and more. Strong problem-solving & detail-oriented skills with a collaborative mindset.
            </p>
          </div>
          
          <div className="h-full w-2/5 flex items-center justify-start p-4 max-[550px]:order-1 max-[550px]:h-2/5 max-[550px]:w-1/2" id="about">
            <Image 
              src={TK}
              width={300}
              height={300}
              alt="TK's picture"
              className="rounded-full max-[1200px]:w-4/5 max-[800px]:w-full"
            />
          </div>
        </div>
      </div>
      {/* < 550px vertical */}
      
      <div className="h-[calc((100vh-68px)*0.2)] max-[550px]:h-[calc((100vh-68px)*0.15)] flex justify-center items-center bg-yellow-400">
        <div className="flex">
          <Image 
            src={ArrowDownButton}
            width={60}
            height={60}
            alt="arrow down"
            title="Keep going for more"
            className={`border-2 border-red-600 hover:border-blue-600 rounded-full`}
          />
          {/* <div>inner: {window.innerHeight} - out: {window.outerHeight} - nav: {getBrowser()}</div> */}
          <div>{JSON.stringify(t)}</div>
        </div>
      </div>
    </section>
  )
}

export default About;