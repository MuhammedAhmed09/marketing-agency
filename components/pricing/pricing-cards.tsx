"use client"

import Link from "next/link"
import { useState } from "react"
import { Check, X } from "lucide-react"
import { plans } from "./data"

export default function PricingCards() {
  const [isProject, setIsProject] = useState(false)

  return (
    <section className="py-16 px-4">

      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className="text-sm text-neutral-400">Monthly</span>
        <button
          onClick={() => setIsProject(!isProject)}
          className={`relative w-12 h-7 rounded-full transition-colors duration-200 border
            ${isProject ? "bg-violet-100 border-violet-300 dark:bg-violet-900/40" : "bg-neutral-800 border-neutral-700"}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-violet-600 transition-transform duration-200
            ${isProject ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
        <span className="text-sm text-neutral-400">
          Project{" "}
          <span className="text-xs bg-green-900/40 text-green-400 px-2 py-0.5 rounded ml-1">
            One-time
          </span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative group rounded-2xl p-6 transition-all duration-300
              hover:-translate-y-2 overflow-hidden
              ${plan.popular
                ? "border-2 border-violet-500 bg-neutral-900"
                : "border border-neutral-800 bg-neutral-900 hover:border-violet-400/50"
              }`}
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
              bg-linear-to-br from-violet-950/40 to-transparent pointer-events-none" />

            {plan.popular && (
              <span className="inline-block bg-violet-900/50 text-violet-300 text-xs font-medium
                px-3 py-1 rounded-md mb-3">
                Most Popular
              </span>
            )}

            <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
            <p className="text-xs text-neutral-500 mb-5 leading-relaxed">{plan.description}</p>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-semibold text-white">
                ${(isProject ? plan.projectPrice : plan.monthlyPrice).toLocaleString()}
              </span>
              <span className="text-xs text-neutral-500">
                {isProject ? " one-time" : "/month"}
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                  {feature.included
                    ? <Check size={14} className="text-green-400 shrink-0" />
                    : <X size={14} className="text-neutral-600 shrink-0" />
                  }
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href={plan.ctaLink}
              className={`block w-full text-center py-2.5 text-sm font-medium rounded-xl transition-all duration-200
                ${plan.popular
                  ? "bg-violet-600 hover:bg-violet-500 text-white"
                  : "border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white"
                }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}