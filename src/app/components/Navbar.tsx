import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-4 bg-black/90 border-b-4 border-yellow-400 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <Image src="/assets/images/superhotfin.png" alt="Superhot Fabrication Logo" width={56} height={56} className="object-contain" />
        <span className="text-2xl font-bold bg-gradient-to-r from-[#FFB81C] via-[#FA4616] to-[#FFB81C] bg-clip-text text-transparent tracking-wide">SUPERHOT FABRICATION</span>
      </div>
      <div className="hidden md:flex gap-8 text-2xl uppercase font-extrabold">
        <a href="#gallery" className="bg-gradient-to-r from-[#FFB81C] to-[#FA4616] bg-clip-text text-transparent hover:opacity-80 transition">GALLERY</a>
        <a href="#posts" className="bg-gradient-to-r from-[#FFB81C] to-[#FA4616] bg-clip-text text-transparent hover:opacity-80 transition">PROJECTS</a>
        <a href="#contact" className="bg-gradient-to-r from-[#FFB81C] to-[#FA4616] bg-clip-text text-transparent hover:opacity-80 transition">CONTACT</a>
      </div>
    </nav>
  );
}
// Add tv-mask CSS in globals.css for the bulging square effect. 