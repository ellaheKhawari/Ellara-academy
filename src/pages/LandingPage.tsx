import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { PanelSection } from "@/components/sections/PanelSection";
import { SessionsSection } from "@/components/sections/SessionsSection";
import { SignupSection } from "@/components/sections/SignupSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { TeachersSection } from "@/components/sections/TeachersSection";
import { ChartsSection } from "@/components/sections/ChartsSection";
import { FAQSection } from "@/components/sections/FAQSection";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CoursesSection />
        <PanelSection />
        <SessionsSection />
        <ReviewsSection />
        <TeachersSection />
        <ChartsSection />
        <SignupSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
