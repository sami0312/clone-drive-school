import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Video, BookOpen, Download } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      icon: FileText,
      title: "Theory Test Guide",
      description: "Complete guide to passing your theory test",
      type: "PDF Guide"
    },
    {
      icon: Video,
      title: "Highway Code Videos",
      description: "Interactive videos covering all highway code rules",
      type: "Video Series"
    },
    {
      icon: BookOpen,
      title: "Practice Tests",
      description: "Mock theory tests with instant feedback",
      type: "Online Test"
    },
    {
      icon: Download,
      title: "Learning Materials",
      description: "Downloadable resources for learner drivers",
      type: "Downloads"
    }
  ];

  return (
    <section id="resources" className="py-16 bg-yan-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Learning Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free resources to help you prepare for your driving test
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-yan-blue/10 rounded-full w-fit">
                  <resource.icon className="h-6 w-6 text-yan-blue" />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <div className="text-sm text-yan-blue font-medium mb-4">{resource.type}</div>
                <Button variant="outline" className="border-yan-blue text-yan-blue hover:bg-yan-blue hover:text-white">
                  Access Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;