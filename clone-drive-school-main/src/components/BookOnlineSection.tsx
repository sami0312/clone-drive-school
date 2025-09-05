import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, CreditCard, CheckCircle } from "lucide-react";

const BookOnlineSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Choose Your Course",
      description: "Select manual or automatic 10-hour course"
    },
    {
      icon: Clock,
      title: "Pick Your Schedule",
      description: "Choose convenient times that work for you"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay securely online with instant confirmation"
    },
    {
      icon: CheckCircle,
      title: "Start Learning",
      description: "Your instructor will contact you within 24 hours"
    }
  ];

  return (
    <section id="book" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Book Online in 4 Easy Steps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and instant booking for your driving lessons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-yan-blue rounded-full w-fit">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-bold text-yan-blue mb-2">STEP {index + 1}</div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-yan-blue hover:bg-yan-light-blue text-white px-12 py-4 text-lg">
            Start Booking Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookOnlineSection;