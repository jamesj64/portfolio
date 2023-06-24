import Link from "next/link";

export default function DemoCard() {
  return (
    <li className="relative w-full grid md:grid-cols-8">
      <p className="sm:col-span-2">Hello</p>
      <div className="sm:col-span-6">
        <h2 className="text-xl">Demo</h2>
        <p className="text-md">Description description description description description description <Link href="/demos/hack-slash">click me</Link> description description</p>
      </div>
    </li>
  );
}