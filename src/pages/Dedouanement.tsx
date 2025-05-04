import { FileText, ShieldCheck, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dedouanement = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative h-[400px]">
        <img 
          src="/images/dedouanement-banner.jpg" 
          alt="Dédouanement" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Dédouanement</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Services de Dédouanement</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Procédures Douanières</CardTitle>
              <CardDescription>Gestion complète des formalités</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Déclaration en douane</li>
                <li>Classification tarifaire</li>
                <li>Calcul des droits et taxes</li>
                <li>Suivi des dossiers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Conformité Réglementaire</CardTitle>
              <CardDescription>Respect des normes en vigueur</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Conseil en réglementation</li>
                <li>Obtention des licences</li>
                <li>Certificats d'origine</li>
                <li>Documentation conforme</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Assistance Internationale</CardTitle>
              <CardDescription>Support global</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Transit international</li>
                <li>Régimes douaniers spéciaux</li>
                <li>Optimisation douanière</li>
                <li>Représentation en douane</li>
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

export default Dedouanement;
