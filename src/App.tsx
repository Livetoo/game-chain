
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiProvider } from 'wagmi';
import { config, projectId } from './config/wagmi';
import Index from "./pages/Index";
import RestakingPage from "./pages/RestakingPage";
import ArbitragePage from "./pages/ArbitragePage";
import RecommendationsPage from "./pages/RecommendationsPage";
import ProfilesPage from "./pages/ProfilesPage";
import PlayToEarnPage from "./pages/PlayToEarnPage";
import NotFound from "./pages/NotFound";
import GamerProfilePage from "./pages/GamerProfilePage";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/restaking" element={<RestakingPage />} />
                <Route path="/arbitrage" element={<ArbitragePage />} />
                <Route path="/recommendations" element={<RecommendationsPage />} />
                <Route path="/profiles" element={<ProfilesPage />} />
                <Route path="/profiles/:id" element={<GamerProfilePage />} />
                <Route path="/play-to-earn" element={<PlayToEarnPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  );
};

export default App;
