'use client'
import { useState } from "react";
const Page = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("pepe@dev.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <section id="contact" className="py-24 border-t border-zinc-900">
            <p className="text-xs tracking-widest uppercase text-zinc-600 mb-10">Contact</p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12">
                <h2 className="font-serif text-4xl tracking-tight mb-3">
                    Let's build something<br />
                    <em className="text-lime-400 not-italic">great together.</em>
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed mb-8 max-w-sm">
                    Have a project in mind or just want to chat? My inbox is always open.
                </p>

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={copyEmail}
                        className="flex items-center gap-2 text-sm bg-lime-400 text-zinc-950 font-semibold px-5 py-2.5 rounded-md hover:bg-lime-300 transition-all"
                    >
                        {copied ? "✓ Copied!" : "Jose_Galvan20_97@hotmail.com"}
                    </button>

                    {[
                        { label: "GitHub", href: "https://github.com/JosMigue" },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/itsmejosmigue/" },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-500 border border-zinc-800 px-5 py-2.5 rounded-md hover:border-zinc-600 hover:text-zinc-300 transition-all"
                        >
                            {link.label} ↗
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Page;