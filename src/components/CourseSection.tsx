import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import courseIllustration from "@/assets/course-illustration.jpg";

const CourseSection = () => {
  const automaticCourses = [
    {
      title: "REFRESHER COURSE 6-HOURS",
      originalPrice: "£240.00",
      salePrice: "£210.00",
      hours: "6",
      isBestSeller: false
    },
    {
      title: "FAST-TRACK COURSE 10-HOURS",
      originalPrice: "£405.00",
      salePrice: "£350.00",
      hours: "10",
      isBestSeller: false
    },
    {
      title: "INTERMEDIATE COURSE 20-HOURS",
      originalPrice: "£810.00",
      salePrice: "£700.00",
      hours: "20",
      isBestSeller: true
    },
    {
      title: "INTERMEDIATE COURSE 26-HOURS",
      originalPrice: "£1,053.00",
      salePrice: "£910.00",
      hours: "26",
      isBestSeller: true
    },
    {
      title: "INTERMEDIATE COURSE 30-HOURS",
      originalPrice: "£1,215.00",
      salePrice: "£1,050.00",
      hours: "30",
      isBestSeller: true
    },
    {
      title: "BEGINNER COURSE 40-HOURS",
      originalPrice: "£1,620.00",
      salePrice: "£1,400.00",
      hours: "40",
      isBestSeller: false
    },
    {
      title: "BEGINNER COURSE 46-HOURS",
      originalPrice: "£1,863.00",
      salePrice: "£1,610.00",
      hours: "46",
      isBestSeller: true
    },
    {
      title: "MOTORWAY DRIVING",
      originalPrice: "",
      salePrice: "£150.00",
      hours: "6",
      isBestSeller: false
    },
    {
      title: "PRACTICAL TEST CAR HIRE",
      originalPrice: "",
      salePrice: "£150.00",
      hours: "",
      isBestSeller: false
    }
  ];

  return (
    <section id="courses" className="py-16 bg-leo-light-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            BOOK YOUR INTENSIVE DRIVING LESSONS TODAY WITH HIGHLY-TRAINED INSTRUCTORS
          </h2>
          <div className="w-full max-w-4xl mx-auto mb-8">
            <img 
              src={courseIllustration} 
              alt="Driving course illustration" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            TAKE A SPIN THROUGH OUR COURSES AND FIND THE PERFECT ONE TO GET YOU ON THE ROAD
          </h3>
          
          {/* Course Type Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-leo-green hover:bg-secondary-light text-white px-8 py-3 rounded-lg font-semibold"
            >
              AUTOMATIC COURSES
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-leo-green text-leo-green hover:bg-leo-green hover:text-white px-8 py-3 rounded-lg font-semibold"
            >
              MANUAL COURSES
            </Button>
          </div>
        </div>

        {/* Course Cards */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-6">AUTOMATIC COURSES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automaticCourses.map((course, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                {course.isBestSeller && (
                  <Badge className="absolute top-4 right-4 bg-leo-green text-white font-semibold z-10">
                    BEST SELLER
                  </Badge>
                )}
                
                <CardHeader className="relative">
                  <div className="bg-primary text-white rounded-lg p-6 text-center">
                    {course.hours && (
                      <div className="text-4xl font-bold mb-2">{course.hours}</div>
                    )}
                    <div className="text-sm">
                      {course.hours ? "HOURS" : "SERVICE"}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-center text-primary">
                    {course.title}
                  </h4>
                  
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-leo-green">
                      Sale price {course.salePrice}
                    </div>
                    {course.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        Regular price {course.originalPrice}
                      </div>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-leo-green hover:bg-secondary-light text-white font-semibold py-3"
                    size="lg"
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;