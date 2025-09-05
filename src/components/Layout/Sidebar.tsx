import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  TrendingUp, 
  Filter, 
  Search, 
  Star, 
  Settings,
  HelpCircle,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const menuItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: TrendingUp, label: "Market Overview", active: false },
    { icon: Star, label: "Watchlist", active: false },
    { icon: Filter, label: "Bond Screener", active: false },
    { icon: Search, label: "Search Bonds", active: false },
  ];

  const bottomItems = [
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help & Support" },
    { icon: User, label: "Account" },
  ];

  return (
    <div className={cn(
      "flex h-screen w-64 flex-col bg-card border-r border-border shadow-card",
      className
    )}>
      {/* Logo & Header */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-border bg-gradient-header">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
          <BarChart3 className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">BondTrade</h1>
          <p className="text-sm text-muted-foreground">Professional</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-11 transition-smooth",
                item.active 
                  ? "bg-gradient-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground hover:bg-card-hover"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-border p-4">
        <div className="space-y-2">
          {bottomItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-3 h-11 text-muted-foreground hover:text-foreground hover:bg-card-hover transition-smooth"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;