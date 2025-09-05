import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle } from "lucide-react";

const SuccessStoriesSection = () => {
  const successStories = [
    {
      id: 1,
      name: "Alex M.",
      location: "Croydon",
      rating: 5,
      testimonial: "Passed first time with Yan's! The instructor was incredibly patient and made me feel confident behind the wheel.",
      course: "Intensive Course",
      duration: "2 months"
    },
    {
      id: 2,
      name: "Sarah K.",
      location: "Bromley",
      rating: 5,
      testimonial: "Excellent instructor, very patient and professional. The lessons were well-structured and I felt prepared for my test.",
      course: "Manual Course",
      duration: "3 months"
    },
    {
      id: 3,
      name: "James L.",
      location: "Sutton",
      rating: 5,
      testimonial: "Great experience with Yan's Driving Lessons. The instructor was knowledgeable and helped me overcome my nerves.",
      course: "Automatic Course",
      duration: "2.5 months"
    }
  ];

  return (
    <section className="py-16 bg-leo-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-leo-dark-gray mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful students who have passed their driving test with Yan's Driving Lessons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <Card key={story.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                {/* Student Avatar */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-leo-green rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-leo-dark-gray">{story.name}</h3>
                    <p className="text-gray-600">{story.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-leo-green fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({story.rating}/5)</span>
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 mb-4 italic">
                  "{story.testimonial}"
                </blockquote>

                {/* Course Details */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-leo-green mr-2" />
                      <span className="font-semibold">{story.course}</span>
                    </div>
                    <span className="text-gray-600">{story.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-leo-red text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
            <p className="text-lg mb-6">
              Join our successful students and get on the road with confidence. 
              Book your first lesson today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-leo-red px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Call 07305556219
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-leo-red transition-colors">
                Book Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
