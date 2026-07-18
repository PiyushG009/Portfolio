export default function Footer() {
  return (
    <footer className="border-t border-cream/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-display text-lg uppercase tracking-wide">
          Piyush<span className="text-red">.</span>Dev
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          © {new Date().getFullYear()} Piyush Gupta — Maximum Effort™
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
          <a
            href="https://github.com/PiyushG009"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/70 transition-colors hover:text-red"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/piyushg009"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/70 transition-colors hover:text-red"
          >
            LinkedIn
          </a>
          <a
            href="mailto:varungupta31009@gmail.com"
            className="text-cream/70 transition-colors hover:text-red"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
