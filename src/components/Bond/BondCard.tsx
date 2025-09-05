import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Bond {
  id: string;
  issuer: string;
  cusip: string;
  rating: string;
  yield: number;
  maturity: string;
  price: number;
  change: number;
  volume: string;
  coupon: number;
  featured?: boolean;
}

interface BondCardProps {
  bond: Bond;
  onBuy?: () => void;
  onWatchlist?: () => void;
}

const BondCard = ({ bond, onBuy, onWatchlist }: BondCardProps) => {
  const isPositive = bond.change >= 0;
  const ratingColor = getRatingColor(bond.rating);

  return (
    <Card className="p-6 hover:shadow-card-hover transition-smooth bg-gradient-card border-border">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-lg text-foreground">{bond.issuer}</h3>
            {bond.featured && (
              <Badge className="bg-gradient-primary text-primary-foreground">
                Featured
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">CUSIP: {bond.cusip}</p>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onWatchlist}
          className="text-muted-foreground hover:text-warning"
        >
          <Star className="h-5 w-5" />
        </Button>
      </div>

      {/* Bond Details */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-muted-foreground">Rating</p>
          <Badge className={cn("font-bold", ratingColor)}>
            {bond.rating}
          </Badge>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Maturity</p>
          <p className="font-semibold text-foreground">{bond.maturity}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Coupon</p>
          <p className="font-semibold text-foreground">{bond.coupon}%</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Volume</p>
          <p className="font-semibold text-foreground">{bond.volume}</p>
        </div>
      </div>

      {/* Price & Yield */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="text-sm text-muted-foreground">Current Yield</p>
          <p className="text-3xl font-bold text-foreground">{bond.yield}%</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Price</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-foreground">${bond.price}</p>
            <div className={cn(
              "flex items-center gap-1",
              isPositive ? "text-success" : "text-danger"
            )}>
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span className="text-sm font-medium">
                {isPositive ? '+' : ''}{bond.change.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          className="flex-1"
        >
          View Details
        </Button>
        <Button 
          onClick={onBuy}
          className="flex-1 bg-gradient-primary text-primary-foreground hover:bg-primary-hover"
        >
          Buy Bond
        </Button>
      </div>
    </Card>
  );
};

const getRatingColor = (rating: string) => {
  if (rating.startsWith('AAA') || rating.startsWith('AA')) {
    return "bg-success text-success-foreground";
  }
  if (rating.startsWith('A') || rating.startsWith('BBB')) {
    return "bg-warning text-warning-foreground";
  }
  return "bg-danger text-danger-foreground";
};

export default BondCard;