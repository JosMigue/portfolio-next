'use client'
import Link from "next/link";
const Page = () => {
    const navLinks = ["about", "projects", "stack", "contact"];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className="text-sm text-zinc-500">
                    <span className="text-lime-400">~/</span><Link href={'/'}>josé</Link>
                </span>
                <div className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            href={link}
                            className="text-xs text-zinc-600 hover:text-lime-400 transition-colors tracking-widest uppercase"
                        >
                            {link}
                        </Link>
                    ))}
                        <Link
                            key="resume"
                            href="/resume.pdf"
                            className="text-sm border px-4 py-2 rounded-lg border-lime-400/50 text-lime-400 transition-all"
                            download
                        >
                            Download Resume
                        </Link>
                </div>
            </div>
        </nav>
    )
}

export default Page;