"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Blueprint(
  { props: {name, website, github, description, images, techStack} }
) {

  return (
    // <article className="relative z-0 flex flex-col p-7 pb-19 my-5 max-[800px]:mx-1 min-[800px]:my-8 border rounded-md bg-[#D9EAF4]">
    <article className="relative z-0 flex flex-col p-7 pb-19 my-5 max-[800px]:mx-1 min-[800px]:my-8 rounded-md bg-slate-300">

      {/* <div className="absolute top-[-7px] left-[-7px] w-40 h-40 border-s-2 border-t-2 border-slate-400"></div> */}

      <p className="flex text-left text-3xl font-bold mb-3">
        <a target="_blank" rel="noopener noreferrer"
          href={website} 
          className="mr-4 hover:text-blue-700 hover:underline"
        > { name } </a>
        <a target="_blank" href={website} rel="noopener noreferrer" className="mr-3 flex items-center">
          <Image
            src={"/images/internet.svg"}
            width={28}
            height={28}
            alt={ name }
            title="Website"
          />
        </a>
        <a target="_blank" href={github} rel="noopener noreferrer" className="mr-3 flex items-center">
          <Image
            src={"/images/github.svg"}
            width={28}
            height={28}
            alt="GitHub"
            title="GitHub"
          />
        </a>
      </p>
      
      <div className="flex justify-center">
        <div className="w-full min-[800px]:w-3/5 mb-3 hover:cursor-pointer" title="Click to visit the website">
          { images.length === 1
              ?
                <Image
                  src={`/images/${images[0]}`}
                  width={800}
                  height={400}
                  alt={`${name}'s picture`}
                  className="rounded-md border-4"
                  onClick={() => window.open(website, "_blank")}
                  priority={true}
                  placeholder="blur"
                  blurDataURL={`/images/${images[0]}`}
                />
              :
                <Carousel 
                  autoPlay
                  showArrows={true}
                  infiniteLoop 
                  showThumbs={false} 
                  showIndicators={false}
                  onClickItem={() => window.open(website, "_blank")}
                  interval="3333"
                >
                    { images.map((image, index) => (
                        <div key={index} style={{textAlign: "center"}}>
                          <Image
                            src={`/images/${image}`}
                            width={800}
                            height={400}
                            alt={`${name}'s picture`}
                            className="rounded-md border-4"
                            priority={true}
                            placeholder="blur"
                            blurDataURL={`/images/${images[0]}`}
                          />
                        </div>
                    ))}
                </Carousel>
          }
        </div>
      </div>

      { description.map((desc, index) => <p key={index} className="text-lg"> { desc } </p>)}

      <p className="text-lg mt-2"><span className="font-bold">Tech stack includes: </span>{ techStack }</p>


      {/* <div className="absolute bottom-[-2px] right-2 max-[800px]:bottom-1 min-[800px]:right-[25px] w-40 h-40 border-e-2 border-b-2 border-slate-400"></div> */}
      {/* <div className="w-3/4 border-[3px] self-center mb-4 mt-6 border-slate-400"></div> */}


    </article>
  );
}