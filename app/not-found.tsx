"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {

  const pathName = usePathname();
  const router = useRouter();

  const dest = pathName.split("/").at(1) === "demos" ? "/demos" : "/";

  useEffect(() => router.push(dest));

  return (
    <></>
  );
}