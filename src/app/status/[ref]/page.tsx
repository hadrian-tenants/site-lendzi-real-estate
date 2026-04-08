import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Status — Lendzi Real Estate",
  description: "Check the status of your loan application.",
};

export default async function StatusPage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Application Status
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Reference: <span className="font-mono font-medium">{ref}</span>
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <iframe
            src={`https://hadrian.app/status/lendzi-real-estate/${ref}`}
            title="Application Status"
            className="h-[600px] w-full border-0"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Questions about your application? Contact us at{" "}
            <a
              href="mailto:underwriting@lendzi.com"
              className="font-medium text-brand-primary hover:underline"
            >
              {"underwriting@lendzi.com"}
            </a>{" "}
            or call{" "}
            <a
              href="tel:(800) 555-0142"
              className="font-medium text-brand-primary hover:underline"
            >
              {"(800) 555-0142"}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
