import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

const ContactForm = ({ trigger }: { trigger: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    carType: [] as string[],
    startDate: "",
    callTime: "",
    address: "",
    postcode: ""
  });

  const handleCarTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, carType: [...prev.carType, type] }));
    } else {
      setFormData(prev => ({ ...prev, carType: prev.carType.filter(t => t !== type) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-leo-green">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-white font-bold text-lg">
            Schedule Your 1st Driving Lesson Here
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center text-white text-sm mb-4">
          🚗 Leo Driving School is now accepting new learners for Manual or Automatic driving courses! 🎯
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <Input
              placeholder="Full name"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              className="bg-white"
            />
          </div>

          {/* Gender */}
          <div>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Email */}
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-white"
            />
          </div>

          {/* Phone */}
          <div className="flex">
            <div className="flex items-center bg-white border border-r-0 rounded-l-md px-3">
              <span className="text-sm">🇬🇧 +1</span>
            </div>
            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="bg-white rounded-l-none"
            />
          </div>

          {/* Car Type */}
          <div>
            <Label className="text-white font-medium">What type of car do you want to learn in?</Label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="automatic"
                  checked={formData.carType.includes("automatic")}
                  onCheckedChange={(checked) => handleCarTypeChange("automatic", checked as boolean)}
                />
                <Label htmlFor="automatic" className="text-white">Automatic</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="manual"
                  checked={formData.carType.includes("manual")}
                  onCheckedChange={(checked) => handleCarTypeChange("manual", checked as boolean)}
                />
                <Label htmlFor="manual" className="text-white">Manual</Label>
              </div>
            </div>
          </div>

          {/* Start Date */}
          <div>
            <Label className="text-white font-medium">When would you like to get started?</Label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="asap"
                  checked={formData.startDate === "asap"}
                  onCheckedChange={(checked) => checked && setFormData(prev => ({ ...prev, startDate: "asap" }))}
                />
                <Label htmlFor="asap" className="text-white">As soon as possible</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="next-month"
                  checked={formData.startDate === "next-month"}
                  onCheckedChange={(checked) => checked && setFormData(prev => ({ ...prev, startDate: "next-month" }))}
                />
                <Label htmlFor="next-month" className="text-white">In the next month</Label>
              </div>
            </div>
          </div>

          {/* Call Time */}
          <div>
            <Textarea
              placeholder="What is the BEST time for us to call you tomorrow?"
              value={formData.callTime}
              onChange={(e) => setFormData(prev => ({ ...prev, callTime: e.target.value }))}
              className="bg-white"
              rows={2}
            />
          </div>

          {/* Address */}
          <div>
            <Input
              placeholder="Street Address"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              className="bg-white"
            />
          </div>

          {/* Postcode */}
          <div>
            <Input
              placeholder="Postcode"
              value={formData.postcode}
              onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))}
              className="bg-white"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 mt-6"
          >
            Submit
          </Button>

          {/* Footer Text */}
          <div className="text-xs text-white text-center mt-4">
            We offer DVSA approved, highly professional instructors across South, SW, SE London for just £35 per hour. ✅
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;