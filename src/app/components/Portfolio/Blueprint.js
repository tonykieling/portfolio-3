"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useRef, useState } from "react";

import { GlobalContext } from "../context";
import { useContext } from "react";

export default function Blueprint(
  { props: {name, website, github, description, images, techStack} }
) {

  const { loadImages } = useContext(GlobalContext);
  const [ onItem, setOnItem ] = useState(false);
  const [ initialState, setInitialState ] = useState(true);

  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && initialState) {
        setOnItem(true);
        setInitialState(false);
      }
    },
    { threshold: 0.15 }
    );

    observer.observe(itemRef.current);

    return() => {
      // if (itemRef) observer.unobserve(itemRef);
      observer.disconnect();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <article className={`relative z-0 flex flex-col p-7 pb-19 my-6 max-[600px]:my-8 max-[800px]:mx-1 min-[800px]:my-8 rounded-md bg-slate-300 ${onItem ? "portfolio-item-visible" : "portfolio-item-hidden"}`} ref={itemRef}>

      <p className="flex text-3xl font-bold mb-5">
        <a target="_blank" rel="noopener noreferrer"
          href={website} 
          className="mr-4 hover:text-blue-700 hover:underline"
        > { name } </a>

        { loadImages &&
            <>
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
            </>
        }
      </p>
      
      {/* some tests claim that setting loadImages as below it is more performant for lighthouse purposes */}
      { loadImages &&
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
                      interval="4444"
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
      }

      { description.map((desc, index) => <p key={index} className="text-lg"> { desc } </p>)}

      <p className="text-lg mt-2"><span className="font-bold">Tech stack includes: </span>{ techStack }</p>

    </article>
  );
}