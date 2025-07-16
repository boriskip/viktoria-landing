import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-16 text-center gap-6">
            <h1 className="text-4xl md:text-6xl font-bold">Willkommen bei Viktoria Studio</h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto">Dein Weg zu Schönheit und Selbstvertrauen beginnt hier. Professionelle Friseurleistungen und individuelle Beratung.</p>
            <div className="mt-6">
                <Image src="/hero/main1.jpg" alt="Viktoria" width={180} height={180} className="rounded-full mx-auto shadow-lg" />
            </div>
        </section>
    );
}
