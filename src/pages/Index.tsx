import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CourseSection from "@/components/CourseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CourseSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
