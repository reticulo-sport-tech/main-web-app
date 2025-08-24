import Link from "next/link";

export const Footer = () => {
  const currYear = new Date().getFullYear();
  const startYear = new Date("2021-01-01").getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="font-semibold text-slate-900 text-lg">Reticulo</div>
          <p className="mt-2 text-slate-600 text-sm">AI-integrated analysis, academy infrastructure and payment automation for modern sports organizations.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Company</div>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li><Link href="/about-us" className="hover:text-slate-900">About</Link></li>
            <li><Link href="/contact-us" className="hover:text-slate-900">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-slate-900">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-slate-900">Terms</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Products</div>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li><Link href="/radlo" className="hover:text-slate-900">Radlo</Link></li>
            <li><Link href="/studio" className="hover:text-slate-900">Studio</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Get in touch</div>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li><a href="https://twitter.com/Reticulo_Sport/" target="_blank" className="hover:text-slate-900" rel="noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com/company/reticulo-sport-tech/" target="_blank" className="hover:text-slate-900" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/reticulo_sport/" target="_blank" className="hover:text-slate-900" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.youtube.com/@reticulosporttechnology" target="_blank" className="hover:text-slate-900" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-600">
        ©{currYear > startYear ? ` ${startYear} -` : ""} {currYear} | Reticulo Sport Technology Private Limited.
      </div>
    </footer>
  );
};
