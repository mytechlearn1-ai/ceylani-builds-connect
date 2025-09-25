import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 11 234 5678", "+94 77 123 4567"],
      link: "tel:+94112345678"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ceylaniglobal.lk", "projects@ceylaniglobal.lk"],
      link: "mailto:info@ceylaniglobal.lk"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Galle Road", "Colombo 03, Sri Lanka"],
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Contact our expert team for consultation 
            and personalized solutions tailored to your specific requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Why Choose Ceylani Global?</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    15+ years of industry experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Licensed and insured professionals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Competitive pricing and transparent quotes
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    24/7 customer support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-border/50 shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                    <Input placeholder="Your full name" className="border-border/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                    <Input placeholder="Your phone number" className="border-border/50" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-border/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Service Required</label>
                  <Input placeholder="e.g., Construction, Landscaping, Land Development" className="border-border/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Project Details</label>
                  <Textarea 
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    className="min-h-[120px] border-border/50"
                  />
                </div>
                
                <Button variant="professional" size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;