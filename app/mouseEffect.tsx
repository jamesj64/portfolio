"use client"

import anime from "animejs";
import { useLayoutEffect, useState } from "react";

export default function MouseEffect() {

  //const cooldown = 1000;

  const [cool, setCool] = useState(false);

  const [currX, setCurrX] = useState(0);
  const [currY, setCurrY] = useState(0);

  // const mouseMoved = (event: MouseEvent) => {
  //   // const dispX = event.clientX - currX;
  //   // const dispY = event.clientY - currY;

  //   // const dist = Math.sqrt(Math.pow(dispX, 2) + Math.pow(dispY, 2));

  //   // console.log(currX + vel * dispX / dist);

  //   // if (pointerEffect.current) {
  //   //   pointerEffect.current.style.transform = `translate3d(${currX}, ${currY}, 0)`;
  //   // }

  //   // setCurrX(currX + dispX / dist * vel);
  //   // setCurrY(currY + dispY / dist * vel);

  //   // if (pointerEffect.current) {
  //   //   pointerEffect.current.style.transform = `translate3d(${currX}, ${currY}, 0)`;
  //   // }
  //   setCurrX(event.clientX);
  //   setCurrY(event.clientY);
  //   // window.removeEventListener('mousemove', mouseMoved);
  //   // setTimeout(() => window.addEventListener('mousemove', mouseMoved), cooldown);
  // };

  // const updateUsed = () => {
  //   if (window.innerWidth >= 1000) {
  //     window.addEventListener('mousemove', mouseMoved);
  //   } else {
  //     window.removeEventListener('mousemove', mouseMoved);
  //   }
  // }

  useLayoutEffect(() => {
    window.addEventListener('mousemove', e => {
      //console.log(currX - e.clientX);
      if (!cool && currX === 0) {
        console.log(currX - e.clientX);
        anime({
          targets: '.cursorThing',
          translateX: e.clientX,
          translateY: e.clientY,
          duration: 1200,
          //begin: () => setCool(true), 
          easing: 'easeOutSine',
          //complete: () => setCool(false)
        });
        //setCool(true);
        //setCurrX((currX + 1) % 60);
      }
      setCurrX((currX + 1) % 1000);
    });
  });

  return (
    <div className="bg-red-500 absolute top-0 left-0 w-56 h-56 cursorThing">Hi</div>
  );
}