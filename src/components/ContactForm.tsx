import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactForm() {
    return (
        <section className="w-full max-w-2xl mx-auto py-12 px-4" id="kontakt">
            <h2 className="text-3xl font-semibold mb-4">Kontakt</h2>
            <div className="mb-6 flex gap-4">
                <a href="mailto:vikaboris93@gmail.com" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <MdEmail size={22} /> E-Mail
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <FaInstagram size={22} /> Instagram
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <FaFacebook size={22} /> Facebook
                </a>
            </div>
            <form className="flex flex-col gap-4">
                <input type="email" placeholder="Deine E-Mail" className="border rounded px-3 py-2" required />
                <textarea placeholder="Deine Nachricht" className="border rounded px-3 py-2" rows={4} required />
                <button type="submit" className="bg-black text-white rounded px-6 py-2 font-semibold hover:bg-gray-800">Nachricht senden</button>
            </form>
        </section>
    );
}
