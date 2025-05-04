import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#E31C25] mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page introuvable</p>
          <p className="text-gray-500 mb-8">La page que vous recherchez n'existe pas ou a été déplacée.</p>
          <a href="/" className="inline-block bg-[#E31C25] hover:bg-[#ba161d] text-white px-6 py-2 rounded-md">
            Retour à l'accueil
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
