"use client";

import { useTrialMode } from "@/lib/trial-mode-provider";

/**
 * Wraps the Hadrian intake iframe. In trial mode, replaces the iframe with
 * a non-functional preview placeholder so visitors see what their intake
 * area would look like without the broken `https://hadrian.app` URL loading.
 */
export default function ApplyIframe({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const { isTrial } = useTrialMode();

  if (isTrial) {
    return (
      <div className="flex h-[800px] w-full flex-col items-center justify-center gap-3 border-0 bg-brand-primary-light/40 p-8 text-center">
        <p className="text-lg font-semibold text-gray-900">
          Your intake form will live here
        </p>
        <p className="max-w-md text-sm text-gray-600">
          When you launch this site, visitors will be able to apply directly on
          this page. Sign up to start collecting real submissions.
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      title={title}
      className="h-[800px] w-full border-0"
      allow="camera; microphone"
    />
  );
}
