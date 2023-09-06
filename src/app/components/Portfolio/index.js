"use client";

import Blueprint from "./Blueprint";
import { useEffect, useRef, useState } from "react";
import items from "./items.json";

const Portfolio = () => {
  const [ onPortfolio, setOnPortfolio ] = useState(false);
  const [ initialState, setInitialState ] = useState(false);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !initialState) {
        setInitialState(true);
        setOnPortfolio(entry.isIntersecting);
      }
    });
    observer.observe(portfolioRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section className="bg-slate-300" id="portfolio">
    {/* <section className="bg-red-700" id="portfolio"> */}
      
      <div 
        className={`${onPortfolio ? "component-visible" : "component-hidden"} flex flex-col items-center w-full`}
      >
        <h1 className="text-4xl font-bold tracking-widest mt-7 mb-5 text-slate-900" ref={portfolioRef}>Portfolio</h1>
        
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
