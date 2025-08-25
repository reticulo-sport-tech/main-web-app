import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200 dark:bg-slate-900/70 dark:border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-lg">
          <Image
            src="/reticulo-logo.png"
            alt="Reticulo logo"
            width={28}
            height={28}
            priority
          />
          <span>Reticulo</span>
        </Link>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/about-us" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white">About</Link>
          <Link href="/contact-us" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white">Contact</Link>
          <Link href="/studio" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white">Studio</Link>
          <Link href="/radlo" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white">Radlo</Link>
          <Link href="/eventlo" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white">Eventlo</Link>
          <Link href="/shuttle-rover" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white">Shuttle Rover</Link>
          <ThemeToggle />
          <Link href="/contact-us" className="rounded-lg bg-brand-600 text-white px-4 py-2 shadow-soft hover:bg-brand-700">Get a Demo</Link>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800">
          <div className="px-4 py-3 flex flex-col gap-3">
            <Link href="/about-us" className="text-slate-700 dark:text-slate-200">About</Link>
            <Link href="/contact-us" className="text-slate-700 dark:text-slate-200">Contact</Link>
            <Link href="/studio" className="text-slate-700 dark:text-slate-200">Studio</Link>
            <Link href="/radlo" className="text-slate-700 dark:text-slate-200">Radlo</Link>
            <Link href="/eventlo" className="text-slate-700 dark:text-slate-200">Eventlo</Link>
            <Link href="/shuttle-rover" className="text-slate-700 dark:text-slate-200">Shuttle Rover</Link>
            <Link href="/contact-us" className="rounded-md bg-brand-600 text-white px-3 py-2 w-max">Get a Demo</Link>
          </div>
        </div>
      )}
    </header>
  );
};
