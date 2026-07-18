const ITEMS = [
  "Product Builder",
  "Full Stack",
  "React",
  "Next.js",
  "Python",
  "Flutter",
  "Node.js",
  "UI/UX",
  "Automation",
  "MongoDB",
  "Firebase",
  "Ship Fast",
  "Clean UX",
  "Hard Work",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section className="marquee-shell relative -rotate-1 overflow-hidden border-y border-red/60 bg-red py-1 shadow-[0_24px_80px_rgba(230,32,44,0.18)]">
      <div className="film-holes h-3 w-full opacity-75" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-bg to-transparent" />
      <div className="marquee-glint pointer-events-none absolute inset-y-0 w-28 skew-x-[-18deg] bg-white/25 blur-sm" />

      <div className="marquee-track flex w-max items-center gap-8 py-2 will-change-transform">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="marquee-item flex items-center gap-8 font-display text-2xl uppercase tracking-wider text-white md:text-4xl"
          >
            {item}
            <span className="marquee-cross text-bg/90" aria-hidden="true">
              ×
            </span>
          </span>
        ))}
      </div>
      <div className="film-holes h-3 w-full opacity-75" />
    </section>
  );
}
