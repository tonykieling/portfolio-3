import Image from "next/image";
import Link from "next/link";

const About = () => {

  return (
    <section className="bg-[#D9EAF4] h-[calc(100vh-(var(--header-height)))] flex flex-col" id="about">

      <div className="h-[calc((100vh-68px)*0.8)] max-[550px]:h-[calc((100vh-68px)*0.85)]">
        <div className="flex h-full max-[550px]:flex-col max-[550px]:items-center">
          <div className="w-3/5 h-full ml-40 flex flex-col items-center justify-center max-[1000px]:ml-14 max-[800px]:ml-4 max-[550px]:order-3 max-[550px]:w-11/12 max-[550px]:ml-0 max-[550px]:text-center max-[550px]:h-1/2 max-[550px]:justify-start">
            <p className="font-extrabold tracking-widest text-5xl mb-8 text-center max-[550px]:text-3xl max-[550px]:mb-4">Tony Kieling</p>
            <p className="mx-16 text-2xl leading-loose max-[900px]:leading-relaxed max-[900px]:mx-4 max-[750px]:text-xl max-[750px]:leading-loose max-[550px]:text-lg text-[#273448]">
              A <b>Software Engineer</b> / <b>Full Stack Developer</b> with expertise in Javascript ecosystems, mainly React and Node.js, and more. Strong problem-solving & detail-oriented skills with a collaborative mindset.
            </p>
          </div>
          
          <div className="h-full w-2/5 flex items-center justify-start p-4 max-[550px]:order-1 max-[550px]:h-1/2 max-[550px]:w-1/2 max-[450px]:w-3/5" id="about">
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
      
      <div className="h-[calc((100vh-68px)*0.2)] max-[550px]:h-[calc((100vh-68px)*0.15)] flex justify-center items-center">
        <div className="flex">
          <Link 
            href={"#portfolio"} 
          >
            <Image 
              src={"/images/arrow-down.svg"}
              width={60}
              height={60}
              alt="arrow down"
              title="Keep going for more"
              className={`border-2 border-gray-700 hover:border-white rounded-full hover:bg-gray-400`}
            />

          </Link> 
        </div>
      </div>
    </section>
  )
}

export default About;