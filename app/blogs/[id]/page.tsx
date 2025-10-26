// app/blogs/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostById } from "@/lib/posts"; // Đảm bảo đường dẫn đúng
import type { Metadata } from "next";

type Props = {
    params: { id: string };
};

// --- Hàm lấy dữ liệu ---
async function getPostData(id: string) {
    const post = getPostById(id);
    if (!post) {
        notFound(); // Trả về 404 nếu không tìm thấy post
    }
    return post;
}

// --- (Tùy chọn) Generate Metadata cho SEO ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPostData(params.id);
    return {
        title: `${post.title} | GreenKids Blog`,
        description: post.excerpt,
    };
}

// --- (Tùy chọn) Generate Static Params để build tĩnh ---
export async function generateStaticParams() {
    const posts = getAllPosts();
    // Trả về mảng các `id` (slug)
    return posts.map((post) => ({
        id: post.slug,
    }));
}

// --- COMPONENT TRANG ---
export default async function PostDetailPage({ params }: Props) {
    const post = await getPostData(params.id);

    return (
        <div className="bg-brand-page-bg min-h-screen font-josefin text-brand-text">
            <div className="max-w-3xl mx-auto py-16 px-4">
                {/* Tiêu đề và thông tin bài viết */}
                <header className="mb-8">
                    <Link
                        href="/blogs"
                        className="text-gray-500 hover:text-brand-dark transition-colors mb-4 block"
                    >
                        &larr; Quay lại danh sách
                    </Link>
                    <h1 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                        {post.title}
                    </h1>
                    <div className="text-base text-gray-500">
                        <span>Viết bởi {post.author}</span> &middot; <span>{post.date}</span>
                    </div>
                </header>
                {/* Ảnh bìa */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
                    <div className="relative w-full h-full">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
                <article className="block text-sm font-text-content mb-2 font-text-content-min">
                    <p>{post.content}</p>
                </article>
            </div>
        </div>
    );
}