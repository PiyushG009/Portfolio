"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ROLES = [
  "Product Builder",
  "Full Stack Developer",
  "Creative Frontend Engineer",
  "Interface Craftsman",
  "Automation Builder",
];

function useTypewriter(words: string[], typeSpeed = 70, deleteSpeed = 40, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) delay = pause;
    else if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const typed = useTypewriter(ROLES);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-eyebrow", { y: 30, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(
          ".hero-title-line",
          { yPercent: 110, duration: 1.1, stagger: 0.15 },
          "-=0.4"
        )
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".hero-badge", { scale: 0, rotate: -30, duration: 0.7, ease: "back.out(2)" }, "-=0.3");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
    >
      {/* Red glow circle behind (poster style) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/25 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[46vmin] w-[46vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red/20" />

      <div className="smoke smoke-a left-[-8rem] top-24 h-72 w-72 bg-red/15" />
      <div className="smoke smoke-b bottom-12 right-[-10rem] h-96 w-96 bg-red-deep/25" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
      <div className="pointer-events-none absolute bottom-12 right-[-5rem] z-[2] w-[min(82vw,28rem)] opacity-35 sm:right-4 sm:w-[min(52vw,34rem)] sm:opacity-70 lg:right-24 lg:w-[min(42vw,36rem)]">
        <Image
          src="/piyush-cutout.png"
          alt="Piyush Gupta"
          width={1080}
          height={884}
          priority
          sizes="(min-width: 1024px) 42vw, (min-width: 640px) 52vw, 82vw"
          className="h-auto w-full object-contain drop-shadow-[0_0_70px_rgba(230,32,44,0.35)]"
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Eyebrow row like movie cast credits */}
        <div className="hero-eyebrow mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          <span>Based in India</span>
          <span className="h-1 w-1 rounded-full bg-red" />
          <span>Open to Work</span>
          <span className="h-1 w-1 rounded-full bg-red" />
          <span className="text-red">Est. 2023</span>
        </div>

        {/* Massive poster title */}
        <h1 className="font-display uppercase leading-[0.85]">
          <span className="block overflow-hidden">
            <span className="hero-title-line block text-[16vw] md:text-[11vw]">
              Piyush
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-title-line block text-[16vw] text-stroke md:text-[11vw]">
              Gupta
            </span>
          </span>
        </h1>

        {/* Typing roles */}
        <p className="hero-sub mt-8 font-mono text-lg text-cream/90 md:text-2xl">
          <span className="mr-2 text-red">&gt;</span>
          <span className="caret">{typed}</span>
        </p>

        <p className="hero-sub mt-4 max-w-xl text-base text-muted md:text-lg">
          I build polished digital products with sharp interfaces, reliable
          systems, and automation that saves real time.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="hero-cta group relative overflow-hidden border border-red bg-red px-8 py-4 font-mono text-sm uppercase tracking-widest text-white transition-colors duration-300 hover:text-red"
          >
            <span className="absolute inset-0 -z-0 translate-y-full bg-bg transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative z-10">View Projects ↓</span>
          </a>
          <a
            href="#contact"
            className="hero-cta border border-cream/30 px-8 py-4 font-mono text-sm uppercase tracking-widest text-cream transition-all duration-300 hover:border-red hover:text-red"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Rotating badge (like the "01 IDEAS" stamp in the poster) */}
      <div className="hero-badge absolute bottom-24 right-8 hidden md:block lg:right-20">
        <div className="relative grid h-28 w-28 animate-[spin_12s_linear_infinite] place-items-center rounded-full border border-red/60">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <defs>
              <path id="circ" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="fill-cream/80 font-mono text-[9px] uppercase tracking-[0.25em]">
              <textPath href="#circ">
                • Code • Design • Systems • Automation
              </textPath>
            </text>
          </svg>
          <span className="font-display text-2xl text-red">PG</span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
        Scroll
        <span className="mx-auto mt-2 block h-8 w-px animate-pulse bg-red" />
      </div>
    </section>
  );
}






