
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Transport from "./pages/Transport";
import Dedouanement from "./pages/Dedouanement";
import Fret from "./pages/Fret";
import Logistique from "./pages/Logistique";
import ImportExport from "./pages/ImportExport";
import ServicesDivers from "./pages/ServicesDivers";
import NosServices from "./pages/NosServices";
import Devis from "./pages/Devis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/dedouanement" element={<Dedouanement />} />
          <Route path="/fret" element={<Fret />} />
          <Route path="/logistique" element={<Logistique />} />
          <Route path="/import-export" element={<ImportExport />} />
          <Route path="/services-divers" element={<ServicesDivers />} />
          <Route path="/nos-services" element={<NosServices />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
