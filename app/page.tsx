import Image from "next/image"

//https://brittanychiang.com/

export default function Home() {
  return (
    <main className="lg:flex min-h-screen justify-between">
      <div className="lg:w-2/5 lg:top-0 lg:sticky lg:max-h-screen lg:p-24 md:p-16 p-10">
        <h1 className="text-6xl mb-2 font-medium">James Jordan</h1>
        <h2 className="text-2xl mb-10 font-extralight">Web Developer at BlackBerry</h2>
        <p className="text-lg font-thin leading-tight antialiased tracking-wider">Software Engineer seeking Winter 2023 internships.</p>
        <ul className="max-w-xs mt-12 flex gap-x-10" aria-label="Social Links">
          <li className="w-12 h-12" aria-label="Linkedin link">
            <a className="block" href="https://linkedin.com" target="_blank">
              <Image src="/linkedin.svg" width={32} height={32} alt="Linkedin"/>
            </a>
          </li>
          <li className="w-12 h-12" aria-label="Github link">
            <a className="block" href="https://linkedin.com" target="_blank">
              <Image src="/github.svg" width={32} height={32} alt="GitHub"/>
            </a>
          </li>
          <li className="w-12 h-12" aria-label="Email link">
            <a className="block" href="https://linkedin.com" target="_blank">
              <Image src="/email.svg" width={32} height={32} alt="Email"/>
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:w-3/5 p-16">
        <section className="mb-24">
          <h2 className="text-3xl mb-4">About</h2>
          <p className="text-xl font-thin leading-tight antialiased tracking-wider mb-4">
            Ever since learning about MIT's Scratch in my elementary school's computer lab, I've been tinkering
            with new technologies to build cool projects I'm excited about. I'm currently studying
            Computer Science at the University of Waterloo.
          </p>
          <p className="text-xl font-thin leading-tight antialiased tracking-wider mb-4">
            Thus far, I've been a fullstack engineer and co-founder
            of <a className="font-normal hover:text-link-highlighted" href="https://evoke-app.com">Evoke</a>, a freelance web developer for a local tutoring business, a web developer at <a className="font-normal hover:text-link-highlighted">BlackBerry</a>.
            In addition to my work experience, I've worked on several projects about stuff I'm passionate about, such as
            an <a className="font-normal hover:text-link-highlighted">Automated Theorem Prover</a>, several games in the Unity Game Engine (here's my favorite: <a className="font-normal hover:text-link-highlighted">title</a>),
            and a <a className="font-normal hover:text-link-highlighted">remote control goose powered by a Raspberry Pi.</a>
          </p>
          <p className="text-xl font-thin leading-tight antialiased tracking-wider">
            When I'm not programming, you might find me reading about the philosophy of language or philosophical logic,
            going on long walks, or doing stuff with my two dogs. I also enjoy playing video games on occasion. Some of the games
            I've been spending the most time with recently have been Factorio, Elden Ring, and both the old and new Battlefront 2 (the Star Wars ones).
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl mb-8">Experience</h2>
          <ul className="mb-8">
            <li className="m-2 group relative w-full p-12 grid sm:grid-cols-8 cursor-pointer">
              <div className="absolute -inset-x-2 -inset-y-2 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-2 lg:block lg:group-hover:bg-experience-background lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <p className="z-10 text-md font-extralight antialiased tracking-wide sm:col-span-2">
                May 2023 - Aug 2023
              </p>
              <div className="sm:col-span-6 z-10 text-left sm:pl-8 md:pl-4 md:pr-12">
                <div className="mb-4">
                  <a className="leading-tight z-10 text-xl font-medium tracking-wide group-hover:text-link-highlighted">Web Developer - BlackBerry</a>
                </div>
                <h3 className="text-md font-light tracking-wide">Developed new components and their associated server-side
                functionality for BlackBerry pages. Authored new pages in accordance with stakeholder requests on Jira,
                presented original ideas and showcased work on daily scrum calls.</h3>
                <ul className="flex flex-wrap text-skill-color-text font-normal tracking-wider text-md leading-snug">
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">TypeScript</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">SCSS</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Java</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Sightly/HTL</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">AEM</div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="mb-4">
            <li className="m-2 group relative w-full p-12 grid sm:grid-cols-8 cursor-pointer">
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
                <h3 className="text-md font-light tracking-wide">Developed new components and their associated server-side
                functionality for BlackBerry pages. Authored new pages in accordance with stakeholder requests on Jira,
                presented original ideas and showcased work on daily scrum calls.</h3>
                <ul className="flex flex-wrap text-skill-color-text font-normal tracking-wider text-md leading-snug">
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">TypeScript</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">SCSS</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Java</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">Sightly/HTL</div>
                  </li>
                  <li className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">AEM</div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <h2 className="text-4xl">Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf Hijdskljflksdf </h2>
      </div>
    </main>
  )
}
