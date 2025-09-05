import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import testCentresMap from "@/assets/test-centres-map.png";

const AreasSection = () => {
  const areas = [
    "Croydon", "Purley", "Thornton Heath", "South Norwood", "Norbury",
    "Crystal Palace", "Streatham", "Mitcham", "Morden", "Wimbledon",
    "New Malden", "Kingston", "Raynes Park", "Worcester Park", "Cheam",
    "Sutton", "Carshalton", "Wallington", "Banstead", "Epsom"
  ];

  const testCentres = [
    {
      name: "Mitcham Test Centre",
      address: "200 London Road, Mitcham, CR4 3HD",
      phone: "0300 200 1122"
    },
    {
      name: "West Wickham Test Centre", 
      address: "Pickhurst Lane, West Wickham, BR4 0HL",
      phone: "0300 200 1122"
    }
  ];

  return (
    <section id="areas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-yan-dark-blue">Areas We Cover</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide driving lessons across South London and surrounding areas. We specialize in test preparation for Mitcham and West Wickham test centres.
          </p>
        </div>

        {/* Test Centres */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-yan-dark-blue">Our Test Centres</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {testCentres.map((centre, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-yan-blue">{centre.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-yan-blue mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{centre.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-yan-blue" />
                      <p className="text-sm text-muted-foreground">{centre.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Map */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <img src={testCentresMap} alt="Test Centres Map" className="w-full rounded-lg" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Coverage Areas */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-yan-dark-blue">Coverage Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {areas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="h-5 w-5 text-yan-blue mx-auto mb-2" />
                  <p className="text-sm font-medium">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;