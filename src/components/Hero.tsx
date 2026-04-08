"use client";

import Link from "next/link";
import { useTrialField } from "@/lib/trial-mode-provider";

export default function Hero() {
  const businessName = useTrialField("businessName", "Lendzi Real Estate");
  const tagline = useTrialField(
    "tagline",
    "We combine AI-powered underwriting with experienced loan officers to deliver decisions in days — not weeks. Apply in minutes."
  );

  return (
    <section className="bg-gradient-to-b from-brand-primary-light to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Get Your Loan Approved Fast
          <br />
          <span className="text-brand-primary">with {businessName}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          {tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/apply"
            className="inline-flex rounded-lg bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            Start My Application
          </Link>
          <Link
            href="/about"
            className="inline-flex rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors duration-150 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
