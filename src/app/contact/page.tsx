import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact — Lendzi Real Estate",
  description: "Get in touch with Lendzi Real Estate. We're here to help.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Have questions about your loan? We&apos;re here to help.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <ContactInfo
            extraHours={
              <>
                <p className="text-gray-600">Saturday: 10:00 AM – 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </>
            }
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
