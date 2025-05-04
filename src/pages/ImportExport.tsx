import { Globe, FileCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ImportExport = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[400px]">
        <img 
          src="/images/import-export-banner.jpg" 
          alt="Import-Export" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Import-Export</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Services Import-Export</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Commerce International</CardTitle>
              <CardDescription>Solutions globales</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Gestion des importations</li>
                <li>Gestion des exportations</li>
                <li>Conseil en commerce</li>
                <li>Études de marché</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileCheck className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Gestion administrative</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Licences d'importation</li>
                <li>Certificats d'origine</li>
                <li>Documentation douanière</li>
                <li>Légalisation consulaire</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-8 w-8 text-[#E31C25] mb-2" />
              <CardTitle>Conformité</CardTitle>
              <CardDescription>Respect des réglementations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Normes internationales</li>
                <li>Contrôle qualité</li>
                <li>Certification produits</li>
                <li>Conseil réglementaire</li>
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

export default ImportExport;
