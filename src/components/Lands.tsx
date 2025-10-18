import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Home } from "lucide-react";

const Lands = () => {
  const lands = [
    {
      title: "Prime Commercial Land - Colombo 07",
      location: "Colombo 07, Sri Lanka",
      size: "15 Perches",
      price: "Contact for Price",
      description: "Prime commercial land in the heart of Colombo with excellent connectivity and development potential.",
      status: "Available"
    },
    {
      title: "Residential Plot - Nugegoda",
      location: "Nugegoda, Sri Lanka",
      size: "20 Perches",
      price: "LKR 35M",
      description: "Ideal residential plot in a peaceful neighborhood with access to all amenities and utilities.",
      status: "Available"
    },
    {
      title: "Agricultural Land - Kurunegala",
      location: "Kurunegala District",
      size: "2 Acres",
      price: "LKR 12M",
      description: "Fertile agricultural land suitable for various crops with good water access and road connectivity.",
      status: "Available"
    }
  ];

  return (
    <section id="lands" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Lands <span className="text-primary">For Sale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover premium land opportunities across Sri Lanka. From commercial plots 
            to residential properties, find your perfect investment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {lands.map((land, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-strong transition-all duration-500 border-border/50">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {land.status}
                    </span>
                    <Home className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {land.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {land.location}
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-semibold text-foreground">{land.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-semibold text-primary">{land.price}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {land.description}
                </p>
                
                <Button variant="ghost" className="group/btn p-0 h-auto w-full justify-center">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Have a property to list? Register with us!</p>
          <Button 
            variant="professional" 
            size="lg"
            onClick={() => window.open('https://forms.gle/YZsTnoQgPmhbHuYB6', '_blank')}
          >
            Register Your Property
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Lands;
