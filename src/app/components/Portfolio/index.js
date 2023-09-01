import WebDevPath from "./items/WebDevPath";
import Clockin from "./items/Clockin";
import HomeSeeker from "./items/HomeSeeker";

const Portfolio = () => {
  return (
    <section className="flex flex-col items-center bg-stone-200" id="portfolio">
      <h1 className="text-4xl font-semibold mt-7 mb-5">Portfolio</h1>
      <p className="text-lg">Some of the projects I have been working on:</p>
      
      <WebDevPath />
      <Clockin />
      <HomeSeeker />

    </section>
  )
}

export default Portfolio;
