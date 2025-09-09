import { SEOWrapper } from "@/components/SEO";
import TwProduct from "@/components/tw/Product";
import {
  IoCalendarOutline,
  IoCardOutline,
  IoLogoWhatsapp,
  IoAnalyticsOutline,
} from "react-icons/io5";
import Image from "next/image";

const Eventlo = () => {
  return (
    <SEOWrapper
      title="Reticulo | Eventlo"
      description={
        "Eventlo is a Radlo-like experience tailored for event-centric use cases — automating payments, enabling seamless event registration, providing WhatsApp support, and delivering informed tracking across diverse applications."
      }
    >
      <main className="pt-20">
        <TwProduct
          name={"Eventlo"}
          icon={
            <Image
              src="/eventlo/logo.svg"
              alt="Eventlo logo"
              width={28}
              height={28}
              className="h-10 w-10"
            />
          }
          simpleDescription={"Event-First Registration & Payments"}
          description={
            "A similar app to Radlo with an event-only focus. It automates payments and provides WhatsApp support to end users, with a wide range of applications where payment automation, event registration, and informed tracking are required."
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                icon: IoCalendarOutline,
                title: "Event-Centric Workflows",
                desc: "Discovery, registration, rosters and schedules.",
              },
              {
                icon: IoCardOutline,
                title: "Automated Payments",
                desc: "Collections, reminders and reconciliation built-in.",
              },
              {
                icon: IoLogoWhatsapp,
                title: "WhatsApp Support",
                desc: "Updates, confirmations and participant help.",
              },
              {
                icon: IoAnalyticsOutline,
                title: "Informed Tracking",
                desc: "Live status across registrations and payments.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-soft"
              >
                <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {title}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TwProduct>
      </main>
    </SEOWrapper>
  );
};

export default Eventlo;
