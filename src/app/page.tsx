import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
