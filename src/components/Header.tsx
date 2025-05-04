import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <a href="/">
              <img src="/lovable-uploads/4d572a90-d2f6-412e-9ff3-121d8d63cc35.png" alt="LTD Logistique" className="h-16" />
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-[#E31C25]">Accueil</a>
              <a href="/nos-services" className="text-gray-700 hover:text-[#E31C25]">Services</a>
              <a href="/#process" className="text-gray-700 hover:text-[#E31C25]">Processus</a>
              <a href="/#contact" className="text-gray-700 hover:text-[#E31C25]">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#E31C25]" />
              <span className="text-sm text-gray-700">+223 75 31 55 00</span>
            </div>
            <Button className="bg-[#E31C25] hover:bg-[#ba161d]" asChild>
              <a href="/devis">Demander un devis</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 