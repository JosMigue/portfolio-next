import Link from "next/link";
import Image from "next/image";
const Page = () => {
  type Section = 'Frontend' | 'Backend' | 'Database' | 'Source Control & Package Managers'
  const stack = {
    Frontend: [
      { name: "Next.js", icon: '/stack/nextjs_icon_dark.svg' },
      { name: "React", icon: "/stack/react_dark.svg" },
      { name: "TypeScript", icon: "/stack/typescript.svg" },
      { name: "TailwindCSS", icon: "/stack/tailwindcss.svg", width: 35, height: 35 },
      { name: "JavaScript", icon: "/stack/javascript.svg" },
      { name: "Auth.js", icon: "/stack/authjs.svg" },
    ],
    Backend: [
      { name: "Node.js", icon: "/stack/nodejs.svg" },
      { name: "Laravel", icon: "/stack/laravel.svg" },
    ],
    Database: [
      { name: "MongoDB", icon: "/stack/mongodb-icon-dark.svg", width: 20, height: 20 },
      { name: "PostgreSQL", icon: "/stack/postgresql.svg", width: 30, height: 30 },
      { name: "MySQL", icon: "/stack/mysql-icon-light.svg", width: 30, height: 30 },
    ],
    'Source Control & Package Managers': [
      { name: "Git", icon: "/stack/github_light.svg", width: 30, height: 30 },
      { name: "NPM", icon: "/stack/npm-wordmark.svg", width: 30, height: 30 },
      { name: "Yarn", icon: "/stack/yarn.svg", width: 30, height: 30 },
    ],
    Others: [
      { name: "Linux", icon: "/stack/linux.svg" },
      { name: "ServiceNow", icon: "/stack/snow_logo.svg", width: 30, height: 30 },

    ]
  };
  return (
    <section id="stack" className="py-24 border-t border-zinc-900">
      <p className="text-xs tracking-widest uppercase text-zinc-600 mb-10">Stack</p>
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl tracking-tight mb-6">Tech <br />
          <span className="text-lime-400 italic">Stack</span><span className="text-zinc-700">.</span>
        </h1>
        <p className="text-slate-300 mb-12">Here's a list of technologies I've been working with recently.</p>
        {
          Object.keys(stack).map((k) =>
            <div key={k}>
              <p className="text-xs tracking-widest uppercase text-zinc-600">{k}</p>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 border border-zinc-800 rounded-xl overflow-hidden`}>
                {stack[k as Section].map((s: any) => (
                  <div key={s.name} className="px-4 py-5 flex flex-col items-center gap-2 hover:bg-zinc-800/80 transition-colors group">
                    <span><Image src={s.icon} alt={s.name} width={s.width ? s.width : 25} height={s.height ? s.height : 25} /></span>
                    {s.name && (
                      <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">{s.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Page;