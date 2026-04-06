/*
 * PRICING SECTION
 *
 * Clean card layout for gym plans.
 * The "popular" plan is highlighted with accent border + badge.
 *
 * Design choice: no images here — pricing sells on clarity,
 * not visuals. Clean typography, clear hierarchy.
 */

import { SITE_CONFIG } from "@/app/config";

interface Plan {
  name: string;
  duration: string;
  originalPrice: string;
  price: string;
  perMonth: string;
  discount: string;
  features: string[];
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Monthly",
    duration: "1 Month",
    originalPrice: "₹2,000",
    price: "₹1,500",
    perMonth: "₹1,500/mo",
    discount: "25% OFF",
    features: [
      "Full gym access",
      "All equipment",
      "Locker room access",
      "Basic workout guidance",
    ],
  },
  {
    name: "Quarterly",
    duration: "3 Months",
    originalPrice: "₹5,000",
    price: "₹3,999",
    perMonth: "₹1,333/mo",
    discount: "20% OFF",
    features: [
      "Everything in Monthly",
      "1 free personal training session",
      "Custom workout split",
      "Diet consultation",
    ],
    popular: true,
  },
  {
    name: "Annual",
    duration: "12 Months",
    originalPrice: "₹15,000",
    price: "₹9,999",
    perMonth: "₹833/mo",
    discount: "33% OFF",
    features: [
      "Everything in Quarterly",
      "4 free PT sessions",
      "Priority equipment access",
      "Transformation program",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-bg-surface">
      <div className="section-container">
        {/* Section Label */}
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          Pricing
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Simple.{" "}
          <span className="text-gradient-gold">Transparent.</span>
        </h2>

        <p className="text-text-secondary text-lg mb-16 max-w-lg">
          No hidden fees. No contracts. <span className="text-green-400 font-semibold">Limited-time discounts</span> on all plans!
        </p>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${plan.popular
                  ? "bg-bg-elevated border-2 border-accent shadow-lg shadow-accent/10"
                  : "glass"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-bg-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name & Duration */}
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-text-muted text-sm mb-6">{plan.duration}</p>

              {/* Discount Badge */}
              <div className="mb-4">
                <span className="inline-block bg-green-500/15 text-green-400 text-xs font-bold px-3 py-1 rounded-full tracking-wider border border-green-500/20">
                  {plan.discount}
                </span>
              </div>

              {/* Price */}
              <p className="text-text-muted text-lg line-through mb-1">
                {plan.originalPrice}
              </p>
              <p className="text-4xl font-bold mb-1">
                {plan.popular ? (
                  <span className="text-gradient-gold">{plan.price}</span>
                ) : (
                  plan.price
                )}
              </p>
              <p className="text-text-muted text-sm mb-8">{plan.perMonth}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-accent mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center font-semibold py-3 rounded-full transition-all duration-200 ${plan.popular
                    ? "bg-accent text-bg-primary hover:bg-accent-hover"
                    : "border border-border text-text-primary hover:border-accent hover:text-accent"
                  }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
