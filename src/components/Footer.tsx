"use client";

import Link from "next/link";
import { useTrialField } from "@/lib/trial-mode-provider";

export default function Footer() {
  const businessName = useTrialField("businessName", "Lendzi Real Estate");
  const tagline = useTrialField("tagline", "Real estate purchase financing — fast, flexible, and built for investors.");
  const phone = useTrialField("contactPhone", "(800) 555-0142");
  const email = useTrialField("contactEmail", "underwriting@lendzi.com");
  const address = useTrialField("address", "Austin, TX");

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold text-gray-900">
              {businessName}
            </p>
            <p className="mt-2 text-sm text-gray-600">{tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Quick Links
            </p>
            <nav className="mt-3 flex flex-col gap-2">
              <Link
                href="/apply"
                className="text-sm text-gray-600 transition-colors duration-150 hover:text-gray-900"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 transition-colors duration-150 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 transition-colors duration-150 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Contact
            </p>
            <div className="mt-3 space-y-2 text-sm text-gray-600">
              <p>
                <a
                  href={`tel:${phone}`}
                  className="transition-colors duration-150 hover:text-gray-900"
                >
                  {phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors duration-150 hover:text-gray-900"
                >
                  {email}
                </a>
              </p>
              <p>{address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {businessName}. All rights
            reserved.
          </p>
          <p className="mt-1">
            Powered by{" "}
            <a
              href="https://hadrian.build"
              className="text-gray-500 hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hadrian
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
