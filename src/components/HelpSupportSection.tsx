import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, HelpCircle, FileText, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const HelpSupportSection = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "07305556219",
      hours: "Mon-Sun: 8AM-8PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "info@yansdrivinglessons.co.uk",
      hours: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat support",
      contact: "07305556219",
      hours: "Instant messaging"
    }
  ];

  const faqs = [
    {
      question: "How soon can I start lessons?",
      answer: "We aim to allocate an instructor within 24 hours of booking."
    },
    {
      question: "What do I need for my first lesson?",
      answer: "Just bring a provisional driving license and we'll handle the rest."
    },
    {
      question: "Can I change my lesson times?",
      answer: "Yes, we offer flexible scheduling with 24 hours notice."
    },
    {
      question: "Do you provide test car hire?",
      answer: "Yes, we offer test car hire for your practical driving test."
    }
  ];

  return (
    <section id="contact" className="py-16 bg-yan-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Help & Support</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help you every step of the way. Get in touch with any questions.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-yan-blue rounded-full w-fit">
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{option.description}</p>
                <p className="font-semibold text-yan-blue mb-2">{option.contact}</p>
                <p className="text-sm text-muted-foreground">{option.hours}</p>
                <Button className="mt-4 bg-yan-blue hover:bg-yan-light-blue text-white">
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Book a Lesson CTA */}
        <div className="text-center mb-12">
          <Card className="max-w-md mx-auto bg-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Ready to Start Learning?</h3>
              <p className="mb-6">Book your first lesson and get on the road today!</p>
              <ContactForm 
                trigger={
                  <Button className="bg-yan-blue hover:bg-yan-light-blue text-white">
                    Book Your First Lesson
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <HelpCircle className="h-5 w-5 text-yan-blue mr-2" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSupportSection;