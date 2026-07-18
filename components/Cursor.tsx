"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const xDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const grow = () => gsap.to(ring, { scale: 2.2, duration: 0.25 });
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.25 });

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <div
        ref={dotRef}
        className="absolute -top-1 -left-1 h-2 w-2 rounded-full bg-red"
      />
      <div
        ref={ringRef}
        className="absolute -top-4 -left-4 h-8 w-8 rounded-full border border-red/70"
      />
    </div>
  );
}
