import { useState } from "react";
import BondCard from "@/components/Bond/BondCard";
import BondFilters from "@/components/Bond/BondFilters";
import { mockBonds } from "@/data/mockBonds";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, Filter } from "lucide-react";

const Dashboard = () => {
  const [filteredBonds] = useState(mockBonds);
  const featuredBonds = mockBonds.filter(bond => bond.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Market Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-5 w-5 text-success" />
              <p className="text-sm text-muted-foreground">Market Trend</p>
            </div>
            <p className="text-2xl font-bold text-success">Rising</p>
            <p className="text-sm text-muted-foreground">Avg yield up 0.15%</p>
          </div>
          
          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <Star className="h-5 w-5 text-warning" />
              <p className="text-sm text-muted-foreground">Featured Bonds</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{featuredBonds.length}</p>
            <p className="text-sm text-muted-foreground">High-rated options</p>
          </div>
          
          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <Filter className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">Total Bonds</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{mockBonds.length}</p>
            <p className="text-sm text-muted-foreground">Available to trade</p>
          </div>
          
          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <p className="text-sm text-muted-foreground">Avg Yield</p>
            </div>
            <p className="text-2xl font-bold text-foreground">4.02%</p>
            <p className="text-sm text-success">+0.12% today</p>
          </div>
        </div>

        {/* Filters */}
        <BondFilters onFiltersChange={(filters) => console.log("Filters:", filters)} />

        {/* Featured Bonds */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-foreground">Featured Bonds</h2>
            <Badge className="bg-gradient-primary text-primary-foreground">
              Recommended
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredBonds.map((bond) => (
              <BondCard
                key={bond.id}
                bond={bond}
                onBuy={() => console.log("Buy bond:", bond.id)}
                onWatchlist={() => console.log("Add to watchlist:", bond.id)}
              />
            ))}
          </div>
        </section>

        {/* All Bonds */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">All Available Bonds</h2>
            <p className="text-sm text-muted-foreground">
              Showing {filteredBonds.length} of {mockBonds.length} bonds
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBonds.map((bond) => (
              <BondCard
                key={bond.id}
                bond={bond}
                onBuy={() => console.log("Buy bond:", bond.id)}
                onWatchlist={() => console.log("Add to watchlist:", bond.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;