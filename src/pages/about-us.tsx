import SupportersSection from "@/components/SupportersSection";
import FinancialPartners from "@/components/FinancialPartners";
import { SEOWrapper } from "@/components/SEO";

export default function AboutUs() {
  return (
    <SEOWrapper title="About Reticulo | AI Sports Platform">
      <main className="pt-20">
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">About Reticulo Sport Technology</h1>
            <p className="mt-3 text-lg text-slate-600">Building an AI-first sports ecosystem combining integrated performance analysis, digital academy infrastructure, automated payments, and WhatsApp-driven operations.</p>
            <p className="mt-2 text-lg text-slate-600">Our platform unifies athlete development and academy operations — from video analytics to curriculum management to billing — all in one clean, professional experience.</p>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Our Philosophy</h2>
              <p className="mt-2 text-slate-600">We’re on a mission to change how sport analysis is practiced — bringing ground breaking technologies to improve sport in India from the grassroots to the elite level.</p>
            </div>
            <div>
              <div className="aspect-video rounded-xl overflow-hidden border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mission_statement.png" alt="Our Philosophy" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-video rounded-xl overflow-hidden border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/philosophy-image.jpg" alt="Why Us" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold">Why Us</h2>
              <p className="mt-2 text-slate-600">We understand the process of becoming a professional athlete. Data-driven analytics is central in modern sport; we deliver the right value to athletes who want to compete at a high level.</p>
            </div>
          </div>
        </section>

        <SupportersSection />
        <FinancialPartners />
      </main>
    </SEOWrapper>
  );
}
