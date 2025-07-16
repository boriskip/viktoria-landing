"use client";

import React, { useState } from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const works = [
    {
        title: "Arbeit 1",
        description: "Farbveränderung in Duisburg: Dunkelblond mit natürlichen Reflexen. Verwendete Farben: Wella Koleston Perfect 7/1 + 7/0, 6% Oxidant. Technik: Balayage.",
        images: [
            "/blog-slider/work-1/work1-1.jpg",
            "/blog-slider/work-1/work1.jpg",
        ],
    },
    {
        title: "Arbeit 2",
        description: "Kühles Blond in Duisburg: L'Oréal Majirel 10.1 + 9.13, 9% Oxidant. Technik: Foilyage für ein natürliches, multidimensionales Ergebnis.",
        images: [
            "/blog-slider/work-2/work2-2.jpg",
            "/blog-slider/work-2/work2.jpg",
        ],
    },
    {
        title: "Arbeit 3",
        description: "Helles Blond in Duisburg: Schwarzkopf Blondme + 6% Oxidant. Technik: Klassische Blondierung mit sanftem Übergang.",
        images: [
            "/blog-slider/work-3/work3-3.jpg",
            "/blog-slider/work-3/work3.jpg",
        ],
    },
];

function WorkSlider({ work, onImageClick }: { work: typeof works[0]; onImageClick: (imgIdx: number) => void }) {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        slides: { perView: 1, spacing: 8 },
        loop: true,
    });
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div ref={sliderRef} className="keen-slider w-48 h-48 mb-4 cursor-pointer">
                {work.images.map((img, imgIdx) => (
                    <div
                        key={imgIdx}
                        className="keen-slider__slide flex items-center justify-center"
                        onClick={() => onImageClick(imgIdx)}
                    >
                        <Image
                            src={img}
                            alt={work.title}
                            width={176}
                            height={176}
                            className="object-cover w-44 h-44 rounded shadow"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
            <p className="text-md font-medium">{work.title}</p>
            <p className="text-sm text-gray-500">{work.description}</p>
        </div>
    );
}

export default function BlogSlider() {
    const [modal, setModal] = useState<{ workIdx: number; imgIdx: number } | null>(null);

    return (
        <section id="blog" className="w-full bg-gray-50 py-12 px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">Meine Arbeiten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {works.map((work, workIdx) => (
                    <WorkSlider
                        key={workIdx}
                        work={work}
                        onImageClick={(imgIdx) => setModal({ workIdx, imgIdx })}
                    />
                ))}
            </div>
            {/* Modal */}
            {modal && (
                <Modal
                    images={works[modal.workIdx].images}
                    startIdx={modal.imgIdx}
                    title={works[modal.workIdx].title}
                    onClose={() => setModal(null)}
                />
            )}
        </section>
    );
}

function Modal({ images, startIdx, title, onClose }: { images: string[]; startIdx: number; title: string; onClose: () => void }) {
    const [idx, setIdx] = useState(startIdx);
    const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
    const next = () => setIdx((i) => (i + 1) % images.length);
    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative max-w-2xl w-full flex flex-col items-center">
                <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl">×</button>
                <Image
                    src={images[idx]}
                    alt={title}
                    width={600}
                    height={600}
                    className="max-h-[70vh] rounded shadow mb-4"
                    loading="eager"
                />
                <div className="flex gap-6 items-center">
                    <button onClick={prev} className="text-white text-3xl">&#8592;</button>
                    <span className="text-white">{idx + 1} / {images.length}</span>
                    <button onClick={next} className="text-white text-3xl">&#8594;</button>
                </div>
            </div>
        </div>
    );
}
