import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ShoppingCart, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import yansLogo from "@/assets/yans-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "COURSES & PRICES", href: "#courses" },
    { name: "RESOURCES", href: "#resources" },
    { name: "AREAS WE COVER", href: "#areas" },
    { name: "Help & Support", href: "#contact" },
    { name: "Book Online", href: "#book" }
  ];

  return (
    <>
      {/* Top Banner - Scrolling Text */}
      <div className="bg-yan-blue text-white py-2 text-sm font-medium overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8">100% DVSA APPROVED INSTRUCTOR</span>
          <span className="inline-block px-8">100% DVSA APPROVED INSTRUCTOR</span>
          <span className="inline-block px-8">100% DVSA APPROVED INSTRUCTOR</span>
          <span className="inline-block px-8">100% DVSA APPROVED INSTRUCTOR</span>
          <span className="inline-block px-8">100% DVSA APPROVED INSTRUCTOR</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={yansLogo} alt="Yan's Driving Lessons" className="h-12 w-12" />
            </div>

            {/* Phone Number */}
            <div className="hidden md:flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">07305556219</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-yan-blue transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-yan-blue text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-4 mt-4">
                    <div className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg">
                      <Phone className="h-4 w-4" />
                      <span className="font-semibold">07305556219</span>
                    </div>
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-foreground hover:text-yan-blue transition-colors py-2 border-b"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;