const Page = () => {
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
                        When I'm not coding, I'm exploring new tech, contributing to open source, or obsessing over UI details nobody else notices.
                    </p>
                </div>

                <div className="space-y-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
                    {[
                        { label: "Location", value: "Mexico 🇲🇽" },
                        { label: "Focus", value: "Tech Consultant / Frontend / Full-stack" },
                        { label: "Main Stack", value: "Next.js · TypeScript · Tailwind" },
                        { label: "Status", value: "Open to opportunities" },
                    ].map((item) => (
                        <div key={item.label} className="bg-zinc-900 px-5 py-4 flex justify-between items-center hover:bg-zinc-800/80 transition-colors">
                            <span className="text-xs text-zinc-600 uppercase tracking-widest">{item.label}</span>
                            <span className="text-xs text-zinc-300">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Page;