import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-brand-primary py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Ready to Get Started?
        </h2>
        <p className="mt-3 text-lg text-white/80">
          Apply online in minutes. Get a decision within 24 hours.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/apply"
            className="inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-primary shadow-sm transition-colors duration-150 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
          >
            Start My Application
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
