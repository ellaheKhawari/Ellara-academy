import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/pages/hero/Hero.tsx";
import { CoursesSection } from "@/pages/sections/CoursesSection";
import { PanelSection } from "@/pages/sections/PanelSection";
import { SessionsSection } from "@/pages/sections/SessionsSection";
import { SignupSection } from "@/pages/sections/SignupSection";
import { ReviewsSection } from "@/pages/sections/ReviewsSection";
import { TeachersSection } from "@/pages/sections/TeachersSection";
import { ChartsSection } from "@/pages/sections/ChartsSection";
import { FAQSection } from "@/pages/sections/FAQSection";

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
