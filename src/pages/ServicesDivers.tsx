import { Settings, Wrench, ArrowRight, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesDivers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative h-[400px]">
        <img 
          src="/images/services-divers-banner.jpg" 
          alt="Services Divers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Services Divers</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Autres Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Settings className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Services sur Mesure</CardTitle>
              <CardDescription>Solutions personnalisées</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Conseil logistique</li>
                <li>Gestion de projets</li>
                <li>Solutions spéciales</li>
                <li>Services dédiés</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Hammer className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Support Technique</CardTitle>
              <CardDescription>Assistance technique</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Maintenance</li>
                <li>Installation</li>
                <li>Formation</li>
                <li>Support 24/7</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Wrench className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Services Additionnels</CardTitle>
              <CardDescription>Prestations complémentaires</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Emballage spécial</li>
                <li>Étiquetage</li>
                <li>Assemblage</li>
                <li>Services express</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-[#E31C25] hover:bg-[#ba161d]" asChild>
            <a href="/devis" className="inline-flex items-center">
              Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesDivers;
