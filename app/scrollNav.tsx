"use client"

import { useEffect, useState } from "react";

import anime from "animejs";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const aboutCutoff: number = -500;

const experienceCutoff: number = -1600;

export default function ScrollNav() {

  const [currState, setCurrState] = useState(-1);

  useEffect(() => {
    animNow(-scrollY);
  }, []);

  const animIn = (tgt: string) => anime({
    targets: tgt,
    translateX: {
      value: 100,
      duration: 1600,
    },
    scale: {
      value: 1.25,
      duration: 800,
    }
  });

  const animOut = (tgt: string) => anime({
    targets: tgt,
    translateX: 0,
    duration: 1200,
    scale: 1
  });

  const animNow = (yPos: number) => {
    if (yPos < aboutCutoff && yPos < experienceCutoff) {
      switch (currState) {
        case 2:
          return;
        case 0:
          animOut('.about');
          break;
        case 1:
          animOut('.experience');
          break;
      }
      animIn('.projects');
      setCurrState(2);
    } else if (yPos < aboutCutoff) {
      switch (currState) {
        case 1:
          return;
        case 0:
          animOut('.about');
          break;
        case 2:
          animOut('.projects');
          break;
      }
      animIn('.experience');
      setCurrState(1);
    } else {
      switch (currState) {
        case 0:
          return;
        case 1:
          animOut('.experience');
          break;
        case 2:
          animOut('.projects');
          break;
      }
      animIn('.about')
      setCurrState(0);
    }
  };

  useScrollPosition(({ prevPos, currPos }) => animNow(currPos.y));

  return (
    <ul className="max-sm:hidden text-2xl">
      <li className="mb-2 about">About</li>
      <li className="mb-2 experience">Experience</li>
      <li className="mb-2 projects">Projects</li>
    </ul>
  );
};