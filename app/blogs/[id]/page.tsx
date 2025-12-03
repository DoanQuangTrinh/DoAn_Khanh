// app/blogs/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { listProducts, getAllPosts, getPostById } from "@/lib/posts";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

// --- Helper: Icon Components (Inline SVG để không cần cài thêm thư viện) ---
const Icons = {
  Calendar: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  Clock: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  User: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  Tag: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  ),
  Check: () => (
    <svg
      className="w-4 h-4 text-green-500 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
};

// --- Hàm lấy dữ liệu đầy đủ (bao gồm cả dữ liệu Product gốc) ---
async function getFullPostData(id: string) {
  const blogPost = getPostById(id);
  // Tìm product gốc để lấy thêm thông tin chi tiết (lịch, giá, gallery...)
  const productData = listProducts.find((p) => p.id.toString() === id);

  if (!blogPost || !productData) {
    notFound();
  }
  return { blogPost, productData };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogPost } = await getFullPostData(params.id);
  return {
    title: `${blogPost.title} | GreenKids Blog`,
    description: blogPost.excerpt,
  };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ id: post.slug }));
}

// --- COMPONENT CHÍNH ---
export default async function PostDetailPage({ params }: Props) {
  const { blogPost, productData } = await getFullPostData(params.id);

  return (
    <div className="bg-brand-page-bg min-h-screen font-josefin text-brand-text pb-20">
      {/* 1. Header Section */}
      <div className="bg-white/50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-dark transition-colors mb-6 group">
            <span className="group-hover:-translate-x-1 transition-transform mr-1">
              &larr;
            </span>
            Quay lại danh sách
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase tracking-wider mb-3 font-bold">
                Workshop
              </span>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark mb-2 leading-tight">
                {blogPost.title}
              </h1>
              <div className="text-gray-500 text-sm flex items-center gap-4">
                <span>
                  Tác giả:{" "}
                  <span className="font-semibold text-brand-dark">
                    {blogPost.author}
                  </span>
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{blogPost.date}</span>
              </div>
            </div>
            {/* Giá tiền nổi bật ở mobile, ẩn ở desktop (vì sẽ hiện ở sidebar) */}
            <div className="md:hidden">
              <span className="text-3xl font-bold text-green-600">
                {productData.price}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 2. Cột Nội dung Chính (Chiếm 2 phần) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Ảnh bìa chính */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src={blogPost.imageUrl}
                alt={blogPost.title}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Nội dung bài viết */}
            <article className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Giới thiệu khóa học
              </h3>
              <p className="text-xl text-gray-600 font-light italic border-l-4 border-green-500 pl-4 mb-6">
                "{blogPost.excerpt}"
              </p>
              <div className="whitespace-pre-line text-gray-700">
                {blogPost.content}
              </div>
            </article>

            {/* Thư viện ảnh (Gallery) */}
            {productData.details.images.length > 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-green-600">📸</span> Hình ảnh thực tế
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {productData.details.images.map((img) => (
                    <div
                      key={img.id}
                      className="aspect-square rounded-lg overflow-hidden shadow-sm cursor-pointer group relative">
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lưu ý / Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex items-start gap-4">
              <div className="text-yellow-600 mt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-yellow-800 mb-1">
                  Lưu ý quan trọng
                </h4>
                <p className="text-yellow-700 text-sm">
                  {productData.disclaimer}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Sidebar (Chiếm 1 phần) - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Card thông tin đăng ký */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-100 rounded-full opacity-50 blur-xl"></div>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 font-medium uppercase mb-1">
                    Học phí trọn gói
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-green-600 tracking-tight">
                      {productData.price}
                    </span>
                    <span className="text-gray-400 text-sm">/ bé</span>
                  </div>
                </div>

                {/* Thông tin chi tiết */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="text-gray-400 mt-0.5">
                      <Icons.User />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-bold">
                        Độ tuổi
                      </span>
                      <span className="font-medium text-gray-700">
                        {productData.details.ageGroup}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-gray-400 mt-0.5">
                      <Icons.Clock />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-bold">
                        Thời lượng
                      </span>
                      <span className="font-medium text-gray-700">
                        {productData.description
                          .split(",")[0]
                          .replace("Khóa học ", "")}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-gray-400 mt-0.5">
                      <Icons.Calendar />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-bold">
                        Lịch học
                      </span>
                      <div className="flex flex-col gap-1 mt-1">
                        {productData.details.schedule.map((s, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium w-fit">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-gray-400 mt-0.5">
                      <Icons.Tag />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-bold">
                        Số lượng
                      </span>
                      <span className="font-medium text-gray-700">
                        Tối đa {productData.details.maxStudents} bé / lớp
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-brand-dark hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 transform duration-200 flex items-center justify-center gap-2">
                  Đăng ký ngay
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  Tư vấn miễn phí qua Zalo / Hotline
                </p>
              </div>

              {/* Card Ưu đãi */}
              {productData.priceNotes.length > 0 && (
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 border border-pink-100">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-red-500">🎁</span> Ưu đãi đặc biệt
                  </h4>
                  <ul className="space-y-3">
                    {productData.priceNotes.map((note, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700">
                        <Icons.Check />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
