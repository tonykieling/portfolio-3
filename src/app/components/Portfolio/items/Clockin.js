import Image from "next/image";
import githubIcon from "../../../images/github.svg";
import internet from "../../../images/internet.svg";
import clockin1 from "../../../images/clockin-1.jpg";
import clockin2 from "../../../images/clockin-2.jpg";
import clockin3 from "../../../images/clockin-3.jpg";
import clockin4 from "../../../images/clockin-4.jpg";

export default function Clockin() {
  return (
    <article className="w-3/4 flex flex-col p-4 m-8 border border-slate-700 rounded-md" id="about">
      <p className="flex text-left text-3xl font-bold mb-4">
        <a target="_blank" rel="noopener noreferrer"
          href="https://clockin.tkwebdev.ca" 
          className="mr-4 hover:text-blue-700 hover:underline"
        > Clockin.js </a>
        <a target="_blank" href="https://clockin.tkwebdev.ca" rel="noopener noreferrer" className="mr-3">
          <Image
            src={internet}
            width={28}
            height={28}
            alt="Clokin.js"
            title="Website"
          />
        </a>
        <a target="_blank" href="https://github.com/tonykieling/clockinJS" rel="noopener noreferrer">
          <Image
            src={githubIcon}
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
            src={clockin1}
            width={400}
            height={400}
            alt="WebDevPath's picture"
            className="rounded-md border-4"
          />

          <Image 
            src={clockin2}
            width={400}
            height={400}
            alt="WebDevPath's picture"
            className="rounded-md border-4"
          />
        </div>

        <div className="flex">
          <Image 
            src={clockin3}
            width={400}
            height={400}
            alt="WebDevPath's picture"
            className="rounded-md border-4"
          />

          <Image 
            src={clockin4}
            width={400}
            height={400}
            alt="WebDevPath's picture"
            className="rounded-md border-4"
          />
        </div>
      </div>
    </article>
  );
}