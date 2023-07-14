"use client"
import { useEffect, useState } from "react";

export default function DesktopOnly() {

    const [mobile, setIsMobile] = useState(false);

    const setMobile = (isMobile: boolean) => {
        if (isMobile && !mobile) {
            alert("This demo only supports desktop platforms.");
        }
        setIsMobile(isMobile);
    };

    useEffect(() => {
        setMobile(window.innerWidth < 800)
        window.addEventListener("resize", () => setMobile(window.innerWidth < 800))
    }, []);

    return (
        <>
            {mobile && <p className="text-xl text-red-500">This demo only supports desktop platforms.</p>}
        </>
    );
}