const Page = () => {
    const projects = [
        {
            title: "Valt",
            desc: "Personal finance tracker with full CRUD for incomes & expenses. Built with Next.js, Auth.js and MongoDB.",
            tags: ["Next.js", "TypeScript", "MongoDB", "Auth.js"],
            repo: "https://github.com/JosMigue/incomes_n_expenses.git",
            status: "WIP",
        },
        {
            title: "Project Alpha",
            desc: "A blazing fast dashboard for real-time data visualization with customizable widgets.",
            tags: ["React", "TailwindCSS", "Recharts"],
            repo: "#",
            status: "WIP",
        },
        {
            title: "DevFlow",
            desc: "A developer productivity tool to manage tasks, notes and code snippets in one place.",
            tags: ["Next.js", "PostgreSQL", "Prisma"],
            repo: "#",
            status: "WIP",
        },
    ];
    return (
        <section id="projects" className="py-24 border-t border-zinc-900">
            <p className="text-xs tracking-widest uppercase text-zinc-600 mb-10">Projects</p>
            <div className="max-w-4xl mx-auto">
                <h1 className="font-serif text-4xl tracking-tight mb-6">Personal <br />
                    <span className="text-lime-400 italic">Projects</span><span className="text-zinc-700">.</span>
                </h1>
                <p className="text-slate-300 mb-12">Here are some personal projects I've been working on.</p>

                <div className="grid gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
                    {projects.map((p, i) => (
                        <div key={p.title} className="bg-zinc-900 p-6 hover:bg-zinc-800/60 transition-colors group">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <span className="font-serif text-xl text-zinc-100 group-hover:text-lime-400 transition-colors">{p.title}</span>
                                    <span className={`text-xs px-2.5 py-0.5 rounded-full border ${p.status === "Live"
                                        ? "bg-lime-400/10 text-lime-400 border-lime-400/20"
                                        : "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
                                        }`}>
                                        {p.status}
                                    </span>
                                </div>
                                {p.repo !== "#" && (
                                    <a href={p.repo} target="_blank" rel="noopener noreferrer">
                                        <span className="text-zinc-700 group-hover:text-lime-400 transition-colors text-lg">↗</span>
                                    </a>
                                )}
                                {p.repo == "#" && (
                                    <span className="text-zinc-700 group-hover:text-lime-400 transition-colors text-lg">↗</span>
                                )}
                            </div>
                            <p className="text-xs text-zinc-600 leading-relaxed mb-4">{p.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map((tag) => (
                                    <span key={tag} className="text-xs text-zinc-700 border border-zinc-800 px-2.5 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Page;