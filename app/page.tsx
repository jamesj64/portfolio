import Image from "next/image";
import ScrollNav from "./scrollNav";
import BackgroundEffect from "./backgroundEffect";
import ExperienceCard from "./experienceCard";

//https://brittanychiang.com/

export default function Home() {
  return (
    <main className="lg:flex min-h-screen justify-between">
      {/* <nav className="lg:hidden absolute top-0 w-full bg-slate-700 h-12">

      </nav> */}
      <div className="lg:w-2/5 lg:top-0 lg:sticky lg:max-h-screen lg:p-24 p-4">
        <div className="bg-o-background w-fit">
          <h1 className="text-6xl md:mb-2 font-medium max-sm:tracking-tight max-sm:text-6xl">James Jordan</h1>
          <h2 className="text-2xl mb-10 max-sm:mb-4 font-light">Web Developer at BlackBerry</h2>
          <p className="text-lg leading-tight antialiased tracking-wider mb-12 font-extralight">Software Engineer seeking Winter 2023 internships.</p>
        </div>
        <ScrollNav />
        <ul className="max-w-xs mt-12 flex gap-x-2 md:gap-x-4 lg:gap-x-10" aria-label="Social Links">
          <li className="w-12 h-12" aria-label="Linkedin link">
            <a className="block" href="https://linkedin.com" target="_blank">
              <Image className="bg-o-background transition ease-in-out duration-150 hover:scale-125" src="/linkedin.svg" width={32} height={32} alt="Linkedin" />
            </a>
          </li>
          <li className="w-12 h-12" aria-label="Github link">
            <a className="block" href="https://linkedin.com" target="_blank">
              <Image className="bg-o-background transition ease-in-out duration-150 hover:scale-125" src="/github.svg" width={32} height={32} alt="GitHub" />
            </a>
          </li>
          <li className="w-12 h-12" aria-label="Email link">
            <a className="block" href="https://linkedin.com" target="_blank">
              <Image className="bg-o-background transition ease-in-out duration-150 hover:scale-125" src="/email.svg" width={32} height={32} alt="Email" />
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:w-3/5 p-16 pl-2 pr-2 pt-0 lg:pl-16 lg:pr-16 lg:pt-12">
        <section className="lg:mt-4 lg:p-8 pl-2 pr-2 pt-0 mt-0 relative mb-16 max-lg:pb-4 bg-o-background lg:border-2 rounded-xl border-section-outline shadow-xl" id="about">
          <h2 className="text-3xl mb-4">About</h2>
          <p className="text-xl font-thin leading-tight antialiased tracking-wider mb-4">
            Ever since learning about MIT&#39;s Scratch in my elementary school&#39;s computer lab, I&#39;ve been tinkering
            with new technologies to build cool projects I&#39;m excited about. I&#39;m currently studying
            Computer Science at the University of Waterloo.
          </p>
          <p className="text-xl font-thin leading-tight antialiased tracking-wider mb-4">
            Thus far, I&#39;ve been a fullstack engineer and co-founder
            of <a className="font-normal hover:text-link-highlighted" href="https://evoke-app.com">Evoke</a>, a freelance web developer for a local tutoring business, a web developer at <a className="font-normal hover:text-link-highlighted">BlackBerry</a>.
            In addition to my work experience, I&#39;ve worked on several projects about stuff I&#39;m passionate about, such as
            an <a className="font-normal hover:text-link-highlighted">Automated Theorem Prover</a>, several games in the Unity Game Engine (here&#39;s my favorite: <a className="font-normal hover:text-link-highlighted">title</a>),
            and a <a className="font-normal hover:text-link-highlighted">remote control goose powered by a Raspberry Pi.</a>
          </p>
          <p className="text-xl font-thin leading-tight antialiased tracking-wider">
            When I&#39;m not programming, you might find me reading about the philosophy of language or philosophical logic,
            going on long walks, or doing stuff with my two dogs. I also enjoy playing video games on occasion. Some of the games
            I&#39;ve been spending the most time with recently have been Factorio, Elden Ring, and both the old and new Battlefront 2 (the Star Wars ones).
          </p>
        </section>
        <section className="p-4 pb-0 mb-16 lg:pt-8 bg-o-background lg:border-2 rounded-xl border-section-outline shadow-xl" id="experience">
          <h2 className="text-3xl">Experience</h2>
          <ul className="mb-6 divide-y divide-slate-400">
            {/* <li className="group mb-8 relative w-full p-12 grid sm:grid-cols-8 cursor-pointer">
              <div className="absolute -inset-x-2 -inset-y-2 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-2 lg:block lg:group-hover:bg-experience-background lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <p className="z-10 text-md font-extralight antialiased tracking-wide sm:col-span-2">
                May 2023 - Aug 2023
              </p>
              <div className="sm:col-span-6 z-10 text-left sm:pl-8 md:pl-4 md:pr-12">
                <div className="mb-4">
                  <a className="leading-tight z-10 text-xl font-medium tracking-wide group-hover:text-link-highlighted">Web Developer - BlackBerry</a>
                </div>
                <h3 className="text-md font-light tracking-wide">Full stack web developmer for BlackBerry.
                  Authored pages and developed components and their associated server-side functionality in accordance with stakeholder requests on Jira.
                  specifications. Refactored existing code to significantly reduce technical debt and improve site efficiency.
                  Participated in daily scrum calls, presented original ideas and showcased work.</h3>
                <ul className="flex flex-wrap text-skill-color-text font-normal tracking-wider text-md leading-snug">
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">TypeScript</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Java</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">SCSS</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">XML</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Sightly/HTL</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">AEM</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Git</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Gitlab</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Agile</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Jira</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Confluence</div>
                  </li>
                </ul>
              </div>
            </li> */}
            <ExperienceCard
              startDate="May 2023"
              endDate="Aug 2023"
              title="Web Developer - BlackBerry"
              url="https://blackberry.com"
              description="Full stack web developer for BlackBerry. Authored pages and developed components and their associated server-side functionality in accordance with stakeholder requests on Jira. specifications. Refactored existing code to significantly reduce technical debt and improve site efficiency. Participated in daily scrum calls, presented original ideas and showcased work."
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
              essential user information, including cryptographically secure authentication tokens generated
              by the REST API. Configured GitHub Actions to establish CI/CD pipeline for building and
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
            {/* <li className="group mb-8 relative w-full p-12 grid sm:grid-cols-8 cursor-pointer">
              <div className="absolute -inset-x-2 -inset-y-2 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-2 lg:block lg:group-hover:bg-experience-background lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <p className="z-10 text-md font-extralight antialiased tracking-wide sm:col-span-2">
                Dec 2022 - May 2023
              </p>
              <div className="sm:col-span-6 z-10 text-left sm:pl-8 md:pl-4 md:pr-12">
                <div className="mb-4">
                  <a className="leading-tight z-10 text-xl font-medium tracking-wide group-hover:text-link-highlighted">
                    Fullstack Engineer - Evoke
                  </a>
                </div>
                <h3 className="text-md font-light tracking-wide">Led development of interactive React web
                  application. Designed and developed REST API with Node.js and Express to handle payment processing with Stripe’s API, validate user requests with
                  Firebase JWT’s and authenticate and charge clients for requests to AI models hosted on AWS EKS
                  cluster. Implemented a Firebase NoSQL Realtime Database with security rules for storing
                  essential user information, including cryptographically secure authentication tokens generated
                  by the REST API. Configured GitHub Actions to establish CI/CD pipeline for building and
                  deploying the web app and Node.js server. Performed unit testing with Postman, used cloud
                  services such as Google Cloud/Firebase, DigitalOcean.</h3>
                <ul className="flex flex-wrap text-skill-color-text font-normal tracking-wider text-md leading-snug">
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">React</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Node.js</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Express</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">TypeScript</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">DevOps</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">AWS</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">GCP</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Firebase</div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="group mb-0 relative w-full p-12 grid sm:grid-cols-8 cursor-pointer">
              <div className="absolute -inset-x-2 -inset-y-2 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-2 lg:block lg:group-hover:bg-experience-background lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <p className="z-10 text-md font-extralight antialiased tracking-wide sm:col-span-2">
                May 2020 - Aug 2021
              </p>
              <div className="sm:col-span-6 z-10 text-left sm:pl-8 md:pl-4 md:pr-12">
                <div className="mb-4">
                  <a className="leading-tight z-10 text-xl font-medium tracking-wide group-hover:text-link-highlighted">
                    Fullstack Developer - Freelance
                  </a>
                </div>
                <h3 className="text-md font-light tracking-wide">Full stack web development for local tutoring business.
                  Created interactive web applications in accordance with client specifications. Programmed and
                  utilized an interactive online whiteboard to improve the quality of math instruction and increase size
                  of clientele by 18%.</h3>
                <ul className="flex flex-wrap text-skill-color-text font-normal tracking-wider text-md leading-snug">
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">JavaScript</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">jQuery</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">SQL</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">PHP</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">HTML</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">CSS</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Bootstrap</div>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </section>
        <section className="p-4 pb-0 mb-8 lg:pt-8 bg-o-background lg:border-2 rounded-xl border-section-outline shadow-xl" id="projects">
          <h2 className="text-3xl">Projects</h2>
          <ul className="mb-6 divide-y divide-slate-400">
            <ExperienceCard
              startDate="Nov 2021"
              endDate="Present"
              title="Automated Theorem Prover"
              url="https://google.ca"
              skills={["F#", ".NET", "Functional Programming"]}
              description="Functionally programmed automated theorem prover in F#. Parses well-formed formulas and generates natural deduction proofs for valid inferences within sentential logic. Finite counter-model finder for invalid inferences."
            />
            <ExperienceCard
              startDate="Sep 2022"
              endDate="Dec 2022"
              title="Robot Goose"
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
