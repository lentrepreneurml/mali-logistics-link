import { Package2, Warehouse, ClipboardList, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Logistique = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[400px]">
        <img 
          src="/images/logistique-banner.jpg" 
          alt="Logistique" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Solutions Logistiques</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Services Logistiques</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Warehouse className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Entreposage</CardTitle>
              <CardDescription>Solutions de stockage adaptées</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Stockage sécurisé</li>
                <li>Gestion des stocks</li>
                <li>Préparation de commandes</li>
                <li>Entreposage temporaire</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Package2 className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Distribution</CardTitle>
              <CardDescription>Services de distribution efficaces</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Distribution nationale</li>
                <li>Last-mile delivery</li>
                <li>Transport express</li>
                <li>Suivi en temps réel</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ClipboardList className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Gestion Supply Chain</CardTitle>
              <CardDescription>Optimisation logistique</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Planification logistique</li>
                <li>Gestion des flux</li>
                <li>Optimisation des coûts</li>
                <li>Reporting et KPI</li>
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

export default Logistique;
