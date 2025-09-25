import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Every project meets international standards with rigorous quality control processes."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Award-winning team with certified professionals and proven track record."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Dedicated to understanding and exceeding client expectations on every project."
    },
    {
      icon: Globe,
      title: "Sustainable Solutions",
      description: "Environmentally conscious practices for a sustainable future."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Ceylani Global</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Ceylani Global Pvt Ltd stands as a premier multi-disciplinary construction 
                company in Sri Lanka, delivering exceptional results across construction, 
                land development, high-rise services, and landscaping.
              </p>
              
              <p>
                Positioned strategically within Sri Lanka's rapidly growing real estate and 
                infrastructure sectors, we provide reliable, value-driven solutions that 
                serve both local communities and international clients with distinction.
              </p>
              
              <p>
                Our commitment to excellence, combined with cutting-edge technology and 
                sustainable practices, makes us the preferred partner for projects of 
                any scale and complexity.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="professional" size="lg">Learn More About Us</Button>
              <Button variant="outline" size="lg">Download Brochure</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;