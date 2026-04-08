const TESTIMONIALS = [
  {
    quote:
      "Closed in 18 days. The process was completely digital and the team kept me informed every step of the way.",
    name: "Michael R.",
    title: "Homeowner",
    location: "Austin, TX",
  },
  {
    quote:
      "As a real estate investor, speed matters. This was the fastest approval I've ever gotten — 6 hours.",
    name: "Sarah K.",
    title: "Real Estate Investor",
    location: "Phoenix, AZ",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-gray-200 bg-white p-8"
            >
              <svg
                className="h-8 w-8 text-brand-primary/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
              </svg>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                {t.quote}
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">
                  {t.title} — {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
