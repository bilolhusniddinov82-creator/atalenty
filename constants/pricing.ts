import { PricingPlan } from "@/types";

export const PLANS: PricingPlan[] = [
  {
    name: "Single document",
    price: "$25",
    period: "per notarization",
    features: [
      "One document, one signer",
      "Video session with a commissioned notary",
      "Certified PDF copy",
      "Audit trail included",
    ],
    cta: "Book a notary",
    highlight: false,
  },
  {
    name: "Small business",
    price: "$79",
    period: "per month",
    features: [
      "Up to 8 notarizations / month",
      "Priority scheduling",
      "Team member seats (3)",
      "Bulk document upload",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "volume pricing",
    features: [
      "Unlimited notarizations",
      "Dedicated account manager",
      "API access",
      "Custom compliance workflows",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];
