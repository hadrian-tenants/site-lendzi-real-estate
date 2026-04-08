import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Lendzi Real Estate",
  description:
    "Learn about Lendzi Real Estate and our mission to make lending fast and transparent.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          About {"Lendzi Real Estate"}
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
          <p>
            {"Lendzi Real Estate"} was founded with a simple mission: make
            lending fast, transparent, and accessible. We believe getting a loan
            shouldn&apos;t mean weeks of paperwork and uncertainty.
          </p>

          <p>
            Our platform combines AI-powered underwriting with experienced loan
            officers to deliver decisions in days, not weeks. We review every
            application with the thoroughness of a traditional lender and the
            speed of modern technology.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-gray-900">
            Our Approach
          </h2>

          <ul className="list-inside list-disc space-y-3">
            <li>
              <strong>Speed without shortcuts</strong> — AI handles the
              repetitive work so our team can focus on making smart decisions.
            </li>
            <li>
              <strong>Transparent pricing</strong> — No hidden fees, no surprise
              costs. You know exactly what you&apos;re paying before you commit.
            </li>
            <li>
              <strong>Human support</strong> — Technology accelerates the
              process, but real people are always available when you need them.
            </li>
          </ul>

          <h2 className="pt-4 text-2xl font-semibold text-gray-900">
            Get in Touch
          </h2>

          <p>
            Ready to get started? Visit our{" "}
            <a
              href="/apply"
              className="font-medium text-brand-primary hover:underline"
            >
              application page
            </a>{" "}
            to apply online, or reach out at{" "}
            <a
              href="mailto:underwriting@lendzi.com"
              className="font-medium text-brand-primary hover:underline"
            >
              {"underwriting@lendzi.com"}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
