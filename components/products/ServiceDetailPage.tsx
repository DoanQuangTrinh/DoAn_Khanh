"use client";
import { listProducts } from "@/public/data/products";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { BookingDialog } from "./BookingDialog";
type ProductImage = {
  id: number;
  url: string;
  thumbnailUrl: string;
  alt: string;
};

export type ProductDetails = {
  title: string;
  description: string;
  images: ProductImage[];
  details: {
    label: string;
    value: string;
  }[];
  price: string;
  priceNotes: string[];
  disclaimer: string;
};
interface ImageGalleryProps {
  images: ProductImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full">
      <div
        className="
          relative w-full overflow-hidden 
          rounded-2xl shadow-lg 
          aspect-[4/3] // Giữ tỷ lệ khung hình 4:3
          bg-gray-200 // Màu nền khi ảnh đang tải
        "
      >
        <img
          key={selectedImage.id}
          src={selectedImage.url}
          alt={selectedImage.alt}
          className="
            absolute inset-0 w-full h-full object-cover 
            transition-opacity duration-300 ease-in-out
            animate-fadeIn
          "
        />
      </div>

      {/* 2b. Dải ảnh thumbnail */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`
              relative aspect-square w-full rounded-lg 
              overflow-hidden cursor-pointer
              ring-offset-2 ring-offset-[#FFFBF2]
              transition-all duration-300
              focus:outline-none focus:ring-2 
              ${
                selectedImage.id === image.id
                  ? "ring-2 ring-[#879382]"
                  : "opacity-70 hover:opacity-100"
              }
            `}
          >
            <img
              src={image.thumbnailUrl}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export const ServiceDetailPage = () => {
  const params = useParams();
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const product = listProducts?.find((item) => item.id === Number(params.id));
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const productData: ProductDetails | undefined = product?.details;
  if (!productData) {
    console.warn("Product not found for id", params?.id);
    return (
      <section className=" py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center">Sản phẩm không tìm thấy.</p>
        </div>
      </section>
    );
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-16">
        {" "}
        <a
          href="/services"
          className="
                  flex items-center gap-2 heading-title text-lg  opacity-80
                  hover:opacity-100 transition-opacity duration-300
                "
        >
          <FaChevronLeft size={16} />
          Dịch vụ
        </a>
      </div>
      <section className=" ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ImageGallery images={productData.images} />
          <div className="flex flex-col">
            <h1 className="title-work-shop md:!text-5xl text-3xl">
              {productData.title}
            </h1>
            <p className="mt-6 font-text-content-min ">
              {productData.description}
            </p>

            <div className="my-8 space-y-4">
              {productData.details.map((item) => (
                <div key={item.label} className="flex">
                  <span className="font-text-content-min text-xl w-28 shrink-0">
                    {item.label} :
                  </span>
                  <span className="font-text-content-min text-xl whitespace-pre-line">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-6 bg-[#E5E6D8] rounded-lg">
              <p className="font-text-content-min !text-4xl">
                {productData.price}
              </p>
              <ul className="mt-4 font-text-content-min space-y-2 list-disc list-inside">
                {productData.priceNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-xl font-text-content-min ">
              {productData.disclaimer}
            </p>
            <button
              onClick={() => setIsDialogVisible(true)}
              className="
              mt-auto w-full lg:w-auto px-10 py-4 rounded-lg button-workshop  text-workshop
              font-semibold text-lg
              transition-all duration-300 ease-in-out
              hover:bg-[#4A6341] hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-[#879382] focus:ring-opacity-50
            "
            >
              Đặt Lịch
            </button>
          </div>
        </div>
      </section>
      <BookingDialog
        workshopName="Tái Chế Sáng Tạo" // Tên này sẽ được lưu vào giỏ hàng
        data={productData}
        visible={isDialogVisible}
        onHide={() => setIsDialogVisible(false)}
      />
    </>
  );
};
