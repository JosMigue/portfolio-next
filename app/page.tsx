'use client'
import { useState } from "react";
import Link from "next/link";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center pt-20">
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-lime-400 bg-lime-400/10 border border-lime-400/20 px-4 py-2 rounded-full mb-10 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          Available for work
        </div>

        <div className="mb-4 text-xs text-zinc-600 tracking-widest uppercase">Frontend Developer | Tech Consultant </div>

        <h1 className="font-serif text-6xl md:text-8xl tracking-tight leading-none mb-6">
          Hey, I'm<br />
          <span className="text-lime-400 italic">José</span><span className="text-zinc-700">.</span>
        </h1>

        <p className="text-zinc-500 text-sm leading-relaxed max-w-md mb-10">
          I build fast, clean, and accessible web interfaces.
          Obsessed with details, performance, and developer experience.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
           href='/projects'
            className="text-sm bg-lime-400 text-zinc-950 font-semibold px-6 py-3 rounded-md hover:bg-lime-300 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lime-400/20"
          >
            View my work →
          </Link>
          <Link
          href={'/contact'}
            className="text-sm text-zinc-300 border border-zinc-800 px-6 py-3 rounded-md hover:border-lime-400/50 hover:text-lime-400 transition-all"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}