import DemoCard from "./components/demoCard";
import BackgroundEffect from "../components/backgroundEffect";

export default function Page() {
  return (
    <main className="min-h-screen text-center items-center p-12">
      <h1 className="text-4xl">Demos</h1>
      <ul className="mt-16 md:flex gap-y-8 w-full h-full flex-wrap justify-center gap-x-12">
        <DemoCard
          title="Demo"
          description="description description description description description description description description description"
          url="/demos/hack-slash"
          internalLink={true}
          previewImg="/images/github.svg"
        />
        <DemoCard
          title="Demo"
          description="description description description description description description description description description"
          url="/demos/hack-slash"
          internalLink={true}
          previewImg="/images/github.svg"
        />
        <DemoCard
          title="Demo"
          description="description description description description description description description description description"
          url="/demos/hack-slash"
          internalLink={true}
          previewImg="/images/github.svg"
        />
        <DemoCard
          title="Demo"
          description="description description description description description description description description description"
          url="/demos/hack-slash"
          internalLink={true}
          previewImg="/images/github.svg"
        />
        <DemoCard
          title="Demo"
          description="description description description description description description description description description"
          url="/demos/hack-slash"
          internalLink={true}
          previewImg="/images/github.svg"
        />
      </ul>
      {/* Uncomment below for merge */}
      {/* <BackgroundEffect/> */}
    </main>
  );
};