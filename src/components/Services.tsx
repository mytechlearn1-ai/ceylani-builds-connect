import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Construction, Trees } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Construction",
      description: "Complete construction solutions from residential to commercial projects with premium quality standards and timely delivery.",
      features: ["Residential Buildings", "Commercial Structures", "Renovation & Restoration"]
    },
    {
      icon: Construction,
      title: "Building Maintenance",
      description: "Comprehensive building maintenance services ensuring your property remains in optimal condition with preventive and corrective solutions.",
      features: ["Preventive Maintenance", "Emergency Repairs", "Facility Management"]
    },
    {
      icon: MapPin,
      title: "Land Development",
      description: "Professional land preparation and development services ensuring optimal site conditions for any construction project.",
      features: ["Site Preparation", "Infrastructure Planning", "Surveying & Mapping"]
    },
    {
      icon: Construction,
      title: "High-rise Services",
      description: "Specialized expertise in high-rise construction with advanced technology and safety protocols for complex projects.",
      features: ["Tower Construction", "Structural Engineering", "Safety Management"]
    },
    {
      icon: Trees,
      title: "Landscaping",
      description: "Transform spaces with professional landscaping services that enhance property value and environmental sustainability.",
      features: ["Garden Design", "Maintenance Services", "Irrigation Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and development solutions tailored to meet your specific 
            requirements with unmatched quality and professional expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:scale-105 border-border/50">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;