import { Plane, Ship, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Fret = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1586528116493-9f21f033ff37?q=80" 
          alt="Fret" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Services de Fret</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Solutions de Fret</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Plane className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Fret Aérien</CardTitle>
              <CardDescription>Transport aérien rapide et sécurisé</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Express et régulier</li>
                <li>Cargo spécial</li>
                <li>Envois urgents</li>
                <li>Transport périssable</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Ship className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Fret Maritime</CardTitle>
              <CardDescription>Solutions maritimes complètes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Conteneur complet (FCL)</li>
                <li>Groupage (LCL)</li>
                <li>Transport conventionnel</li>
                <li>Transport frigorifique</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Truck className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Fret Terrestre</CardTitle>
              <CardDescription>Transport routier flexible</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Transport national</li>
                <li>Transport international</li>
                <li>Express routier</li>
                <li>Charge complète</li>
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

export default Fret;
