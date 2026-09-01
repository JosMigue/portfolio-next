import Image from 'next/image'
const Page = () => {
    const techStack = [
        { name: "Next.js", icon: '/stack/nextjs_icon_dark.svg', width: 30, height: 30, href: 'https://nextjs.org/' },
        { name: "React", icon: '/stack/react_dark.svg', width: 30, height: 30, href: 'https://react.dev/' },
        { name: "Tailwind CSS", icon: '/stack/tailwindcss.svg', width: 30, height: 30, href: 'https://tailwindcss.com/' },
        { name: "TypeScript", icon: '/stack/typescript.svg', width: 30, height: 30, href: 'https://www.typescriptlang.org/' },
    ];
    return (
        <section id="about" className="py-24 border-t border-zinc-900">
            <p className="text-xs tracking-widest uppercase text-zinc-600 mb-10">About me</p>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="font-serif text-4xl tracking-tight mb-6">
                        Code with<br /><em className="text-lime-400 not-italic">purpose.</em>
                    </h2>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                        I'm a frontend developer who cares deeply about the craft — from pixel-perfect UIs to clean, maintainable code. I love turning complex problems into simple, elegant interfaces.
                    </p>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                        When I'm not coding, I'm exploring new tech, contributing to open source, or obsessing over UI details.
                    </p>
                </div>

                <div className="space-y-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
                    {[
                        { label: "Location", value: "Mexico 🇲🇽" },
                        { label: "Focus", value: "Tech Consultant / Frontend / Full-stack" },
                        { label: "Main Stack", value: "Next.js · TypeScript · Tailwind" },
                        { label: "Status", value: "Open to opportunities" },
                    ].map((item) => (
                        <div key={item.label} className="bg-zinc-900 md:px-5 py-4 flex md:flex-row flex-col justify-between items-center hover:bg-zinc-800/80 transition-colors">
                            <span className="text-xs text-zinc-600 uppercase tracking-widest">{item.label}</span>
                            <span className="text-xs text-zinc-300">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex">
                    <section className="py-12 px-4 w-full">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">
                                Portfolio Built with
                            </p>
                            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
                                {techStack.map(({ name, icon, width, height, href }) => (
                                    <a href={href} target="_blank" rel="noopener noreferrer"
                                        key={name}
                                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:scale-110 hover:text-black dark:hover:text-white transition-all"
                                    >
                                        <span><Image src={icon} alt={name} width={width ? width : 25} height={height ? height : 25} /></span>
                                        <span className="text-sm font-medium">{name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
export default Page;