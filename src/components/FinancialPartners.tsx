import React from "react";

export default function FinancialPartners() {
  const partners = [
    { name: "Razorpay", role: "Payments Infrastructure", href: "https://razorpay.com/" },
    { name: "IDFC FIRST Bank", role: "Banking Partner", href: "https://www.idfcfirstbank.com/" },
    { name: "HDFC Bank", role: "Banking Partner", href: "https://www.hdfcbank.com/" },
    { name: "Zoho Payments", role: "Automation & Billing", href: "https://www.zoho.com/" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold">Financial Partners</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noreferrer" className="p-4 rounded-xl border border-slate-200 shadow-soft hover:shadow-md transition text-left">
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-indigo-700 bg-indigo-50 inline-block px-2 py-0.5 rounded-full mt-1">{p.role}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
