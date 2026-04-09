// app/page.tsx
import AboutUsSection from "@/components/home/AboutUsSection";
import { HeroSection } from "@/components/home/HeroSection"; // Điều chỉnh đường dẫn nếu cần
import { HeroTicker } from "@/components/home/HeroTicker";
import { RegistrationForm } from "@/components/home/RegistrationForm";
import { TestimonialSlider } from "@/components/home/Testimonials";
import { WorkshopGrid } from "@/components/home/WorkshopGrid";
import AdSenseBanner from "@/components/ads/AdSenseBanner";
import AdSenseInFeed from "@/components/ads/AdSenseInFeed";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroTicker />
      
      {/* Quảng cáo sau Hero Section */}
      <AdSenseBanner adSlot="1234567890" className="my-4" />
      
      <AboutUsSection />
      
      {/* Quảng cáo in-feed sau About Us */}
      <AdSenseInFeed adSlot="0987654321" className="my-6" />
      
      <WorkshopGrid />
      
      {/* Quảng cáo sau Workshop Grid */}
      <AdSenseBanner adSlot="1122334455" className="my-4" />
      
      <TestimonialSlider />
      
      {/* Quảng cáo in-feed sau Testimonials */}
      <AdSenseInFeed adSlot="5566778899" className="my-6" />
      
      <RegistrationForm />
      
      {/* Quảng cáo cuối trang trước Footer */}
      <AdSenseBanner adSlot="9988776655" className="my-4" />
      
      {/* Sau này bạn có thể dễ dàng thêm các section khác ở đây:
        <TestimonialsSection /> 
      */}
    </>
  );
}
