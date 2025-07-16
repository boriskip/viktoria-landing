"use client";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });
            if (res.ok) {
                setStatus("success");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="w-full max-w-2xl mx-auto py-12 px-4" id="kontakt">
            <h2 className="text-3xl font-semibold mb-4">Kontakt</h2>
            <div className="mb-6 flex gap-4">
                <a href="mailto:viktoria@email.de" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <MdEmail size={22} /> E-Mail
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <FaInstagram size={22} /> Instagram
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <FaFacebook size={22} /> Facebook
                </a>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Deine E-Mail"
                    className="border rounded px-3 py-2"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Deine Nachricht"
                    className="border rounded px-3 py-2"
                    rows={4}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-black text-white rounded px-6 py-2 font-semibold hover:bg-gray-800"
                    disabled={status === "loading"}
                >
                    {status === "loading" ? "Senden..." : "Nachricht senden"}
                </button>
                {status === "success" && <p className="text-green-600">Nachricht erfolgreich gesendet!</p>}
                {status === "error" && <p className="text-red-600">Fehler beim Senden. Bitte versuchen Sie es später erneut.</p>}
            </form>
        </section>
    );
}
