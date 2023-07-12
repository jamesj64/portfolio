import Link from "next/link";
import Image from "next/image";

interface DemoCard {
  title: string,
  description: string,
  url: string,
  internalLink?: boolean,
  previewImg: string
}

export default function DemoCard(props: DemoCard) {
  return (
    <li className="relative w-full md:w-5/12 xl:w-3/12 grid md:grid-cols-8 justify-around group content-center w-min:w-max border-2 rounded-md bg-o-background max-md:mb-8">
      {props.url && (
        props.internalLink ?
          <Link href={props.url} aria-label={props.title} className="w-full h-full absolute top-0 left-0 z-20" />
          : <a href={props.url} aria-label={props.title} target="_blank" className="w-full h-full absolute top-0 left-0 z-20" />
      )}
      <div className="absolute w-full h-full z-0 hidden rounded-md transition motion-reduce:transition-none md:block md:group-hover:bg-experience-background md:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] md:group-hover:drop-shadow-lg"/>
      <p className="z-10 sm:col-span-2 hidden md:block pt-1 pl-2">
        <Image src={props.previewImg} alt={props.title} width={100} height={100}/>
      </p>
      <div className="z-10 sm:col-span-6 pl-5 pb-4 pr-2 pt-2">
        <h2 className="text-xl group-hover:text-link-highlighted">{props.title}</h2>
        <p className="text-md font-extralight">{props.description}</p>
      </div>
    </li>
  );
}