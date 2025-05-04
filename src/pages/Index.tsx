import { Phone, Clock, MapPin, Truck, Plane, FileText, Globe, Package2, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/home-banner.jpg" 
            alt="Logistique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solutions logistiques professionnelles au Mali
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transport, dédouanement et solutions logistiques complètes pour vos besoins d'import-export
            </p>
            <Button onClick={scrollToServices} className="bg-[#E31C25] hover:bg-[#ba161d] text-lg px-8">
              Nos services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions logistiques complètes pour répondre à tous vos besoins
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Transport", description: "Transport routier national et international", link: "/transport" },
              { icon: FileText, title: "Dédouanement", description: "Gestion complète des procédures douanières", link: "/dedouanement" },
              { icon: Plane, title: "Fret", description: "Services de fret aérien, maritime et terrestre", link: "/fret" },
              { icon: Package2, title: "Logistique", description: "Solutions logistiques sur mesure", link: "/logistique" },
              { icon: Globe, title: "Import-Export", description: "Accompagnement dans vos opérations internationales", link: "/import-export" },
              { icon: Package2, title: "Services Divers", description: "Solutions adaptées à vos besoins spécifiques", link: "/services-divers" },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="w-12 h-12 text-[#E31C25] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={service.link} className="text-[#E31C25] hover:text-[#ba161d] inline-flex items-center">
                  En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Processus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une approche structurée pour garantir l'efficacité de nos services
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Évaluation", description: "Analyse de vos besoins spécifiques" },
              { step: "2", title: "Planification", description: "Élaboration d'une solution sur mesure" },
              { step: "3", title: "Exécution", description: "Mise en œuvre des services convenus" },
              { step: "4", title: "Suivi", description: "Contrôle et reporting continu" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#E31C25] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
              <p className="text-gray-300 mb-8">
                Pour toute demande de devis ou d'information, notre équipe est à votre disposition
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#E31C25]" />
                  <span>Bamako, République du Mali</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#E31C25]" />
                  <span>+223 98 92 40 43</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#E31C25]" />
                  <span>maroufkoita62@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-[#E31C25]" />
                  <span>Lun - Ven: 8h00 - 18h00</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nom complet"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400"
                />
                <textarea 
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-[#E31C25] hover:bg-[#ba161d]">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
