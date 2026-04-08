"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What documents do I need to apply?",
    answer:
      "For most loan types, you'll need a government-issued ID, proof of income (pay stubs or tax returns), bank statements from the last 2-3 months, and employment verification. Our application will guide you through exactly what's required for your specific loan type.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Most applicants receive a pre-approval decision within 24 hours. Full underwriting typically takes 5-10 business days depending on the loan type and complexity. Our AI-powered review helps us process applications significantly faster than traditional lenders.",
  },
  {
    question: "What credit score do I need?",
    answer:
      "Minimum credit score requirements vary by loan product. Conventional loans typically require a 620+ score, while FHA loans may accept 580+. We evaluate the full picture — income, debt-to-income ratio, and employment history — not just your credit score.",
  },
  {
    question: "Are there any upfront fees?",
    answer:
      "There are no application fees or upfront costs to apply and receive a pre-approval. Origination fees and closing costs are disclosed transparently before you commit to the loan. No hidden fees, ever.",
  },
  {
    question: "Can I check my application status online?",
    answer:
      "Yes. After submitting your application, you'll receive a reference number. Visit our status page at any time to see real-time updates on where your application stands in the review process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`ml-4 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-150 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-gray-100 px-6 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
