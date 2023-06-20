interface Experience {
  startDate: string,
  endDate: string,
  title: string,
  description: string,
  url?: string,
  skills: string[],
}

export default function ExperienceCard(props: Experience) {
  return (
    <li className="group relative w-full p-12 grid sm:grid-cols-8">
      <a href={props.url} target="_blank" className="w-full h-full absolute top-0 left-0 z-20"><p className="hidden sr-only:visible">{props.title}</p></a>
      <div className="absolute -inset-x-2 inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-2 lg:block lg:group-hover:bg-experience-background lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <p className="z-10 text-md font-extralight antialiased tracking-wide sm:col-span-2">
        {`${props.startDate} - ${props.endDate}`}
      </p>
      <div className="sm:col-span-6 z-10 text-left sm:pl-8 md:pl-4 md:pr-12">
        <div className="mb-4">
          <a className="leading-tight z-10 text-xl font-medium tracking-wide group-hover:text-link-highlighted">{props.title}</a>
        </div>
        <h3 className="text-md font-light tracking-wide">{props.description}</h3>
        <ul className="flex flex-wrap text-skill-color-text font-normal tracking-wider text-md leading-snug">
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