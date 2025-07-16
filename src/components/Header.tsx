export default function Header() {
    return (
        <header className="w-full bg-white border-b border-gray-100 py-4 px-6 flex items-center justify-between">
            <div className="text-2xl font-bold tracking-wide">VIKTORIA STUDIO</div>
            <nav className="flex gap-8 text-base font-medium">
                <a href="#" className="hover:text-gray-700">Home</a>
                <a href="#blog" className="hover:text-gray-700">Blog</a>
                <a href="#about" className="hover:text-gray-700">Über mich</a>
                <a href="#kontakt" className="hover:text-gray-700">Kontakt</a>
            </nav>
        </header>
    );
} 