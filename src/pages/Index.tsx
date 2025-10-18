import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Lands from "@/components/Lands";
import Projects from "@/components/Projects";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Lands />
        <Projects />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
