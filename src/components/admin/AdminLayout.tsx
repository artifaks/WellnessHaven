import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Book, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  
  // Check authentication on mount
  useEffect(() => {
    checkAuth();
  }, []);
  
  const checkAuth = async () => {
    try {
      setIsLoading(true);
      
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Redirect to login if not authenticated
        navigate('/login?redirect=/admin/blog');
        return;
      }
      
      setUser(session.user);
    } catch (error) {
      console.error('Auth error:', error);
      toast.error('Authentication error');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
      toast.success('Signed out successfully');
    } catch (error) {
      console.error('Sign out error:', error);
      toast.error('Failed to sign out');
    }
  };
  
  const navItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />
    },
    {
      name: "Blog Posts",
      path: "/admin/blog",
      icon: <FileText className="h-5 w-5" />
    },
    {
      name: "eBooks",
      path: "/admin/ebooks",
      icon: <Book className="h-5 w-5" />
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <Users className="h-5 w-5" />
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings className="h-5 w-5" />
    }
  ];
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-herb-200 border-t-herb-600"></div>
      </div>
    );
  }
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="fixed left-4 top-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white shadow-sm"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-md transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-center border-b">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/images/herbal-db-logo.png" 
                alt="Herbal Wise Haven" 
                className="h-8 w-auto"
              />
              <span className="font-serif text-lg font-semibold text-herb-800">
                Admin
              </span>
            </Link>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center rounded-md px-3 py-2 transition-colors ${
                      isActive(item.path)
                        ? 'bg-herb-50 text-herb-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Separator className="my-4" />
            
            <div className="mt-auto">
              <div className="mb-4 rounded-md bg-gray-50 p-3">
                <div className="font-medium text-sm text-gray-700">
                  {user?.email}
                </div>
                <div className="text-xs text-gray-500">
                  Administrator
                </div>
              </div>
              
              <Button
                variant="outline"
                className="w-full justify-start border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </nav>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 md:ml-64">
        {children}
      </main>
      
      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
