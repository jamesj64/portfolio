"use client"

import React, { useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

import DesktopOnly from "../components/desktopOnly";

export default function Page() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "hack-slash/build/Web.loader.js",
    dataUrl: "hack-slash/build/Web.data.br",
    frameworkUrl: "hack-slash/build/Web.framework.js.br",
    codeUrl: "hack-slash/build/Web.wasm.br"
  });

  const game = useRef<HTMLCanvasElement>(null);

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <main className="flex min-h-screen justify-center overflow-hidden">
      <div className="w-11/12 max-h-screen p-24 text-center pt-4">
        <p className="text-4xl pb-4">{isLoaded ? "Hack & Slash" : `Loading... (${loadingPercentage}%)`}</p>
        <DesktopOnly/>
        <div onClick={() => { if (game.current && isLoaded) game.current.requestFullscreen(); }}>
          <Unity className="w-full h-full" unityProvider={unityProvider} ref={game}/>
        </div>
      </div>
    </main>
  );
};