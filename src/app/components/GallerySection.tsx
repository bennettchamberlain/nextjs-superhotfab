"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GallerySectionProps {
  images: string[];
  className?: string;
}

export default function GallerySection({ images, className = "" }: GallerySectionProps) {
  const [current, setCurrent] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section id="gallery" className={`w-full flex flex-col items-center py-12 bg-gradient-to-b from-black via-yellow-950 to-black ${className}`}>
      <h2 className="text-4xl font-bold mb-6 text-yellow-300 text-large-upper text-dark-gradient">Gallery</h2>
      <div className="relative flex items-center justify-center w-full max-w-md">
        {/* Desktop arrows */}
        <button
          className="hidden md:block absolute left-0 z-10 bg-black/70 rounded-full p-2 border-2 border-yellow-400 hover:bg-yellow-900 transition"
          onClick={prev}
          aria-label="Previous"
        >
          <span className="text-2xl text-yellow-400">⏪</span>
        </button>
        <div className="tv-mask w-[320px] h-[200px] md:w-[400px] md:h-[250px] bg-black flex items-center justify-center overflow-hidden border-4 border-yellow-400 shadow-xl">
          <Image src={images[current]} alt={`Gallery image ${current + 1}`} width={400} height={250} className="object-cover w-full h-full" />
        </div>
        <button
          className="hidden md:block absolute right-0 z-10 bg-black/70 rounded-full p-2 border-2 border-yellow-400 hover:bg-yellow-900 transition"
          onClick={next}
          aria-label="Next"
        >
          <span className="text-2xl text-yellow-400">⏩</span>
        </button>
        {/* Mobile swipe hint */}
        <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-80">
          <span className="animate-bounce text-yellow-400">⬅️</span>
          <span className="text-yellow-200">Swipe</span>
          <span className="animate-bounce text-yellow-400">➡️</span>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 border-yellow-400 ${current === idx ? "bg-yellow-400" : "bg-black"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
// Add tv-mask CSS in globals.css for the bulging square effect. 