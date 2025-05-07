import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section className={`flex flex-col items-center justify-center py-12 bg-black relative ${className}`}>
      <div className="tv-mask w-[350px] h-[220px] md:w-[500px] md:h-[320px] bg-black flex items-center justify-center overflow-hidden border-4 border-yellow-400 shadow-2xl">
        <Image src="/assets/images/project1.JPG" alt="Superhot Fabrication Project" width={500} height={320} className="object-cover w-full h-full" />
      </div>
      <h1 className="mt-8 text-5xl md:text-6xl font-extrabold text-large-upper text-dark-gradient text-center drop-shadow-lg">
        We construct your concepts
      </h1>
      <p className="mt-4 text-2xl md:text-3xl text-yellow-900 italic text-center uppercase font-bold">
        "We can probably make that"
      </p>
    </section>
  );
}
// Add tv-mask CSS in globals.css for the bulging square effect. 