"use client";

import Blueprint from "./Blueprint";
import { useEffect, useRef, useState } from "react";
import items from "./items.json";
import { GlobalContext } from "../context";
import { useContext } from "react";

const Portfolio = () => {
  const [ onPortfolio, setOnPortfolio ] = useState(false);
  const [ initialState, setInitialState ] = useState(true);
  const { setCurrentMenu } = useContext(GlobalContext);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && initialState) {
          setOnPortfolio(true);
          setInitialState(false);
        }

        if (entry.isIntersecting) setCurrentMenu("portfolio");

      },
      { threshold: 0.1 }
    );

    observer.observe(portfolioRef.current);

    return() => {
      // if (portfolioRef?.current) observer.unobserve(portfolioRef);
      observer.disconnect();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section className="bg-slate-300 z-10" id="portfolio" ref={portfolioRef}>
      
      <div 
        className={`${onPortfolio ? "component-visible" : "component-hidden"} flex flex-col items-center w-full`}
      >
        {/* { window.innerHeight } */}
        <h1 className="text-4xl font-bold tracking-widest mt-7 mb-5 text-slate-900">Portfolio</h1>
        <h2 className="text-lg font-semibold tracking-wide text-center"> Some of the projects I&apos;ve been collaborating with:</h2>
        
        { items.map((props, index) => (
            <div key={index} className="w-full min-[700px]:w-3/4">
              <Blueprint
                props = {props}
              />
            </div>
          )
        )}

      </div>

    </section>
  )
}

export default Portfolio;
