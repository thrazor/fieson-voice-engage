import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-space-grotesk text-primary">
          Fieson
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open('https://cal.com/bart-rosier/session-bart', '_blank')}
          >
            Book a demo
          </Button>
          <Button 
            size="sm" 
            className="btn-primary"
            onClick={() => window.open('https://cal.com/bart-rosier/session-bart', '_blank')}
          >
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;