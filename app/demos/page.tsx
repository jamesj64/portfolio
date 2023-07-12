import DemoCard from "./components/demoCard";
import BackgroundEffect from "../components/backgroundEffect";

export default function Page() {
  return (
    <main className="min-h-screen text-center items-center p-12">
      <h1 className="text-4xl">Demos</h1>
      <ul className="mt-16 md:flex gap-y-8 w-full h-full flex-wrap justify-center gap-x-12">
        <DemoCard
          title="Hack & Slash"
          description="Hack and slash game for WebGL and Desktop platforms in the Unity Game Engine. AI pathfinding with Unity Navmesh."
          url="/demos/hack-slash"
          internalLink={true}
          previewImg="/demos/hack-slash/images/logo.svg"
        />
        {/* <DemoCard
          title="Physics Simulation"
          description="JS Bouncing ball physics simulation. Made with P5.js"
          url="/demos/hack-slash"
          internalLink={true}
          previewImg="/images/github.svg"
        />
        <DemoCard
          title="Conway's Game of Life"
          description="JS implementation of Conway's game of life"
          url="/demos/hack-slash"
          internalLink={true}
          previewImg="/images/github.svg"
        /> */}
        <DemoCard
          title="Coldblooded"
          description="Break into the capitol and take a picture of the president in its reptile form. Game for a game jam made in Unity Game Engine."
          url="https://jamesj63.itch.io/coldblooded"
          internalLink={false}
          previewImg="/demos/coldblooded/images/coldblooded.svg"
        />
      </ul>
      <h2 className="text-2xl mt-24">More to come soon...</h2>
      {/* Uncomment below for merge */}
      <BackgroundEffect/>
    </main>
  );
};