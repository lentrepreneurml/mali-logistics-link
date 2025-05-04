import { Truck, Box, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Transport = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[400px]">
        <img 
          src="/images/transport-banner.jpg" 
          alt="Transport" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Transport</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Nos Services de Transport</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Truck className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Transport Routier National</CardTitle>
              <CardDescription>Services de transport sur tout le territoire malien</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Livraison porte-à-porte</li>
                <li>Transport de marchandises</li>
                <li>Distribution urbaine</li>
                <li>Transport express</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Transport International</CardTitle>
              <CardDescription>Services de transport transfrontalier</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Transport régional</li>
                <li>Transit international</li>
                <li>Transport multimodal</li>
                <li>Suivi en temps réel</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Box className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Services Spécialisés</CardTitle>
              <CardDescription>Solutions sur mesure</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Transport réfrigéré</li>
                <li>Transport de matières dangereuses</li>
                <li>Transport de charges lourdes</li>
                <li>Transport sécurisé</li>
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
    </div>
  );
};

export default Transport;
