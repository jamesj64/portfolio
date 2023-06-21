"use client"

import { useEffect, useState } from "react";

import anime from "animejs";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const aboutCutoff: number = -500;

const experienceCutoff: number = -1600;

export default function ScrollNav() {
  const [isMobile, setMobile] = useState(true);
  const [inScrollAnim, setInScrollAnim] = useState(false);
  const [currState, setCurrState] = useState(-1);

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      if (id === "experience") {
        animNow(-600);
        setInScrollAnim(true);
        setTimeout(() => setInScrollAnim(false), 750);
      } else if (id === "projects" && currState === 1) {
        animNow(-1601);
        setInScrollAnim(true);
        setTimeout(() => setInScrollAnim(false), 750);
      }
    }
  };

  const animIn = (tgt: string) => anime({
    targets: tgt,
    translateX: {
      value: 25,
      easing: 'easeInOutCubic'
    },
    fontSize: '1.5rem',
    duration: 400,
  });

  const rotIn = (tgt: string) => anime({
    targets: tgt,
    rotate: 135,
    duration: 1200,
    scale: 1.25,
    marginLeft: {
      value: '0.25rem',
      easing: 'linear',
      duration: 100
    }
  });

  const rotOut = (tgt: string) => anime({
    targets: tgt,
    rotate: 0,
    duration: 1600,
    scale: 1,
    marginLeft: {
      value: '0',
      easing: 'linear',
      duration: 100
    }
  });

  const animOut = (tgt: string) => anime({
    targets: tgt,
    translateX: {
      value: 0,
      easing: 'easeInOutCubic'
    },
    duration: 400,
    fontSize: '1.25rem',
  });

  const animNow = (yPos: number) => {
    if (inScrollAnim || isMobile) return;
    if (yPos < aboutCutoff && yPos < experienceCutoff) {
      switch (currState) {
        case 2:
          return;
        case 0:
          animOut('.about');
          rotOut('.square0');
          break;
        case 1:
          animOut('.experience');
          rotOut('.square1');
          break;
      }
      animIn('.projects');
      rotIn('.square2');
      setCurrState(2);
    } else if (yPos < aboutCutoff) {
      switch (currState) {
        case 1:
          return;
        case 0:
          animOut('.about');
          rotOut('.square0');
          break;
        case 2:
          animOut('.projects');
          rotOut('.square2');
          break;
      }
      animIn('.experience');
      rotIn('.square1');
      setCurrState(1);
    } else {
      switch (currState) {
        case 0:
          return;
        case 1:
          animOut('.experience');
          rotOut('.square1');
          break;
        case 2:
          animOut('.projects');
          rotOut('.square2');
          break;
      }
      animIn('.about');
      rotIn('.square0');
      setCurrState(0);
    }
  };

  useScrollPosition(({ prevPos, currPos }) => animNow(currPos.y), undefined, undefined, undefined, isMobile ? 1000000 : 250);

  useEffect(() => {
    setMobile(window.innerWidth < 1024)
    window.addEventListener("resize", () => setMobile(window.innerWidth < 1024))
    animNow(-scrollY);
  });

  return (
    isMobile ? <></> :
      <ul className="text-xl bg-o-background w-fit">
        <li className="mb-2 about">
          <div onClick={() => scrollTo("about")} className="flex items-center gap-2 transition ease-in-out duration-150 hover:scale-110 hover:translate-x-4 hover:text-link-highlighted hover:cursor-pointer">
            <p>About</p>
            <div className="w-3 h-3 bg-gray-50 square0"></div>
          </div>
        </li>
        <li className="mb-2 experience">
          <div onClick={() => scrollTo("experience")} className="flex items-center gap-2 transition ease-in-out duration-150 hover:scale-110 hover:translate-x-4 hover:text-link-highlighted hover:cursor-pointer">
            <p>Experience</p>
            <div className="w-3 h-3 bg-gray-50 square1"></div>
          </div>
        </li>
        <li className="mb-2 projects">
          <div onClick={() => scrollTo("projects")} className="flex items-center gap-2 transition ease-in-out duration-150 hover:scale-110 hover:translate-x-4 hover:text-link-highlighted hover:cursor-pointer">
            <p>Projects</p>
            <div className="w-3 h-3 bg-gray-50 square2"></div>
          </div>
        </li>
      </ul>
  );
};