"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "4+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "∞", label: "Ideas Brewing" },
];

const SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Flask",
  "Flutter", "Firebase", "MongoDB", "Applied ML", "Tailwind CSS", "GSAP",
];

export default function About() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-heading", {
        yPercent: 60,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-heading", start: "top 85%" },
      });
      gsap.from(".about-para", {
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-para", start: "top 85%" },
      });
      gsap.from(".about-stat", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-stats", start: "top 88%" },
      });
      gsap.from(".skill-chip", {
        y: 10,
        opacity: 0,
        duration: 0.35,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: { trigger: ".skill-grid", start: "top 88%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={rootRef} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-red">
          01 / About
        </p>
        <div className="overflow-hidden">
          <h2 className="about-heading font-display text-5xl uppercase leading-none md:text-8xl">
            The Story <span className="text-stroke-red">So Far</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-14 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-cream/80">
            <p className="about-para">
              I&apos;m <span className="text-red">Piyush Gupta</span> — a developer
              focused on the intersection of{" "}
              <span className="text-cream">solid engineering</span> and{" "}
              <span className="text-cream">crafted user experience</span>. I
              don&apos;t just ship features; I build products with discipline,
              clarity, and a high bar for finish.
            </p>
            <p className="about-para">
              From behaviour insight apps to full-stack streaming platforms, my
              work spans mobile, web, automation, and data-heavy products. If it
              involves clean code, bold design, and a hard problem — I&apos;m in.
            </p>

            <div className="about-stats grid grid-cols-3 gap-4 pt-6">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="about-stat border border-cream/10 bg-bg-soft p-5 text-center transition-colors duration-300 hover:border-red/50"
                >
                  <div className="font-display text-4xl text-red">{s.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-muted">
              Arsenal
            </h3>
            <div className="skill-grid flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  data-hover
                  className="skill-chip cursor-default border border-cream/15 bg-bg-soft px-5 py-2.5 font-mono text-sm text-cream/90 transition-all duration-300 hover:-translate-y-1 hover:border-red hover:text-red"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-red pl-6">
              <p className="text-xl italic text-cream/70">
                &ldquo;Maximum effort. Every commit.&rdquo;
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                — my code philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
