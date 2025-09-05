import { useState } from "react";
import { Search, Filter, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface FilterState {
  search: string;
  rating: string;
  maturity: string;
  yieldRange: [number, number];
  sector: string;
}

interface BondFiltersProps {
  onFiltersChange?: (filters: FilterState) => void;
}

const BondFilters = ({ onFiltersChange }: BondFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    rating: "all",
    maturity: "all",
    yieldRange: [2, 8],
    sector: "all"
  });

  const [showAIPrompt, setShowAIPrompt] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFiltersChange?.(updated);
  };

  const clearFilters = () => {
    const cleared = {
      search: "",
      rating: "all",
      maturity: "all",
      yieldRange: [2, 8] as [number, number],
      sector: "all"
    };
    setFilters(cleared);
    onFiltersChange?.(cleared);
  };

  const handleAIFilter = () => {
    // This would integrate with an AI service to parse natural language
    console.log("AI Filter:", aiPrompt);
    setAiPrompt("");
    setShowAIPrompt(false);
  };

  const activeFiltersCount = Object.values(filters).filter(
    (value, index) => {
      if (index === 3) return false; // Skip yieldRange for now
      return value && value !== "" && value !== "all";
    }
  ).length;

  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-foreground">Bond Filters</h2>
          {activeFiltersCount > 0 && (
            <Badge className="bg-primary text-primary-foreground">
              {activeFiltersCount} active
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setShowAIPrompt(!showAIPrompt)}
            className="gap-2 bg-gradient-primary text-primary-foreground hover:bg-primary-hover"
          >
            <Sparkles className="h-4 w-4" />
            AI Filter
          </Button>
          {activeFiltersCount > 0 && (
            <Button variant="outline" onClick={clearFilters} className="gap-2">
              <X className="h-4 w-4" />
              Clear All
            </Button>
          )}
        </div>
      </div>

      {/* AI Prompt */}
      {showAIPrompt && (
        <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="flex gap-2">
            <Input
              placeholder="Ask AI: 'Show me investment grade bonds maturing in 2-3 years with yield above 4%'"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              className="flex-1"
              onKeyDown={(e) => e.key === "Enter" && handleAIFilter()}
            />
            <Button onClick={handleAIFilter} disabled={!aiPrompt.trim()}>
              Apply
            </Button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by issuer, CUSIP, or bond name..."
            value={filters.search}
            onChange={(e) => updateFilters({ search: e.target.value })}
            className="pl-10"
          />
        </div>
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Rating */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Credit Rating</label>
          <Select value={filters.rating} onValueChange={(value) => updateFilters({ rating: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Any rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any rating</SelectItem>
              <SelectItem value="AAA">AAA</SelectItem>
              <SelectItem value="AA">AA+ to AA-</SelectItem>
              <SelectItem value="A">A+ to A-</SelectItem>
              <SelectItem value="BBB">BBB+ to BBB-</SelectItem>
              <SelectItem value="BB">BB+ and below</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Maturity */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Maturity Period</label>
          <Select value={filters.maturity} onValueChange={(value) => updateFilters({ maturity: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Any maturity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any maturity</SelectItem>
              <SelectItem value="1y">Less than 1 year</SelectItem>
              <SelectItem value="1-3y">1-3 years</SelectItem>
              <SelectItem value="3-5y">3-5 years</SelectItem>
              <SelectItem value="5-10y">5-10 years</SelectItem>
              <SelectItem value="10y+">More than 10 years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sector */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Sector</label>
          <Select value={filters.sector} onValueChange={(value) => updateFilters({ sector: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Any sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any sector</SelectItem>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="municipal">Municipal</SelectItem>
              <SelectItem value="treasury">Treasury</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Yield Range */}
      <div className="mb-4">
        <label className="text-sm font-medium text-foreground mb-3 block">
          Yield Range: {filters.yieldRange[0]}% - {filters.yieldRange[1]}%
        </label>
        <Slider
          value={filters.yieldRange}
          onValueChange={(value) => updateFilters({ yieldRange: value as [number, number] })}
          max={10}
          min={0}
          step={0.1}
          className="w-full"
        />
      </div>
    </Card>
  );
};

export default BondFilters;