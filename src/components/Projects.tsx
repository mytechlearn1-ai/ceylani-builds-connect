import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import projectHighrise from "@/assets/project-highrise-sri-lanka.jpg";
import projectLandscaping from "@/assets/project-landscaping-sri-lanka.jpg";
import projectLandDevelopment from "@/assets/project-land-development-sri-lanka.jpg";

const Projects = () => {
  const projects = [
    {
      image: projectHighrise,
      title: "Colombo Sky Towers",
      category: "High-rise Development",
      description: "Premium residential high-rise complex featuring modern amenities and sustainable design solutions.",
      status: "Completed 2024"
    },
    {
      image: projectLandscaping,
      title: "Botanical Garden Estate",
      category: "Landscaping",
      description: "Comprehensive landscaping project creating harmonious outdoor spaces with native flora integration.",
      status: "Ongoing"
    },
    {
      image: projectLandDevelopment,
      title: "Industrial Zone Development",
      category: "Land Development",
      description: "Large-scale land preparation and infrastructure development for industrial complex expansion.",
      status: "Completed 2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing our commitment to excellence through successfully completed projects 
            that demonstrate our expertise and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-strong transition-all duration-500 border-border/50">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary font-medium">{project.status}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="professional" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;