import { AboutFllow } from "@/components/about/AboutFllow";
import { AboutSection } from "@/components/about/AboutSection";
import { LearningDesignSection } from "@/components/about/LearningDesignSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import { RegistrationForm } from "@/components/home/RegistrationForm";

export default function BookingContainerPage() {
    return (
        <>
            <AboutSection />
            <AboutUsSection />
            <LearningDesignSection />
            <AboutFllow />
            <RegistrationForm />
        </>
    );
}
