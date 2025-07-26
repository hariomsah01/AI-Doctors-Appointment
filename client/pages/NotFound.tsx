import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Stethoscope } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-medical-neutral backdrop-blur-sm bg-white/80">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-xl flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-medical-text">MediCare AI</h1>
              <p className="text-xs text-medical-text/60">Smart Healthcare Solutions</p>
            </div>
          </Link>
        </div>
      </header>

      <div className="flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
          <h1 className="text-3xl font-bold text-medical-text mb-4">Page Not Found</h1>
          <p className="text-lg text-medical-text/70 mb-8">
            The page you're looking for doesn't exist. Let's get you back to your health journey.
          </p>
          <div className="space-y-3">
            <Link to="/">
              <Button className="w-full bg-medical-primary hover:bg-medical-primary/90 text-white">
                <Home className="w-4 h-4 mr-2" />
                Return to Homepage
              </Button>
            </Link>
            <Link to="/book">
              <Button variant="outline" className="w-full border-medical-primary text-medical-primary hover:bg-medical-light">
                <Stethoscope className="w-4 h-4 mr-2" />
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
