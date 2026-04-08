"use client";

import { useTrialMode } from "@/lib/trial-mode-provider";

/**
 * Renders a thin top banner when the site is loaded in trial preview mode.
 * Hidden entirely on real (non-trial) deploys.
 */
export default function TrialBanner() {
  const { isTrial } = useTrialMode();
  if (!isTrial) return null;
  return (
    <div className="w-full border-b border-brand-primary/30 bg-brand-primary-light px-4 py-2 text-center text-xs font-medium text-gray-700">
      Preview mode — sign up to launch this site and start collecting real
      submissions.
    </div>
  );
}
