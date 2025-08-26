import { SEOWrapper } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <SEOWrapper>
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white dark:bg-slate-900">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 dark:hidden" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/60 px-3 py-1 text-xs text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-200">AI-first sports infrastructure</div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.15] sm:leading-[1.2] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                AI-Integrated Sports Platform
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Premium, modern experience that unifies AI analysis, digital academy operations, automated payments, and WhatsApp-first workflows.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <Link href="/contact-us" className="rounded-lg bg-indigo-600 text-white px-5 py-3 shadow-soft hover:bg-indigo-700">Get a Demo</Link>
                <Link href="/about-us" className="rounded-lg px-5 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 dark:text-slate-200 dark:border-slate-700 dark:hover:border-slate-600">Learn More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-center">All-in-One, Premium Platform</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                title: 'AI Integrated Analysis', desc: 'Automated tagging, video insights and benchmarks for players and coaches.'
              },{
                title: 'Digital Academy Infrastructure', desc: 'Scheduling, rosters, curriculum, attendance and performance — unified.'
              },{
                title: 'Payment Automation', desc: 'Standards-based billing & collections with Razorpay, IDFC FIRST Bank, HDFC Bank and Zoho.'
              },{
                title: 'WhatsApp Operations', desc: 'Reliable coordination with players and parents: notifications and updates.'
              },{
                title: 'Modern Cloud Stack', desc: 'Resilient infrastructure with performance, security and observability.'
              },{
                title: 'Privacy & Security', desc: 'Enterprise-grade access controls and data protection across workflows.'
              }].map((f) => (
                <div key={f.title} className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-soft bg-white dark:bg-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold">Trusted Integrations</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Best-in-class financial and operational partners.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {[
                { name: 'Razorpay', role: 'Payments Infrastructure', logo: '/partners/razorpay.svg', href: 'https://razorpay.com/' },
                { name: 'IDFC FIRST Bank', role: 'Banking Partner', logo: '/partners/idfc-first-bank.svg', href: 'https://www.idfcfirstbank.com/' },
                { name: 'HDFC Bank', role: 'Banking Partner', logo: '/partners/hdfc-bank.svg', href: 'https://www.hdfcbank.com/' },
                { name: 'Zoho Payments', role: 'Automation & Billing', logo: '/partners/zoho-payments.svg', href: 'https://www.zoho.com/' },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-soft bg-white dark:bg-slate-800 min-w-[220px] text-left"
                >
                  <div className="h-10 flex items-center">
                    <Image src={p.logo} alt={`${p.name} logo`} width={120} height={32} className="h-8 w-auto object-contain" />
                  </div>
                  <div className="mt-2 font-medium text-slate-900 dark:text-white">{p.name}</div>
                  <div className="mt-1 text-xs text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/40 inline-block px-2 py-0.5 rounded-full">{p.role}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold">Experience a premium, unified sports platform</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Book a live demo and explore AI insights, academy ops and automated billing — all in one place.</p>
            <div className="mt-6">
              <Link href="/contact-us" className="rounded-lg bg-indigo-600 text-white px-5 py-3 shadow-soft hover:bg-indigo-700">Book a Demo</Link>
            </div>
          </div>
        </section>
      </main>
    </SEOWrapper>
  );
}
