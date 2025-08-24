import Link from "next/link";
import { SEOWrapper } from "@/components/SEO";

export default function NotFound() {
  return (
    <SEOWrapper title="Page Not Found">
      <main className="min-h-[60vh] flex items-center justify-center py-24">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-4xl font-semibold">Page not found</div>
          <p className="mt-2 text-slate-600">This page was not found. You may have mistyped the address or the page may have moved.</p>
          <div className="mt-6">
            <Link href="/" className="rounded-full bg-indigo-600 text-white px-5 py-3 shadow-soft hover:bg-indigo-700">Take me to the home page</Link>
          </div>
        </div>
      </main>
    </SEOWrapper>
  );
}
