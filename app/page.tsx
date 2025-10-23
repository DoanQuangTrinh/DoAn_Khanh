// app/page.tsx
import AboutUsSection from "@/components/home/AboutUsSection";
import { HeroSection } from "@/components/home/HeroSection"; // Điều chỉnh đường dẫn nếu cần
import { HeroTicker } from "@/components/home/HeroTicker";
import { RegistrationForm } from "@/components/home/RegistrationForm";
import { TestimonialSlider } from "@/components/home/Testimonials";
import { WorkshopGrid } from "@/components/home/WorkshopGrid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroTicker />
      <AboutUsSection />
      <WorkshopGrid />
      <TestimonialSlider />
      <RegistrationForm />
      {/* Sau này bạn có thể dễ dàng thêm các section khác ở đây:
        <TestimonialsSection /> 
      */}
    </>
  );
}
