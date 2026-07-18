"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    num: "01",
    title: "RealityCheck",
    tagline: "Behaviour Insights & Decision Support",
    description:
      "A focused mobile app that studies habits, behaviour patterns and decision-making — then turns them into clear insights for personal growth and sharper productivity.",
    tech: ["Flutter", "Firebase", "ML APIs"],
    status: "In Development",
    type: "Mobile · Product",
    live: false,
  },
  {
    num: "02",
    title: "LucaVerse",
    tagline: "Full-Stack Music Streaming Platform",
    description:
      "A modern streaming experience with auth, playlists, search, and seamless playback — built end-to-end with a responsive UI that gets out of the way and lets the music hit.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Completed",
    type: "Web · Full Stack",
    live: true,
  },
  {
    num: "03",
    title: "Resume Analyzer",
    tagline: "Recruitment Workflow Engine",
    description:
      "Processes large resume batches, ranks candidates against job descriptions using NLP, and hands recruiters a clean shortlist in seconds, not days.",
    tech: ["React", "Flask", "Python", "NLP"],
    status: "Completed",
    type: "Web · Data",
    live: true,
  },
  {
    num: "04",
    title: "MoodyHub",
    tagline: "Mood-Based Entertainment Platform",
    description:
      "Tell it your mood — it curates movies, music and content to match, powered by recommendation logic and the TMDB API inside a slick interactive interface.",
    tech: ["React", "Python", "Recsys", "TMDB API"],
    status: "Completed",
    type: "Web · Product",
    live: true,
  },
];

export default function Projects() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(".projects-heading", {
        yPercent: 60,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".projects-heading", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.from(card, {
          y: 36,
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          delay: (i % 2) * 0.06,
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={rootRef} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-red">
          02 / Work
        </p>
        <div className="overflow-hidden">
          <h2 className="projects-heading font-display text-5xl uppercase leading-none md:text-8xl">
            Built With <span className="text-red">Discipline</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.num}
              data-hover
              className="project-card group relative overflow-hidden border border-cream/10 bg-bg-soft p-8 transition-all duration-300 hover:border-red/60 md:p-10"
            >
              <span className="pointer-events-none absolute -right-4 -top-8 font-display text-[10rem] leading-none text-cream/[0.04] transition-colors duration-300 group-hover:text-red/10">
                {p.num}
              </span>

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-3xl text-red">{p.num}</span>
                  <div className="flex flex-wrap items-center justify-end gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {p.type}
                    </span>
                    <span
                      className={`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                        p.status === "Completed"
                          ? "border-emerald-500/40 text-emerald-400"
                          : "border-amber-500/40 text-amber-400"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 font-display text-4xl uppercase transition-colors duration-300 group-hover:text-red">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-sm text-red/80">{p.tagline}</p>

                <p className="mt-5 leading-relaxed text-cream/70">
                  {p.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-cream/10 px-3 py-1 font-mono text-xs text-muted transition-colors duration-300 group-hover:border-red/30 group-hover:text-cream/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href="https://github.com/PiyushG009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-cream/80 transition-colors hover:text-red"
                  >
                    Code
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                      ↗
                    </span>
                  </a>
                  {p.live && (
                    <a
                      href="https://github.com/PiyushG009"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-cream/80 transition-colors hover:text-red"
                    >
                      Live Demo
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>

              <span className="absolute bottom-0 left-0 h-1 w-0 bg-red transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/PiyushG009?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-cream/20 px-10 py-4 font-mono text-sm uppercase tracking-widest text-cream transition-all duration-300 hover:border-red hover:bg-red hover:text-white"
          >
            All Repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
