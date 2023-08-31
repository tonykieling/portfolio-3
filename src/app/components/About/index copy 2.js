// "use client";
import Image from "next/image";
import Link from "next/link";
import TK from "../../images/tk.jpg";
import ArrowDownButton from "../../images/arrow-down.svg";

const About = () => {

  // const ButtonX = props => {
  //   console.log("props- ", props)
  //   return (
  //     <svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke={props.strokeColor}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L11.25 13.25H6.00002C5.69668 13.25 5.4232 13.4327 5.30711 13.713C5.19103 13.9932 5.25519 14.3158 5.46969 14.5303L11.4697 20.5303C11.6103 20.671 11.8011 20.75 12 20.75C12.1989 20.75 12.3897 20.671 12.5304 20.5303L18.5304 14.5303C18.7449 14.3158 18.809 13.9932 18.6929 13.713C18.5768 13.4327 18.3034 13.25 18 13.25H12.75L12.75 4Z" fill={props.fillingColor}></path> </g></svg>
  //   )
  // };


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
      
      <div className="h-[calc((100vh-68px)*0.2)] max-[550px]:h-[calc((100vh-68px)*0.15)] flex justify-center items-center">
        <div className="flex">
          <Link 
            href={"#portfolio"} 
            // className="border border-black rounded-full"
            // onMouseEnter={() => console.log("mouse enter")}
            // onMouseLeave={() => console.log("mouse leaving")}
          >
            {/* <ButtonX
              className="border border-white"
              fillingColor="blue"
              strokeColor="blue"
              onMouseEnter={() => console.log("mouse enter")}
            /> */}

            <Image 
              src={ArrowDownButton}
              // width={60}
              // height={60}
              stroke="red"
              alt="arrow down"
              title="Keep going for more"
              className={`border-2 border-gray-700 hover:border-white rounded-full hover:bg-yellow-400`}
              // style={{ filter: 'invert(100%)' }}
            />

          </Link> 
        </div>
      </div>
    </section>
  )
}

export default About;