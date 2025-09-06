import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";

const WhatsAppBookingForm = ({ trigger }: { trigger: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hi! I'd like to book driving lessons.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Type: ${formData.courseType}
Message: ${formData.message}

Please contact me to confirm availability.`;

    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/447305556219?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-lg flex items-center justify-center gap-2">
            <MessageCircle className="h-5 w-5 text-yan-green" />
            Book Your Lesson
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center text-muted-foreground text-sm mb-4">
          Fill out this form and we'll send your details via WhatsApp
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
            />
          </div>

          <div>
            <Label htmlFor="courseType">Course Type *</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, courseType: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select course type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manual">Manual - 10 Hour Course</SelectItem>
                <SelectItem value="automatic">Automatic - 10 Hour Course</SelectItem>
                <SelectItem value="individual">Individual Lessons</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any specific requirements or questions?"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-yan-green hover:bg-yan-blue text-white font-bold py-3 mt-6"
            disabled={!formData.name || !formData.email || !formData.phone || !formData.courseType}
          >
            Send via WhatsApp
          </Button>

          <div className="text-xs text-muted-foreground text-center mt-4">
            Your details will be sent via WhatsApp to book your lesson
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppBookingForm;