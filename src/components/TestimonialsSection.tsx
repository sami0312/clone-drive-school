import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react";
import studentSuccess1 from "@/assets/student-success-1.png";
import studentSuccess2 from "@/assets/student-success-2.png";
import studentSuccess3 from "@/assets/student-success-3.png";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sab",
      title: "Fantastic from start to finish!",
      content: "My instructor was calm, clear, and supportive, helping me build confidence with every lesson. I couldn't have passed my test without them. Highly recommend!",
      rating: 5
    },
    {
      name: "Nathan",
      title: "Exceptional!",
      content: "I felt confident and well-prepared for my test. Highly recommend to anyone learning to drive!",
      rating: 5
    },
    {
      name: "Mary U.",
      title: "Outstanding!",
      content: "My experience with Leo Driving School was outstanding! I passed my test with confidence, thanks to their support. recommend!",
      rating: 5
    },
    {
      name: "Fatima",
      title: "5 Stars!",
      content: "I couldn't have asked for a better driving school. The lessons were detailed, informative, and tailored to my learning pace. Leo Driving School helped me achieve my goal – passing my test first time!",
      rating: 5
    },
    {
      name: "Joshua",
      title: "Absolutely brilliant!",
      content: "My instructor was incredibly patient and professional, making every lesson enjoyable and stress-free. Thanks to their guidance, I passed my test first time! I can't recommend them highly enough.",
      rating: 5
    },
    {
      name: "Grace",
      title: "Best in CROYDON",
      content: "My mates passed with them too and recommended I passed in my first attempt. Great instructors who really know their stuff!",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Video Section */}
        <div className="text-center mb-16">
          <div className="relative max-w-4xl mx-auto bg-primary rounded-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
              <Button size="lg" className="bg-yan-blue hover:bg-yan-green text-white rounded-full p-6">
                <Play className="h-8 w-8" />
              </Button>
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-yan-dark-blue">Our Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Empowering learners to achieve their driving dreams, one success story at a time!
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-2 border-yan-blue/20">
            <CardContent className="p-8">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-yan-dark-blue mb-2">
                  {testimonials[currentTestimonial].name}
                </h3>

                {/* Title */}
                <h4 className="text-lg font-semibold text-yan-blue mb-4">
                  {testimonials[currentTestimonial].title}
                </h4>

                {/* Content */}
                <blockquote className="text-muted-foreground italic text-lg leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 border-yan-blue text-yan-blue hover:bg-yan-blue hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 border-yan-blue text-yan-blue hover:bg-yan-blue hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-yan-blue" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Happy Drivers Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yan-dark-blue">Happy Drivers</h2>
          
          {/* Success Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
              <img src={studentSuccess1} alt="Student Success Story 1" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                Student Success Story 1
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
              <img src={studentSuccess2} alt="Student Success Story 2" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                Student Success Story 2
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
              <img src={studentSuccess3} alt="Student Success Story 3" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                Student Success Story 3
              </div>
            </div>
            {[...Array(6)].map((_, index) => (
              <div key={index + 3} className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-light/80 flex items-center justify-center">
                  <Button 
                    size="sm" 
                    className="bg-yan-blue hover:bg-yan-green text-white rounded-full p-3 opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                  Student Success Story {index + 4}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;