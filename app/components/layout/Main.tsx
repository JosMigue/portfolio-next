const Page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono relative overflow-x-hidden">
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-lime-400 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-96 h-96 bg-cyan-400 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />



            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {children}
            </div>
        </div>
    )
}

export default Page;