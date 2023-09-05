import items from "./items.json";
import Blueprint from "./Blueprint";

const Portfolio = () => {
  return (
    // <section className="flex flex-col items-center bg-[#273448]" id="portfolio">
    // <section className="flex flex-col items-center bg-[#FEFEFE]" id="portfolio">
    <section className="flex flex-col items-center bg-slate-300" id="portfolio">
      
      <h1 className="text-4xl font-semibold mt-7 mb-5 text-slate-900">Portfolio</h1>
      {/* <p className="text-lg">Some of the projects I have been working on:</p> */}
      
      { items.map((props, index) => (
          <div key={index} className="w-full min-[700px]:w-3/4">
            <Blueprint
              props = {props}
            />
          </div>
        )
      )}

    </section>
  )
}

export default Portfolio;
