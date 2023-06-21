"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {

  const router = useRouter();

  useEffect(() => router.push("/"));

  return (
    // <main className="text-center p-32">
    //   <h1 className="text-4xl">
    //     404 - Page not Found
    //   </h1>
    //   <h2 className="text-xl mt-8">
    //     Taking you back home...
    //   </h2>
    // </main>
    <></>
  );
}