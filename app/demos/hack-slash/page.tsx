"use client"

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Page() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "hack-slash/build/Web.loader.js",
    dataUrl: "hack-slash/build/Web.data.br",
    frameworkUrl: "hack-slash/build/Web.framework.js.br",
    codeUrl: "hack-slash/build/Web.wasm.br"
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <main className="min-h-screen text-center items-center p-12">
      {isLoaded === false && (
        <div className="text-4xl mt-48">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="w-full h-full" unityProvider={unityProvider} />
    </main>
  );
};