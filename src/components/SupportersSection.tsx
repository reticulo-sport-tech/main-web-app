import React from "react";

export default function SupportersSection() {
  const supporters = [
    { name: "SINE", title: "Society of Innovation and Entrepreneurship IIT Bombay", image: "/sine.jpeg", href: "https://sineiitb.org/" },
    { name: "MeitY", title: "Ministry of Electronics and Telecommunications", image: "/meity.jpg", href: "https://www.meity.gov.in/" },
    { name: "Founders Hub", title: "Founders Hub by Microsoft for Startups", image: "/microsoft-for-startups.jpg", href: "https://www.microsoft.com/en-us/startups" },
    { name: "DST", title: "Department of Science and Technology", image: "/dst.png", href: "https://dst.gov.in/" },
    { name: "TIH-IoT IITB", title: "Technology Innovation Hub, IoT, IIT Bombay", image: "/tih-iot.jpeg", href: "https://www.tih.iitb.ac.in/" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold">We are backed by</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {supporters.map((s) => (
            <a key={s.name} className="p-4 rounded-xl border border-slate-200 shadow-soft hover:shadow-md transition text-left" href={s.href} target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.name} className="h-16 w-16 rounded-full object-cover" />
                <div className="mt-3 font-semibold">{s.name}</div>
                <div className="text-xs text-slate-600 text-center">{s.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
