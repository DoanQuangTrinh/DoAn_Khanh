// app/blogs/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/posts"; // Đảm bảo đường dẫn đúng

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-brand-page-bg min-h-screen font-josefin">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="font-serif text-5xl lg:text-6xl font-bold text-brand-dark mb-12 text-center">
          Góc Sáng Tạo
        </h1>

        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              {/* Ảnh bìa */}
              <Link
                href={`/blogs/${post.slug}`}
                className="md:col-span-1 block overflow-hidden rounded-xl"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </Link>

              {/* Nội dung tóm tắt */}
              <div className="md:col-span-2">
                <div className="text-xl text-gray-500 mb-2">
                  <span>{post.date}</span> &middot; <span>{post.author}</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-brand-dark mb-3">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-about text-4xl md:text-5xl font-medium leading-tight"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="block text-xl font-text-content mb-2 font-text-content-min">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="font-semibold text-brand-dark hover:text-green-kids-title transition-all group-hover:tracking-wider"
                >
                  Đọc thêm &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
