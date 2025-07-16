import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full bg-gray-200 border-b border-gray-300 py-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/logo/logo1.png" alt="Viktoria Studio Logo" width={100} height={60} />
                <span className="text-2xl font-bold tracking-wide hidden sm:inline">VIKTORIA STUDIO</span>
            </div>
            <nav className="flex gap-8 text-base font-medium">
                <a href="#home" className="hover:text-gray-700">Home</a>
                <a href="#blog" className="hover:text-gray-700">Blog</a>
                <a href="#about" className="hover:text-gray-700">Über mich</a>
                <a href="#kontakt" className="hover:text-gray-700">Kontakt</a>
            </nav>
        </header>
    );
} 