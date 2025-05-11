"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GallerySectionProps {
  images: string[];
  className?: string;
}

const crtPath =
  "M 100 50 Q 500 -60 900 50 Q 980 350 900 650 Q 500 760 100 650 Q 20 350 100 50 Z";

export default function GallerySection({ images, className = "" }: GallerySectionProps) {
  const [current, setCurrent] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section id="gallery" className={`w-full flex flex-col items-center py-16 ${className}`}>
      <h2 className="text-4xl font-bold mb-6 text-large-upper bg-gradient-to-r from-[#FFB81C] to-[#FA4616] bg-clip-text text-transparent">Gallery</h2>
      <div className="relative flex items-center justify-center w-full max-w-5xl py-6">
        {/* Desktop arrows */}
        <button
          className="hidden md:flex absolute left-0 z-10 bg-black/60 hover:bg-yellow-900/80 transition rounded-full p-3 items-center justify-center"
          onClick={prev}
          aria-label="Previous"
          style={{ boxShadow: "0 2px 8px #0007" }}
        >
          {/* Left Arrow SVG */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8L12 16L20 24" stroke="#FFB81C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {/* CRT Masked Image */}
        <div className="relative flex items-center justify-center w-[700px] h-[420px] md:w-[1000px] md:h-[590px]">
          <svg
            viewBox="0 0 1000 700"
            width="100%"
            height="100%"
            style={{ position: "absolute", inset: 0, zIndex: 1, overflow: "visible" }}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="crtMaskGallery">
                <path d={crtPath} />
              </clipPath>
            </defs>
          </svg>
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, clipPath: 'url(#crtMaskGallery)' }}>
            <Image
              src={images[current]}
              alt={`Gallery image ${current + 1}`}
              fill
              style={{ objectFit: 'cover', filter: 'brightness(0.6)' }}
              sizes="(max-width: 1000px) 100vw, 1000px"
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0.4 }} />
          </div>
          <svg
            viewBox="0 0 1000 700"
            width="100%"
            height="100%"
            style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: 'none' }}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Yellow border */}
            <path
              d={crtPath}
              stroke="#FACC15"
              strokeWidth="8"
              fill="none"
            />
          </svg>
        </div>
        <button
          className="hidden md:flex absolute right-0 z-10 bg-black/60 hover:bg-yellow-900/80 transition rounded-full p-3 items-center justify-center"
          onClick={next}
          aria-label="Next"
          style={{ boxShadow: "0 2px 8px #0007" }}
        >
          {/* Right Arrow SVG */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8L20 16L12 24" stroke="#FFB81C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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