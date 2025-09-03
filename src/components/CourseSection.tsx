import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import courseIllustration from "@/assets/course-illustration.jpg";

const CourseSection = () => {
  const courses = [
    {
      title: "MANUAL 10-HOUR COURSE",
      price: "£380.00",
      hours: "10",
      type: "manual",
      isBestSeller: true
    },
    {
      title: "AUTOMATIC 10-HOUR COURSE", 
      price: "£400.00",
      hours: "10",
      type: "automatic",
      isBestSeller: true
    }
  ];

  return (
    <section id="courses" className="py-16 bg-yan-light-gray">
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
            CHOOSE YOUR COURSE TYPE - MANUAL OR AUTOMATIC
          </h3>
        </div>

        {/* Course Cards */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                {course.isBestSeller && (
                  <Badge className="absolute top-4 right-4 bg-yan-blue text-white font-semibold z-10">
                    BEST SELLER
                  </Badge>
                )}
                
                <CardHeader className="relative">
                  <div className="bg-primary text-white rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold mb-2">{course.hours}</div>
                    <div className="text-sm">HOURS</div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-center text-primary">
                    {course.title}
                  </h4>
                  
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-yan-blue">
                      {course.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Professional {course.type} driving lessons
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-yan-blue hover:bg-yan-light-blue text-white font-semibold py-3"
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