import React, { ReactNode } from "react";

interface ProductProps {
  name: string;
  icon?: ReactNode;
  simpleDescription?: string;
  description?: string;
  children?: ReactNode;
}

export default function TwProduct({ name, description, icon, simpleDescription, children }: ProductProps) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {icon && <div className="mx-auto inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-indigo-600 text-white">{icon}</div>}
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            {name}
          </h1>
          {simpleDescription && <h2 className="mt-2 text-xl sm:text-2xl text-slate-600 dark:text-slate-300">{simpleDescription}</h2>}
          {description && <p className="mt-4 text-slate-600 dark:text-slate-300">{description}</p>}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
