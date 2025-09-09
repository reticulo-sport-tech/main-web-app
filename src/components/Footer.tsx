import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currYear = new Date().getFullYear();
  const startYear = new Date("2021-01-01").getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="font-semibold text-slate-900 dark:text-white text-lg">
            Reticulo
          </div>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
            AI-integrated analysis, academy infrastructure and payment
            automation for modern sports organizations.
          </p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 dark:text-white mb-2">
            Company
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>
              <Link
                href="/about-us"
                className="hover:text-slate-900 hover:dark:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-slate-900 hover:dark:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-slate-900 hover:dark:text-white"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-slate-900 hover:dark:text-white"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white mb-2">
            <Image
              src="/reticulo-logo.png"
              alt="Reticulo"
              className="dark:hidden"
              width={20}
              height={20}
              priority
            />
            <Image
              src="/reticulo-logo-dark.png"
              alt="Reticulo"
              className="hidden dark:block"
              width={20}
              height={20}
              priority
            />
            <span>Products</span>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>
              <Link
                href="/radlo"
                className="hover:text-slate-900 hover:dark:text-white"
              >
                Radlo
              </Link>
            </li>
            <li>
              <Link
                href="/studio"
                className="hover:text-slate-900 hover:dark:text-white"
              >
                Studio
              </Link>
            </li>
            <li>
              <Link
                href="/eventlo"
                className="hover:text-slate-900 hover:dark:text-white"
              >
                Eventlo
              </Link>
            </li>
            <li>
              <Link
                href="/shuttle-rover"
                className="hover:text-slate-900 hover:dark:text-white"
              >
                Shuttle Rover
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900 dark:text-white mb-2">
            Get in touch
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>
              <a
                href="https://twitter.com/Reticulo_Sport/"
                target="_blank"
                className="hover:text-slate-900 hover:dark:text-white"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/reticulo-sport-tech/"
                target="_blank"
                className="hover:text-slate-900 hover:dark:text-white"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/reticulo_sport/"
                target="_blank"
                className="hover:text-slate-900 hover:dark:text-white"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@reticulosporttechnology"
                target="_blank"
                className="hover:text-slate-900 hover:dark:text-white"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        ©{currYear > startYear ? ` ${startYear} -` : ""} {currYear} | Reticulo
        Sport Technology Private Limited.
      </div>
    </footer>
  );
};
