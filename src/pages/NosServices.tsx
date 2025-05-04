import { Truck, FileText, Plane, Package2, Globe, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NosServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative h-[400px]">
        <img 
          src="/images/nos-services-banner.jpg" 
          alt="Nos Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Nos Services</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Vue d'ensemble de nos services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Truck className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Transport</CardTitle>
              <CardDescription>Transport routier national et international</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/transport" className="text-[#E31C25] hover:underline">En savoir plus →</a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Dédouanement</CardTitle>
              <CardDescription>Gestion complète des procédures douanières</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/dedouanement" className="text-[#E31C25] hover:underline">En savoir plus →</a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Plane className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Fret</CardTitle>
              <CardDescription>Services de fret aérien, maritime et terrestre</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/fret" className="text-[#E31C25] hover:underline">En savoir plus →</a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Package2 className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Logistique</CardTitle>
              <CardDescription>Solutions logistiques sur mesure</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/logistique" className="text-[#E31C25] hover:underline">En savoir plus →</a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Import-Export</CardTitle>
              <CardDescription>Accompagnement dans vos opérations internationales</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/import-export" className="text-[#E31C25] hover:underline">En savoir plus →</a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Settings className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Services Divers</CardTitle>
              <CardDescription>Solutions adaptées à vos besoins spécifiques</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/services-divers" className="text-[#E31C25] hover:underline">En savoir plus →</a>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NosServices;
