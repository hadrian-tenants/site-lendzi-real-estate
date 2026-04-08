"use client";

import type { ReactNode } from "react";
import { useTrialField } from "@/lib/trial-mode-provider";

/**
 * Contact info column. Reads phone/email/address from trial config when in
 * trial mode, otherwise the build-time personalized values.
 */
export default function ContactInfo({
  extraHours,
}: {
  extraHours?: ReactNode;
}) {
  const phone = useTrialField("contactPhone", "(800) 555-0142");
  const email = useTrialField("contactEmail", "underwriting@lendzi.com");
  const address = useTrialField("address", "Austin, TX");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Phone</h2>
        <a
          href={`tel:${phone}`}
          className="mt-1 block text-brand-primary hover:underline"
        >
          {phone}
        </a>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">Email</h2>
        <a
          href={`mailto:${email}`}
          className="mt-1 block text-brand-primary hover:underline"
        >
          {email}
        </a>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">Address</h2>
        <p className="mt-1 text-gray-600">{address}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">Hours</h2>
        <p className="mt-1 text-gray-600">Monday – Friday: 9:00 AM – 6:00 PM</p>
        {extraHours}
      </div>
    </div>
  );
}
