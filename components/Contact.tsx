"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type IconName = "github" | "linkedin" | "mail";

const SOCIALS: Array<{
  label: string;
  value: string;
  href: string;
  icon: IconName;
}> = [
  {
    label: "GitHub",
    value: "PiyushG009",
    href: "https://github.com/PiyushG009",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "piyushg009",
    href: "https://www.linkedin.com/in/piyushg009",
    icon: "linkedin",
  },
  {
    label: "Email",
    value: "varungupta31009@gmail.com",
    href: "mailto:varungupta31009@gmail.com",
    icon: "mail",
  },
];

function SocialIcon({ name }: { name: IconName }) {
  const common = "h-5 w-5";

  if (name === "github") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.48.11-3.07 0 0 .98-.31 3.18 1.19a11.1 11.1 0 0 1 5.78 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.59.24 2.78.12 3.07.74.81 1.18 1.84 1.18 3.11 0 4.46-2.71 5.43-5.29 5.72.42.36.79 1.07.79 2.16v3.01c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.75h4v10.76H3V9.75Zm6.25 0h3.83v1.47h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1v5.14h-4v-4.56c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41v4.64h-4V9.75Z" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 6.5h16v11H4z" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function Contact() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-heading", {
        yPercent: 60,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-heading", start: "top 88%" },
      });
      gsap.from(".contact-row", {
        y: 28,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".contact-rows", start: "top 88%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={rootRef} className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[26rem] w-[min(90vw,48rem)] -translate-x-1/2 rounded-full bg-red/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-red">
          03 / Contact
        </p>
        <div className="overflow-hidden">
          <h2 className="contact-heading font-display text-5xl uppercase leading-none md:text-8xl">
            Let&apos;s Build <span className="text-stroke">Something</span>
            <br />
            <span className="text-red">Remarkable</span>
          </h2>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/70">
          Have a serious build, a sharp product idea, or a workflow that needs
          clean execution? I bring the craft, consistency, and follow-through.
        </p>

        <div className="contact-rows mt-14 divide-y divide-cream/10 border-y border-cream/10">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact-row group grid gap-5 px-2 py-7 transition-colors duration-300 hover:bg-cream/[0.035] sm:grid-cols-[3rem_1fr_auto] sm:items-center md:py-9"
            >
              <span className="grid h-12 w-12 place-items-center border border-cream/15 bg-cream/[0.03] text-cream/80 transition-all duration-300 group-hover:border-red/70 group-hover:bg-red group-hover:text-white">
                <SocialIcon name={s.icon} />
              </span>

              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-[0.32em] text-muted transition-colors group-hover:text-red">
                  {s.label}
                </span>
                <span className="mt-2 block break-words font-sans text-2xl font-semibold tracking-normal text-cream transition-colors duration-300 group-hover:text-white md:text-4xl">
                  {s.value}
                </span>
              </span>

              <span className="hidden text-muted transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-red sm:block">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <a
            href="mailto:varungupta31009@gmail.com"
            className="group relative overflow-hidden border border-red bg-red px-10 py-5 font-mono text-sm uppercase tracking-widest text-white transition-colors duration-300 hover:text-red"
          >
            <span className="absolute inset-0 translate-y-full bg-bg transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative z-10">Send an Email →</span>
          </a>
          <span
            data-hover
            className="cursor-not-allowed border border-cream/20 px-10 py-5 font-mono text-sm uppercase tracking-widest text-muted"
            title="Coming soon"
          >
            Resume — Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
