"use client"

import Link from "next/link";
import anime from "animejs";
import { useEffect } from "react";

interface Advert {
  url: string,
  text: string,
  duration?: number
}

export default function Advert(props: Advert) {

  // anime({
  //   targets: letterRef,
  //   scale: 1.5,
  //   loop: true,
  // });

  const letters = Array.from(props.text);

  const duration = props.duration || 1000;

  const letterDelay = duration / (letters.length + 1);

  useEffect(() => {
    
    const timeline = anime.timeline({
      autoplay: true,
      loop: true
    });

    timeline.add({
      targets: ".letter",
      opacity: [0, 1],
      //translateY: ["0px", "20px"],
      duration: duration,
      delay: (el, i) => letterDelay * i,
      easing: "easeOutExpo"
    });

  }, []);

  return (
    <Link href={props.url} className="text-3xl font-regular">
      {
        letters.map((letter: string, i: number) => (
          <span key={i} className={letter === " " ? undefined : "letter"}>{letter}</span>
        ))
      }
      <b className="letter"> &rarr;</b>
    </Link>
  );
}