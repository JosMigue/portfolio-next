'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["about", "projects", "stack", "contact"];
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-4xl mx-auto px-6 md:py-4 py-6 flex items-center justify-between">
                <span className="text-sm text-zinc-500">
                    <span className="text-lime-400">~/</span><Link href={'/'}>jose</Link>
                </span>
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            href={link}
                            className="text-xs text-zinc-600 hover:text-lime-400 transition-colors tracking-widest uppercase"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
                <button
                    className="md:hidden text-gray-700 dark:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <Image src="/close.svg" width={25} height={25} alt="Toggle menu" /> : <Image src="/burger-menu.svg" width={25} height={25} alt="Toggle menu" />}
                </button>
            </div>
            {isOpen && (
                <div className={`md:hidden bg-dark border-t border-gray-800 px-4 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            href={link}
                            className="text-gray-700 dark:text-gray-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            )}
        </nav >
    )
}

export default Page;