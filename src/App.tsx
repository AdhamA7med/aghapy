
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import MedicalSupplies from "./pages/MedicalSupplies";
import MedicalServices from "./pages/MedicalServices";
import NursingJobs from "./pages/NursingJobs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>شركة أغابي - خدمات التمريض المنزلي والرعاية الطبية</title>
        <meta name="description" content="شركة أغابي الرائدة في خدمات التمريض المنزلي، الخدمات الطبية المنزلية، تحاليل منزلية، رسم قلب منزلي، رعاية كبار السن، والمستلزمات الطبية في القاهرة. متاح 24/7" />
        <meta name="keywords" content="تمريض منزلي, خدمات طبية منزلية, تحاليل منزلية, رسم قلب منزلي, رعاية كبار السن, مستلزمات طبية, القاهرة, أغابي" />
        <meta name="author" content="شركة أغابي" />
        <meta property="og:title" content="شركة أغابي - خدمات التمريض المنزلي والرعاية الطبية" />
        <meta property="og:description" content="الرائدة في خدمات التمريض المنزلي والخدمات الطبية المنزلية في القاهرة" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://agape-nursing.com" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/medical-supplies" element={<MedicalSupplies />} />
          <Route path="/medical-services" element={<MedicalServices />} />
          <Route path="/nursing-jobs" element={<NursingJobs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
