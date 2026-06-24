import Image from "next/image";
const Footer = () => (
    <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="font-serif text-lg">
            <span className="text-lime-400">~/</span>pepe
        </span>
        <span className="text-xs text-zinc-700 flex flex-roiw "><Image src='/stack/nextjs_icon_dark.svg' alt='Nextjs logo' width={20} height={20}/> · <Image src='/stack/tailwindcss.svg' alt='TailwindCSS logo' width={20} height={20}/></span>
    </div>
);
export default Footer;