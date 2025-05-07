import Link from "next/link";
import type { Post } from "./types";

interface PostsSectionProps {
  posts: Post[];
  className?: string;
}

export default function PostsSection({ posts, className = "" }: PostsSectionProps) {
  return (
    <section id="posts" className={`w-full py-12 bg-black flex flex-col items-center ${className}`}>
      <h2 className="text-4xl font-bold mb-8 text-orange-400 text-large-upper text-dark-gradient">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            href={`/${post.slug.current}`}
            key={post._id}
            className="group flex flex-col items-center hover:scale-105 transition-transform"
          >
            <div className="tv-mask w-[260px] h-[160px] bg-black flex items-center justify-center overflow-hidden border-4 border-orange-400 shadow-lg">
              <img src="/assets/images/project1.JPG" alt={post.title} className="object-cover w-full h-full" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-orange-200 group-hover:text-yellow-300 text-center text-large-upper">
              {post.title}
            </h3>
            <p className="text-lg text-orange-100 mt-1">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
// Add tv-mask CSS in globals.css for the bulging square effect. 