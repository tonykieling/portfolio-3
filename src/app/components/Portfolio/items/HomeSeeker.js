import Image from "next/image";

export default function HomeSeeker() {
  return (
    <article className="w-3/4 flex flex-col p-4 m-8 border border-slate-700 rounded-md">
      <p className="flex text-left text-3xl font-bold mb-4">
        <a target="_blank" rel="noopener noreferrer"
          href="https://home-seeker.tkwebdev.ca" 
          className="mr-4 hover:text-blue-700 hover:underline"
        > Home Seeker </a>
        <a target="_blank" href="https://home-seeker.tkwebdev.ca" rel="noopener noreferrer" className="mr-3">
          <Image
            src={"/images/internet.svg"}
            width={28}
            height={28}
            alt="Home Seeker"
            title="Website"
          />
        </a>
        <a target="_blank" href="https://github.com/tonykieling/home-seeker" rel="noopener noreferrer">
          <Image
            src={"/images/github.svg"}
            width={28}
            height={28}
            alt="GitHub"
            title="GitHub"
          />
        </a>
      </p>
      {/* <p className="text-lg">Introducing an all in one system that allows you to conveniently manage and track all your clients and their related data, clockins, and invoices.</p> */}
      <p className="text-lg">An automated system to web scrape information from Craigslist about rentals availability.</p>
      <p className="text-lg">This has helped my wife and I to find our new home, quickly and easily receiving notifications to shortcut our search.</p>
      <p className="text-lg">Mission accomplished and happy new homers! 🏠😊</p>
      <p className="text-lg"><span className="font-bold">Main Tech stack: </span>Node.js, React, Atlas MongoDB, Node-Mailer, CSS, and React-Modal.</p>
      <div className="flex flex-col items-center my-4">
        <div className="flex">
          <Image 
            src={"/images/home-seeker-1.jpg"}
            width={400}
            height={400}
            alt="Home Seeker's picture"
            className="rounded-md border-4"
          />

          <Image 
            src={"/images/home-seeker-2.jpg"}
            width={400}
            height={400}
            alt="Home Seeker's picture"
            className="rounded-md border-4"
          />
        </div>

        <div className="flex">
          <Image 
            src={"/images/home-seeker-3.jpg"}
            width={400}
            height={400}
            alt="Home Seeker's picture"
            className="rounded-md border-4"
          />

          <Image 
            src={"/images/home-seeker-4.jpg"}
            width={400}
            height={400}
            alt="Home Seeker's picture"
            className="rounded-md border-4"
          />
        </div>
      </div>
    </article>
  );
}