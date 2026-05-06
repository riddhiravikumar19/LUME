import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VideoCall from "./pages/VideoCall";
import ChatRoom from "./pages/ChatRoom";
import UploadResource from "./pages/UploadResource";
import Tasks from "./pages/Tasks";
import Library from "./pages/Library";
import PublicResources from "./pages/PublicResources";
import Groups from "./pages/Groups";
import Admin from "./pages/Admin";
import Leaderboard from "./pages/Leaderboard";
import Pomodoro from "./pages/Pomodoro";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/chat-room" element={<ChatRoom />} />
          <Route path="/upload-resource" element={<UploadResource />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/library" element={<Library />} />
          <Route path="/public-resources" element={<PublicResources />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
