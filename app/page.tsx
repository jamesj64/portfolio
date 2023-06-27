import Image from "next/image";
import ScrollNav from "./components/scrollNav";
import BackgroundEffect from "./components/backgroundEffect";
import ExperienceCard from "./components/experienceCard";

export default function Home() {
  return (
    <main className="lg:flex min-h-screen justify-between">
      <div className="lg:w-2/5 lg:top-0 lg:sticky lg:max-h-screen lg:p-24 p-4">
        <h1 className="bg-o-background w-fit text-6xl md:mb-2 font-medium max-sm:tracking-tight max-sm:text-6xl">James Jordan</h1>
        <h2 className="bg-o-background w-fit text-2xl mb-10 max-sm:mb-4 font-light">Web Developer at BlackBerry</h2>
        <p className="bg-o-background w-fit text-lg leading-tight antialiased tracking-wider mb-12 font-extralight">Software Engineer seeking Winter 2024 internships</p>
        <ScrollNav />
        <ul className="max-w-xs mt-12 flex gap-x-2 md:gap-x-4 lg:gap-x-10" aria-label="Social Links">
          <li className="w-12 h-12" aria-label="Linkedin link">
            <a className="block" href="https://www.linkedin.com/in/james-j-39466b252" target="_blank">
              <Image className="bg-o-background transition ease-in-out duration-150 hover:scale-125" src="images/linkedin.svg" width={32} height={32} alt="Linkedin" />
            </a>
          </li>
          <li className="w-12 h-12" aria-label="Github link">
            <a className="block" href="https://github.com/jamesj64/" target="_blank">
              <Image className="bg-o-background transition ease-in-out duration-150 hover:scale-125" src="images/github.svg" width={32} height={32} alt="GitHub" />
            </a>
          </li>
          {/* <li className="w-12 h-12" aria-label="CV link">
            <a className="block" href="#UpdateThis" target="_blank">
              <Image className="bg-o-background transition ease-in-out duration-150 hover:scale-125" src="images/cv.svg" width={32} height={32} alt="CV" />
            </a>
          </li> */}
          <li className="w-12 h-12" aria-label="Email link">
            <a className="block" href="mailto: jamesjordan2027@gmail.com">
              <Image className="bg-o-background transition ease-in-out duration-150 hover:scale-125" src="images/email.svg" width={32} height={32} alt="email" />
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:w-3/5 p-16 pl-2 pr-2 pt-0 lg:pl-16 lg:pr-16 lg:pt-12" id="about">
        <section className="lg:mt-4 lg:p-8 pl-2 pr-2 pt-0 mt-0 relative mb-16 max-lg:pb-4 bg-o-background lg:border-2.5 rounded-xl border-section-outline shadow-xl">
          <h2 className="text-3xl mb-4">About</h2>
          <p className="text-xl font-thin leading-snug antialiased tracking-wider mb-4">
            Ever since learning MIT&#39;s Scratch programming language in my elementary school&#39;s computer lab, I&#39;ve been experimenting
            with new technologies to build cool projects I&#39;m excited about. I&#39;m currently studying
            Computer Science at the University of Waterloo.
          </p>
          <p className="text-xl font-thin leading-snug antialiased tracking-wider mb-4">
            So far, I&#39;ve been a fullstack engineer and co-founder
            of <a className="font-normal hover:text-link-highlighted" href="https://evoke-app.com" target="_blank">Evoke</a>, a freelance web developer for a local tutoring business, and a web developer at <a href="https://blackberry.com/" className="font-normal hover:text-link-highlighted" target="_blank">BlackBerry</a>.
            In addition to my work experience, I&#39;ve worked on several projects about stuff I&#39;m passionate about, such as
            an <a href="https://github.com/jamesj64/Automated-Theorem-Prover" className="font-normal hover:text-link-highlighted" target="_blank">Automated Theorem Prover</a>, several games in the Unity Game Engine (<a href="https://jamesj63.itch.io/coldblooded" className="font-normal hover:text-link-highlighted" target="_blank">Coldblooded</a> is my favorite),
            and a <a href="https://github.com/jamesj64/goose2" className="font-normal hover:text-link-highlighted" target="_blank">remote control goose powered by a Raspberry Pi.</a>
          </p>
          <p className="text-xl font-thin leading-normal antialiased tracking-wider">
            When I&#39;m not programming, you might find me reading about the philosophy of language or philosophical logic,
            going on long walks, or doing stuff with my two dogs. I also enjoy playing video games on occasion. Some of the games
            I&#39;ve been spending the most time with recently have been Factorio, Elden Ring, and both the old and new Battlefront 2 (the Star Wars ones).
            <Image src="/images/ct.webp" className="inline-block ml-1 transition ease-in-out duration-150 hover:scale-105" alt="Clone Trooper" width={32} height={32}/>
          </p>
        </section>
        <section className="p-4 pb-0 mb-16 lg:pt-8 bg-o-background lg:border-2.5 rounded-xl border-section-outline shadow-xl" id="experience">
          <h2 className="text-3xl">Experience</h2>
          <ul className="mb-6 divide-y divide-slate-400">
            <ExperienceCard
              startDate="May 2023"
              endDate="Aug 2023"
              title="Web Developer - BlackBerry"
              url="https://blackberry.com"
              relativeImagePath="/images/bb.jpg"
              description="Full stack web developer for BlackBerry. Authored pages and developed components and their associated server-side functionality in accordance with stakeholder requests on Jira. Refactored existing code to significantly reduce technical debt and improve site efficiency. Participated in daily scrum calls, presented original ideas and showcased work."
              skills={["TypeScript", "Java", "SCSS", "XML", "Sightly/HTL", "AEM", "Git", "Gitlab", "Agile", "Jira", "Confluence"]}
            />
            <ExperienceCard
              startDate="Dec 2022"
              endDate="May 2023"
              title="Fullstack Engineer - Evoke"
              url="https://evoke-app.com"
              description="Led development of interactive React web
              application. Designed and developed REST API with Node.js and Express to handle payment processing with Stripe’s API, validate user requests with
              Firebase JWT’s and authenticate and charge clients for requests to AI models hosted on AWS EKS
              cluster. Implemented a Firebase NoSQL Realtime Database with security rules for storing
              essential user information. Configured GitHub Actions to establish CI/CD pipeline for building and
              deploying the web app and Node.js server. Performed unit testing with Postman, used cloud
              services such as Google Cloud/Firebase, DigitalOcean."
              skills={["React", "Node.js", "Express.js", "TypeScript", "DevOps", "AWS", "GCP", "Firebase"]}
            />
            <ExperienceCard
              startDate="May 2020"
              endDate="Aug 2021"
              title="Fullstack Developer - Freelance"
              description="Full stack web development for local tutoring business. Created interactive web applications in accordance with client specifications. Programmed and utilized an interactive online whiteboard to improve the quality of math instruction and increase size of clientele by 18%."
              skills={["JavaScripts", "JQuery", "SQL", "PHP", "HTML", "CSS", "Bootstrap"]}
            />
          </ul>
        </section>
        <section className="p-4 pb-0 mb-8 lg:pt-8 bg-o-background lg:border-2.5 rounded-xl border-section-outline shadow-xl" id="projects">
          <h2 className="text-3xl">Projects</h2>
          <ul className="mb-6 divide-y divide-slate-400">
            <ExperienceCard
              startDate="May 2023"
              endDate="Present"
              title="Hack & Slash"
              relativeImagePath="/images/controller.svg"
              skills={["C#", "OOP", "Unity Game Engine"]}
              description="Developing hack and slash game for WebGL and Desktop platforms in the Unity Game Engine. More to come soon..."
            />
            <ExperienceCard
              startDate="Nov 2021"
              endDate="Present"
              title="Automated Theorem Prover"
              url="https://github.com/jamesj64/Automated-Theorem-Prover"
              skills={["F#", ".NET", "Functional Programming"]}
              description="Functionally programmed automated theorem prover in F#. Parses well-formed formulas and generates natural deduction proofs for valid inferences within sentential logic. Finite counter-model finder for invalid inferences."
            />
            <ExperienceCard
              startDate="Sep 2022"
              endDate="Dec 2022"
              title="Robot Goose"
              url="https://github.com/jamesj64/goose2"
              skills={["Python", "Flask", "Git", "JQuery", "AJAX"]}
              description="Developed Flask server in Python to enable remote control of goose robot over local area network. Implemented object detection, developed client to communicate with Flask server in JS with jQuery and Bootstrap."
            />
          </ul>
        </section>
      </div>
      <BackgroundEffect />
    </main>
  );
};
