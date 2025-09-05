import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CourseSection from "@/components/CourseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AreasSection from "@/components/AreasSection";
import BookOnlineSection from "@/components/BookOnlineSection";
import HelpSupportSection from "@/components/HelpSupportSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CourseSection />
        <AreasSection />
        <TestimonialsSection />
        <BookOnlineSection />
        <HelpSupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
