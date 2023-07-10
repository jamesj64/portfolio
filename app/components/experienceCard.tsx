import Image from "next/image"

interface Experience {
  startDate: string,
  endDate: string,
  title: string,
  description: string,
  url?: string,
  relativeImagePath?: string,
  skills: string[],
}

export default function ExperienceCard(props: Experience) {
  return (
    <li className="group relative w-full p-12 grid md:grid-cols-8 lg:pl-6 xl:pl-10 max-sm:pr-0 pl-0 pr-0 xl:pr-12">
      {props.url && <a href={props.url} aria-label={props.title} target="_blank" className="w-full h-full absolute top-0 left-0 z-20"/>}
      <div className="absolute -inset-x-2 inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-2 lg:block lg:group-hover:bg-experience-background lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <p className="z-10 text-md font-extralight antialiased tracking-wide sm:col-span-2">
        {`${props.startDate} - ${props.endDate}`}
      </p>
      <div className="sm:col-span-6 z-10 text-left pl-0 md:pl-4 md:pr-12 lg:pr-8 xl:pr-6">
        <div className="mb-4">
          <h2 className="leading-tight z-10 text-xl font-medium tracking-wide group-hover:text-link-highlighted">
            {props.title}
            {props.relativeImagePath && <Image src={props.relativeImagePath} className="inline-block ml-2 group-hover:scale-105 transition ease-in-out duration-150" alt={props.title} width={32} height={32}/>}
          </h2>
        </div>
        <h3 className="text-md font-light tracking-wide">{props.description}</h3>
        <ul className="flex flex-wrap text-skill-color-text font-medium tracking-wider text-sm leading-snug">
          {props.skills.map(skill => (
            <li className="mr-2 mt-2" key={skill}>
              <div className="flex items-center rounded-full bg-skill-color px-3 py-1.5">{skill}</div>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}