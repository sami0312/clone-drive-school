import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AreasSection = () => {
  const areas = [
    "Central London", "South London", "North London", "East London", "West London",
    "Croydon", "Bromley", "Greenwich", "Lewisham", "Southwark", "Kingston",
    "Richmond", "Wandsworth", "Lambeth", "Merton", "Sutton"
  ];

  return (
    <section id="areas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Areas We Cover</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide professional driving lessons across London and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-yan-blue" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;