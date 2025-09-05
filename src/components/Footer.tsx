import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube, Clock, Award } from "lucide-react";

const Footer = () => {
  const socialMediaLinks = [
    { name: "Facebook", href: "https://facebook.com/yansdrivinglessons", icon: Facebook, color: "hover:text-blue-400" },
    { name: "Instagram", href: "https://instagram.com/yansdrivinglessons", icon: Instagram, color: "hover:text-pink-400" },
    { name: "YouTube", href: "https://youtube.com/@yansdrivinglessons", icon: Youtube, color: "hover:text-red-400" },
    { name: "WhatsApp", href: "https://wa.me/447305556219", icon: MessageCircle, color: "hover:text-green-400" }
  ];

  return (
    <footer className="bg-yan-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">YAN'S</span>
              <span className="text-yan-blue"> DRIVING</span>
              <div className="text-xs">LESSONS</div>
            </div>
            <p className="text-gray-300 mb-4">
              Get on the road with the UK's leading independent driving school network.
            </p>
            
            {/* Trust Indicators */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-yan-green" />
                <span className="text-sm">100% DVSA Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-yan-green" />
                <span className="text-sm">24/7 Instructor Allocation</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yan-blue" />
                <span>07305556219</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yan-blue" />
                <span>info@yansdrivinglessons.co.uk</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yan-blue" />
                <span>London, UK</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialMediaLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-yan-blue hover:bg-yan-green rounded-full transition-colors ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yan-green transition-colors">Home</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-yan-blue transition-colors">Courses & Prices</a></li>
              <li><a href="#resources" className="text-gray-300 hover:text-yan-blue transition-colors">Resources</a></li>
              <li><a href="#areas" className="text-gray-300 hover:text-yan-blue transition-colors">Areas We Cover</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yan-blue transition-colors">Help & Support</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Automatic Courses</span></li>
              <li><span className="text-gray-300">Manual Courses</span></li>
              <li><span className="text-gray-300">Intensive Courses</span></li>
              <li><span className="text-gray-300">Refresher Lessons</span></li>
              <li><span className="text-gray-300">Test Car Hire</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-4">
              Ready to start your driving journey? Contact us today!
            </p>
            <div className="space-y-3">
              <Button className="w-full bg-yan-blue hover:bg-yan-green text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button variant="outline" className="w-full border-yan-blue text-yan-blue hover:bg-yan-blue hover:text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Yan's Driving Lessons LTD. All rights reserved.</p>
          <p className="mt-2 text-sm">
            DVSA approved instructors • Fully insured vehicles • Money back guarantee
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;