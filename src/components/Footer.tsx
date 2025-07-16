import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 py-6 mt-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                <div className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Viktoria Studio. Alle Rechte vorbehalten.
                </div>
                <div className="flex gap-6 items-center">
                    <a href="#home" className="hover:underline text-gray-700">Home</a>
                    <a href="#about" className="hover:underline text-gray-700">Über mich</a>
                    <a href="#blog" className="hover:underline text-gray-700">Blog</a>
                    <a href="#kontakt" className="hover:underline text-gray-700">Kontakt</a>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800"><FaInstagram size={20} /></a>
                    <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={20} /></a>
                </div>
            </div>
        </footer>
    );
} 