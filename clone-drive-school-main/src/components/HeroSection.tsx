import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroBanner1,
      title: "INSTRUCTOR ALLOCATED WITHIN 24 HOURS",
      subtitle: "Get on the road with the UK's leading independent driving school network. Discover your perfect course and call us to start your lessons today!",
      phone: "07305556219"
    },
    {
      image: heroBanner2,
      title: "PASS YOUR TEST IN AS LITTLE AS 2 MONTHS",
      subtitle: "SAVE up to £250 on any driving course with our proven intensive learning methods.",
      phone: "07305556219"
    },
    {
      image: heroBanner3,
      title: "AREAS WE COVER ACROSS LONDON",
      subtitle: "Professional driving instructors covering all major areas. Book your lessons today!",
      phone: "07305556219"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 hero-overlay" />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-hero">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                
                {/* Call Now Button */}
                <Button 
                  size="lg" 
                  className="bg-yan-blue hover:bg-yan-light-blue text-white text-lg px-8 py-6 rounded-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now at {slide.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/20 hover:bg-black/40"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        onClick={nextSlide}
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/20 hover:bg-black/40"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-yan-blue" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;