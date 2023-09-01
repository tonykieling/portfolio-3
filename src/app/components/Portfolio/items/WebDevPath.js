import Image from "next/image";

export default function WebDevPath() {
  return (
    <article className="w-3/4 flex flex-col p-4 m-8 border border-slate-700 rounded-md">
      <p className="flex text-left text-3xl font-bold mb-4">
        <a target="_blank" rel="noopener noreferrer"
          href="https://www.webdevpath.co" 
          className="mr-4 hover:text-blue-700 hover:underline"
        > Web Dev Path </a>
        <a target="_blank" href="https://www.webdevpath.co" rel="noopener noreferrer" className="mr-3">
          <Image
            src={"/images/internet.svg"}
            width={28}
            height={28}
            alt="WebDevPath"
            title="Website"
          />
        </a>
        <a target="_blank" href="https://github.com/Web-Dev-Path/web-dev-path" rel="noopener noreferrer">
          <Image
            src={"/images/github.svg"}
            width={28}
            height={28}
            alt="GitHub"
            title="GitHub"
          />
        </a>
      </p>
      <p className="text-lg">It&apos;s is an open source project that aims to provide a comprehensive path for tech professionals to work in a team environment.</p>
      <p className="text-lg">I have been colaborating with the team, commiting code, discuting solutions, and helping the project to achive their goals.</p>
      <p className="text-lg"><span className="font-bold">Main Tech stack: </span>Next.js, React, Mailchimp, SendEmail.</p>
      <div className="flex justify-center my-4">
        <Image 
            src={"/images/web-dev-path.jpg"}
            width={600}
            height={600}
            alt="WebDevPath's picture"
            className="rounded-md border-4"
        />
      </div>
    </article>
  );
}