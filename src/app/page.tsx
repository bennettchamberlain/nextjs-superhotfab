import Link from "next/link";
import { type Post } from "./components/types";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import PostsSection from "./components/PostsSection";
import ContactSection from "./components/ContactSection";

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
    "/assets/images/project1.JPG",
    "/assets/images/project1.JPG",
    "/assets/images/project1.JPG",
    "/assets/images/project1.JPG",
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
        <div className="max-w-4xl mx-auto px-2 md:px-8">
          <GallerySection images={galleryImages} className="tv-slide-in-right" />
          <PostsSection posts={posts} className="tv-slide-in-left" />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}