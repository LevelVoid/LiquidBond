import { Bell, ChevronDown, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-gradient-header px-6 shadow-header">
      {/* Market Summary */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-success" />
          <span className="text-sm font-medium text-foreground">US 10Y</span>
          <span className="text-sm font-bold text-success">4.25%</span>
          <span className="text-xs text-success">+0.12%</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingDown className="h-4 w-4 text-danger" />
          <span className="text-sm font-medium text-foreground">US 30Y</span>
          <span className="text-sm font-bold text-danger">4.45%</span>
          <span className="text-xs text-danger">-0.08%</span>
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        {/* Portfolio Value */}
        <div className="flex items-center gap-2 rounded-lg bg-card px-3 py-2 shadow-card">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Portfolio</p>
            <p className="text-sm font-bold text-success">$125,430</p>
          </div>
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 bg-danger text-danger-foreground text-xs">
            3
          </Badge>
        </Button>

        {/* User Profile */}
        <Button variant="ghost" className="gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">JD</span>
          </div>
          <span className="text-sm font-medium">John Doe</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;