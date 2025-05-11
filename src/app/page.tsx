import Link from "next/link";
import { type Post } from "./components/types";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import PostsSection from "./components/PostsSection";
import ContactSection from "./components/ContactSection";
import InfoSection from "./components/InfoSection";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, body}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);
  // Placeholder gallery images
  const galleryImages = [
    "/assets/images/Gallery1.JPG",
    "/assets/images/Gallery2.JPG",
    "/assets/images/Gallery3.JPG",
    "/assets/images/Gallery4.JPG",
    "/assets/images/Gallery5.JPG",
    "/assets/images/Gallery6.JPG",
  ];
  return (
    <main className="min-h-screen w-full font-sans bg-black relative overflow-hidden">
      {/* Gradient spots */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Yellow spots */}
        <div className="absolute w-[1000px] h-[1000px] bg-[#FFB81C]/[0.03] rounded-full blur-3xl animate-float-slow -top-60 -left-60" />
        <div className="absolute w-[800px] h-[800px] bg-[#FFB81C]/[0.02] rounded-full blur-3xl animate-float-slower top-1/3 left-1/4" />
        
        {/* Orange spots */}
        <div className="absolute w-[1200px] h-[1200px] bg-[#FA4616]/[0.03] rounded-full blur-3xl animate-float -bottom-80 right-0" />
        <div className="absolute w-[900px] h-[900px] bg-[#FA4616]/[0.02] rounded-full blur-3xl animate-float-slow top-1/2 -right-40" />
        
        {/* Red spots */}
        <div className="absolute w-[1100px] h-[1100px] bg-[#DA291C]/[0.03] rounded-full blur-3xl animate-float-slower -left-40 top-1/4" />
        <div className="absolute w-[700px] h-[700px] bg-[#DA291C]/[0.02] rounded-full blur-3xl animate-float bottom-1/4 left-1/3" />
        
        {/* Mixed color spots */}
        <div className="absolute w-[1300px] h-[1300px] bg-gradient-to-br from-[#FFB81C]/[0.02] via-[#FA4616]/[0.02] to-[#DA291C]/[0.02] rounded-full blur-3xl animate-float-slow -top-40 right-1/4" />
        <div className="absolute w-[950px] h-[950px] bg-gradient-to-tr from-[#DA291C]/[0.02] via-[#FA4616]/[0.02] to-[#FFB81C]/[0.02] rounded-full blur-3xl animate-float-slower bottom-1/3 -right-20" />
      </div>

      <Navbar />
      <div className="w-full">
        <HeroSection className="tv-slide-in-left" />
        <GallerySection images={galleryImages} className="tv-slide-in-right" />
        <section id="process" className="w-full flex flex-col items-center py-16">
          <h2 className="text-4xl font-bold mb-10 text-large-upper bg-gradient-to-r from-[#FFB81C] to-[#FA4616] bg-clip-text text-transparent">Process</h2>
          <InfoSection
            title="Measure"
            videoUrl="/assets/images/MEASUREFINAL.mp4"
            text="We begin every project by deeply understanding your vision. Through thoughtful consultation, we capture not just dimensions, but dreams. Our team creates detailed vision boards and mood collections that translate your ideas into visual inspiration. Using state-of-the-art 3D scanning technology, we precisely measure your space down to the millimeter, ensuring perfect fit and proportion for your custom piece. This foundation of accurate measurements combined with creative insight sets the stage for truly personalized fabrication."
          />
          <div className="h-6" />
          <InfoSection
            title="Design"
            videoUrl="/assets/images/Design.mov"
            text="With measurements and inspiration in hand, our skilled designers bring your vision to life in detailed 3D models. We meticulously craft every component, perfecting each curve, joint, and detail until the design captures exactly what you've imagined. You'll review comprehensive renderings that show your piece from every angle before we proceed. This collaborative approach ensures nothing moves forward until you're completely satisfied with the design, guaranteeing the final product will exceed your expectations."
          />
          <div className="h-6" />
          <InfoSection
            title="Build"
            videoUrl="/assets/images/BUILD.mp4"
            text="When your design receives final approval, our master craftspeople take over, transforming digital precision into physical perfection. Our workshop features premium machinery and tools operated by skilled hands committed to excellence. We select superior materials and employ time-tested techniques alongside modern innovations to create pieces built to last generations. Every cut, join, and finish is executed with meticulous attention to quality, resulting in heirloom-worthy custom fabrication that stands the test of time."
          />
        </section>
        <div className="max-w-4xl mx-auto px-2 md:px-8">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}