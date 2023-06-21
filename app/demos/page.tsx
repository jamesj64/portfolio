import DemoCard from "./components/demoCard";
import BackgroundEffect from "../components/backgroundEffect";

export default function Page() {
  return (
    <main className="min-h-screen text-center items-center p-12">
      <h1 className="text-4xl">Demos</h1>
      <ul className="mt-16 md:grid grid-cols-3 gap-y-8 w-full h-full justify-between">
        <DemoCard/>
        <DemoCard/>
        <DemoCard/>
        <DemoCard/>
        <DemoCard/>
        <DemoCard/>
        <DemoCard/>
      </ul>
      <BackgroundEffect/>
    </main>
  );
};