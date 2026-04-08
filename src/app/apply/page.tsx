import type { Metadata } from "next";
import ApplyIframe from "@/components/ApplyIframe";

export const metadata: Metadata = {
  title: "Apply Now — Lendzi Real Estate",
  description:
    "Start your loan application with Lendzi Real Estate. Apply online in minutes.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Start Your Application
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Complete the form below to begin your loan application with{" "}
            {"Lendzi Real Estate"}. It only takes a few minutes.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <ApplyIframe
            src="https://hadrian.app/apply/lendzi-real-estate"
            title="Loan Application"
          />
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Your information is protected with 256-bit SSL encryption. We never
          share your data with third parties.
        </p>
      </div>
    </div>
  );
}
