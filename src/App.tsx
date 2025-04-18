import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Herbs from "./pages/Herbs";
import TeaRecipes from "./pages/TeaRecipes";
import Chat from "./pages/Chat";
import Ebooks from "./pages/Ebooks";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import BlogDashboard from "./pages/admin/BlogDashboard";
import BlogEditor from "./pages/admin/BlogEditor";
import DebugBlogPosts from "./pages/admin/DebugBlogPosts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/herbs" element={<Herbs />} />
          <Route path="/tea-recipes" element={<TeaRecipes />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route path="/admin/blog" element={<BlogDashboard />} />
          <Route path="/admin/blog/new" element={<BlogEditor />} />
          <Route path="/admin/blog/edit/:id" element={<BlogEditor />} />
          <Route path="/admin/blog/debug" element={<DebugBlogPosts />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
