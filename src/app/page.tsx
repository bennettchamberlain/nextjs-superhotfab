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
    <main className="min-h-screen w-full font-sans">
      <Navbar />
      <div className="max-w-4xl mx-auto px-2 md:px-8">
        <HeroSection className="tv-slide-in-left" />
        <GallerySection images={galleryImages} className="tv-slide-in-right" />
        <PostsSection posts={posts} className="tv-slide-in-left" />
        <ContactSection />
      </div>
    </main>
  );
}