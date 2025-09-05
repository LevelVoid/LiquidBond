import { Bond } from "@/components/Bond/BondCard";

export const mockBonds: Bond[] = [
  {
    id: "1",
    issuer: "U.S. Treasury",
    cusip: "912810SE4",
    rating: "AAA",
    yield: 4.25,
    maturity: "Nov 15, 2033",
    price: 98.75,
    change: 0.12,
    volume: "$2.3B",
    coupon: 4.125,
    featured: true
  },
  {
    id: "2",
    issuer: "Apple Inc.",
    cusip: "037833CT5",
    rating: "AA+",
    yield: 3.85,
    maturity: "May 11, 2029",
    price: 102.45,
    change: -0.08,
    volume: "$850M",
    coupon: 3.75,
    featured: true
  },
  {
    id: "3",
    issuer: "Microsoft Corp",
    cusip: "594918BR6",
    rating: "AAA",
    yield: 3.95,
    maturity: "Feb 06, 2026",
    price: 101.20,
    change: 0.25,
    volume: "$1.2B",
    coupon: 4.00,
    featured: true
  },
  {
    id: "4",
    issuer: "Johnson & Johnson",
    cusip: "478160BU0",
    rating: "AAA",
    yield: 4.15,
    maturity: "Sep 01, 2035",
    price: 99.80,
    change: 0.05,
    volume: "$650M",
    coupon: 4.0
  },
  {
    id: "5",
    issuer: "Berkshire Hathaway",
    cusip: "084664CR2",
    rating: "AA+",
    yield: 4.35,
    maturity: "Jan 15, 2031",
    price: 97.90,
    change: -0.15,
    volume: "$425M",
    coupon: 4.25
  },
  {
    id: "6",
    issuer: "Coca-Cola Company",
    cusip: "191216BZ8",
    rating: "AA-",
    yield: 3.75,
    maturity: "Mar 25, 2027",
    price: 103.25,
    change: 0.18,
    volume: "$320M",
    coupon: 3.80
  },
  {
    id: "7",
    issuer: "Walmart Inc.",
    cusip: "931142EH9",
    rating: "AA",
    yield: 4.05,
    maturity: "Jul 08, 2030",
    price: 100.75,
    change: 0.32,
    volume: "$780M",
    coupon: 4.05
  },
  {
    id: "8",
    issuer: "Procter & Gamble",
    cusip: "742718EV9",
    rating: "AA-",
    yield: 3.90,
    maturity: "Oct 25, 2028",
    price: 101.85,
    change: -0.22,
    volume: "$540M",
    coupon: 3.95
  }
];