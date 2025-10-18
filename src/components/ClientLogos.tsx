import logoSriLankan from "@/assets/logo-srilankan-airlines.png";
import logoMulberry from "@/assets/logo-mulberry.png";
import logoIndustrial from "@/assets/logo-industrial.png";

const ClientLogos = () => {
  const completedProjects = [
    { name: "Sri Lankan Airlines", logo: logoSriLankan },
    { name: "Mulberry Residence", logo: logoMulberry },
    { name: "Industrial Zone Development", logo: logoIndustrial }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations for delivering excellence in construction and development
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {completedProjects.map((project, index) => (
            <div 
              key={index} 
              className="group p-8 bg-background rounded-lg hover:shadow-strong transition-all duration-300 hover:scale-105 w-full flex items-center justify-center"
            >
              <img 
                src={project.logo} 
                alt={`${project.name} logo`}
                className="max-w-full h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
