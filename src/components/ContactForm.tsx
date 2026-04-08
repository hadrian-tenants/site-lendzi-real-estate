"use client";

import { useTrialFormGuard } from "@/lib/trial-mode-provider";

/**
 * Contact form. In trial mode, the submit button is visibly disabled and
 * a tooltip explains the visitor needs to sign up to launch the site.
 * Fields remain visible and editable so the visitor can SEE the form.
 */
export default function ContactForm() {
  const { isTrial, guardSubmit } = useTrialFormGuard();

  return (
    <form
      onSubmit={(e) => {
        if (!guardSubmit(e)) return;
        // Real submit handler would go here on personalized deploys.
      }}
      className="space-y-5 rounded-xl border border-gray-200 bg-white p-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          placeholder="How can we help you?"
        />
      </div>

      <div className="group relative">
        <button
          type="submit"
          aria-disabled={isTrial}
          className={`w-full rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
            isTrial
              ? "cursor-not-allowed bg-brand-primary/60"
              : "bg-brand-primary hover:opacity-90"
          }`}
        >
          {isTrial ? "Sign up to launch" : "Send Message"}
        </button>
        {isTrial && (
          <div
            role="tooltip"
            className="pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white shadow-lg group-hover:block"
          >
            Sign up to launch and start collecting real submissions
          </div>
        )}
      </div>
    </form>
  );
}
