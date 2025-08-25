import React from "react";

export default function FinancialPartners() {
  const partners = [
    { name: "Razorpay", role: "Payments Infrastructure", href: "https://razorpay.com/", logo: "/partners/razorpay.svg" },
    { name: "IDFC FIRST Bank", role: "Banking Partner", href: "https://www.idfcfirstbank.com/", logo: "/partners/idfc-first-bank.svg" },
    { name: "HDFC Bank", role: "Banking Partner", href: "https://www.hdfcbank.com/", logo: "/partners/hdfc-bank.svg" },
    { name: "Zoho Payments", role: "Automation & Billing", href: "https://www.zoho.com/", logo: "/partners/zoho-payments.svg" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold">Financial Partners</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-soft hover:shadow-md transition text-left bg-white dark:bg-slate-800"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="h-12 flex items-center">
                <img src={p.logo} alt={`${p.name} logo`} className="h-10 w-auto object-contain" />
              </div>
              <div className="mt-3 font-semibold text-slate-900 dark:text-white">{p.name}</div>
              <div className="text-xs text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/40 inline-block px-2 py-0.5 rounded-full mt-1">{p.role}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
