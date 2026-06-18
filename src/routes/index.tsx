import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { GlassDock, GlassFilter } from "@/components/ui/liquid-glass";
import { Github, Linkedin, Code2, Trophy, Mail, Brain } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Future Developer & AI/ML Engineer" },
      { name: "description", content: "Portfolio of an aspiring developer, AI/ML engineer, DSA practitioner and competitive programmer." },
      { property: "og:title", content: "Portfolio — Future Developer & AI/ML Engineer" },
      { property: "og:description", content: "Portfolio of an aspiring developer, AI/ML engineer, DSA practitioner and competitive programmer." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <SocialDock />
      <GlassFilter />
    </div>
  );
}

function SocialDock() {
  const icons = [
    { icon: <Github size={20} strokeWidth={1.5} />, label: "GitHub", href: "https://github.com" },
    { icon: <Linkedin size={20} strokeWidth={1.5} />, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: <Code2 size={20} strokeWidth={1.5} />, label: "Codeforces", href: "https://codeforces.com" },
    { icon: <Trophy size={20} strokeWidth={1.5} />, label: "LeetCode", href: "https://leetcode.com" },
    { icon: <Brain size={20} strokeWidth={1.5} />, label: "Kaggle", href: "https://kaggle.com" },
    { icon: <Mail size={20} strokeWidth={1.5} />, label: "Email", href: "mailto:hello@example.com" },
  ];
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-4">
      <div className="pointer-events-auto">
        <GlassDock icons={icons} />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-xl tracking-tight">
          <span className="italic">portfolio</span>
          <span className="text-muted-foreground">.</span>
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex">
          <a href="#about" className="transition hover:text-foreground">About</a>
          <a href="#work" className="transition hover:text-foreground">Work</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="hidden rounded-full border border-foreground px-4 py-1.5 text-xs uppercase tracking-[0.18em] transition hover:bg-foreground hover:text-background sm:inline-block">
            Say hi
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-10 md:py-32">
        <div className="md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            ⟶ Portfolio / 2026
          </p>
          <h1 className="mt-8 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            A future developer
            <span className="italic text-muted-foreground"> shaping </span>
            machines that <span className="italic">learn</span> &amp; problems that <span className="italic">scale</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            AI / ML engineer in the making. Daily DSA practitioner. Competitive
            programmer chasing the next AC. I write code that's careful, curious,
            and a little bit obsessive.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="group inline-flex items-center gap-3 bg-foreground px-6 py-3 text-sm uppercase tracking-[0.18em] text-background transition hover:bg-accent">
              See the work
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground">
              About me
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <figure className="relative">
            <img
              src={portrait}
              alt="Editorial portrait illustration of a developer with code and graph motifs"
              width={1024}
              height={1280}
              className="w-full border border-border bg-card grayscale contrast-110"
            />
            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              fig. 01 — self / in progress
            </figcaption>
          </figure>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["Python", "C++", "PyTorch", "TensorFlow", "NumPy", "Codeforces", "LeetCode", "Graphs", "DP", "Transformers", "React", "TypeScript"];
  return (
    <div className="overflow-hidden border-t border-border bg-card">
      <div className="flex gap-12 whitespace-nowrap py-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground [animation:marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const facts = [
    { k: "Focus", v: "AI / ML Engineering" },
    { k: "Daily ritual", v: "DSA + 1 contest" },
    { k: "Languages", v: "Python · C++ · TS" },
    { k: "Currently", v: "Building & learning" },
  ];
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">§ 01 — About</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            A quiet study in <span className="italic">code</span>, math &amp; relentless practice.
          </h2>
        </div>
        <div className="md:col-span-8 md:pl-10">
          <div className="space-y-6 text-base leading-relaxed text-foreground/85">
            <p>
              I'm an aspiring AI/ML engineer learning how machines reason — from
              the math under a gradient to the messy reality of real-world data.
              My favourite moments are when a model finally generalises, or when
              a stubborn graph problem snaps open after the third coffee.
            </p>
            <p>
              Outside of training loops, I live on Codeforces and LeetCode, grinding
              data structures and algorithms one editorial at a time. The goal:
              think clearly under pressure, write code that's both correct
              <em> and </em> elegant, and never stop being a beginner.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{f.k}</dt>
                <dd className="mt-2 font-serif text-xl">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      n: "01",
      title: "Neural Sketchpad",
      tag: "Deep Learning",
      desc: "A small CNN trained from scratch to recognise hand-drawn DSA diagrams — trees, graphs, arrays.",
      stack: "PyTorch · Python · FastAPI",
    },
    {
      n: "02",
      title: "Contest Companion",
      tag: "Tooling",
      desc: "CLI that scrapes upcoming Codeforces rounds, sets up template files and starts a focus timer.",
      stack: "C++ · Python · Click",
    },
    {
      n: "03",
      title: "Graph Playground",
      tag: "Visualisation",
      desc: "Interactive sandbox for BFS, DFS, Dijkstra and union-find — built to teach myself, then others.",
      stack: "TypeScript · React · D3",
    },
    {
      n: "04",
      title: "Tiny Transformer",
      tag: "Research notes",
      desc: "A 1M-parameter transformer trained on my own notes — exploring attention, tokenisation and scaling.",
      stack: "PyTorch · NumPy",
    },
  ];
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between border-b border-border pb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">§ 02 — Selected work</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              Things I've built <span className="italic">while learning</span>.
            </h2>
          </div>
          <p className="hidden font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">04 projects</p>
        </div>
        <ul className="divide-y divide-border">
          {projects.map((p) => (
            <li key={p.n}>
              <a href="#contact" className="group grid grid-cols-12 items-baseline gap-6 py-10 transition hover:bg-card md:py-12">
                <span className="col-span-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:col-span-1">{p.n}</span>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                    {p.title}
                    <span className="ml-3 inline-block translate-y-[-2px] text-base text-muted-foreground transition group-hover:translate-x-2">→</span>
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{p.tag}</p>
                </div>
                <p className="col-span-12 text-sm leading-relaxed text-foreground/80 md:col-span-4 md:text-base">{p.desc}</p>
                <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-2 md:text-right">{p.stack}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">§ 03 — Contact</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl">
            Let's <span className="italic">build</span>, <span className="italic">solve</span>, or just talk algorithms.
          </h2>
        </div>
        <div className="md:col-span-7 md:pl-10">
          <a href="mailto:hello@example.com" className="block border-b border-border pb-6 font-serif text-3xl transition hover:text-muted-foreground md:text-4xl">
            hello@example.com
          </a>
          <ul className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-3">
            {[
              { l: "GitHub", h: "#" },
              { l: "LinkedIn", h: "#" },
              { l: "Codeforces", h: "#" },
              { l: "LeetCode", h: "#" },
              { l: "Kaggle", h: "#" },
              { l: "Twitter / X", h: "#" },
            ].map((s) => (
              <li key={s.l}>
                <a href={s.h} className="group flex items-center justify-between border-b border-border py-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition hover:text-foreground">
                  {s.l}
                  <span className="transition group-hover:translate-x-1">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
      <p>© 2026 — Crafted on paper &amp; in code.</p>
      <p>Set in Instrument Serif &amp; Inter.</p>
    </footer>
  );
}
