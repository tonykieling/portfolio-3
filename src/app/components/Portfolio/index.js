"use client";

import Blueprint from "./Blueprint";
import { useEffect, useRef, useState } from "react";
import items from "./items.json";
import { GlobalContext } from "../context";
import { useContext } from "react";

const Portfolio = () => {
  const [ onPortfolio, setOnPortfolio ] = useState(false);
  const [ initialState, setInitialState ] = useState(false);
  const { setCurrentMenu } = useContext(GlobalContext);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !initialState) {
          setInitialState(true);
          setOnPortfolio(entry.isIntersecting);
        }

        if (entry.isIntersecting) setCurrentMenu("portfolio");

      },
      { rootMargin: "-300px" }
    );

    observer.observe(portfolioRef.current);

    return() => {
      if (portfolioRef.current) observer.unobserve(portfolioRef.current);
      observer.disconnect();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section className="bg-slate-300" id="portfolio" ref={portfolioRef}>
      
      <div 
        className={`${onPortfolio ? "component-visible" : "component-hidden"} flex flex-col items-center w-full`}
      >
        <h1 className="text-4xl font-bold tracking-widest mt-7 mb-5 text-slate-900">Portfolio</h1>
        
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
