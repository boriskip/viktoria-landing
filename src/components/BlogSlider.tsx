export default function BlogSlider() {
    // Здесь позже будет слайдер, пока просто сетка работ
    return (
        <section className="w-full bg-gray-50 py-12 px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">Meine Arbeiten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <div className="w-40 h-40 bg-gray-200 rounded mb-4" />
                        <p className="text-md font-medium">Arbeit {item}</p>
                        <p className="text-sm text-gray-500">Kurze Beschreibung der Arbeit {item}.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
