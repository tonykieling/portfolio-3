import Image from "next/image";

export default function Clockin() {
  return (
    <article className="w-3/4 flex flex-col p-4 m-8 border border-slate-700 rounded-md">
      <p className="flex text-left text-3xl font-bold mb-4">
        <a target="_blank" rel="noopener noreferrer"
          href="https://clockin.tkwebdev.ca" 
          className="mr-4 hover:text-blue-700 hover:underline"
        > Clockin.js </a>
        <a target="_blank" href="https://clockin.tkwebdev.ca" rel="noopener noreferrer" className="mr-3">
          <Image
            src={"/images/internet.svg"}
            width={28}
            height={28}
            alt="Clokin.js"
            title="Website"
          />
        </a>
        <a target="_blank" href="https://github.com/tonykieling/clockinJS" rel="noopener noreferrer">
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
      <p className="text-lg">A systems that allows you to have all your clients data, their clockins and invoices, in one place.</p>
      <p className="text-lg">It is easy to manage and track your work with them because it presents an easy and straightforward workflow to control clockins and invoices.</p>
      <p className="text-lg">Best of all, it&apos;s free! 🤑</p>
      <p className="text-lg"><span className="font-bold">Main Tech stack: </span>React, MongoDB, Bootstrap, Redux, JSON Web Token.</p>
      <div className="flex flex-col items-center my-4">
        <div className="flex">
          <Image 
            src={"/images/clockin-1.jpg"}
            width={400}
            height={400}
            alt="Clockin.js's picture"
            className="rounded-md border-4"
          />

          <Image 
            src={"/images/clockin-2.jpg"}
            width={400}
            height={400}
            alt="Clockin.js's picture"
            className="rounded-md border-4"
          />
        </div>

        <div className="flex">
          <Image 
            src={"/images/clockin-3.jpg"}
            width={400}
            height={400}
            alt="Clockin.js's picture"
            className="rounded-md border-4"
          />

          <Image 
            src={"/images/clockin-4.jpg"}
            width={400}
            height={400}
            alt="Clockin.js's picture"
            className="rounded-md border-4"
          />
        </div>
      </div>
    </article>
  );
}