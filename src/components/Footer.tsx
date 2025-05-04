import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#151A24] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LTD Logistique</h3>
            <p className="text-gray-400 mb-4">
              Solutions logistiques professionnelles pour tous vos besoins d'import-export au Mali.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#E31C25]" />
                <span className="text-gray-400">+223 98 92 40 43</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#E31C25]" />
                <a href="mailto:commercial@ltd-logistique.com" className="text-gray-400 hover:text-white">
                  commercial@ltd-logistique.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#E31C25]" />
                <span className="text-gray-400">Bamako, Mali</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="/nos-services" className="text-gray-400 hover:text-white">Nos Services</a></li>
              <li><a href="/devis" className="text-gray-400 hover:text-white">Demander un devis</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/#process" className="text-gray-400 hover:text-white">Notre processus</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} LTD Logistique SARL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 