const STEPS = [
  {
    step: 1,
    title: "Apply Online",
    description:
      "Complete our secure digital application in under 10 minutes. No paperwork needed upfront.",
  },
  {
    step: 2,
    title: "AI Review",
    description:
      "Our AI engine analyzes your application, verifies documents, and runs credit checks automatically.",
  },
  {
    step: 3,
    title: "Get Funded",
    description:
      "Receive your pre-approval letter, lock your rate, and close on your timeline.",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Three simple steps from application to funding.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-lg font-semibold text-white">
                {item.step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
