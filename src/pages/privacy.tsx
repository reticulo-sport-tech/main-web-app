import { SEOWrapper } from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <SEOWrapper title="Reticulo Privacy Policy">
      <main className="pt-20">
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold">Our Privacy Policy</h1>
            <h2 className="mt-6 text-xl font-semibold">General rules</h2>

            <p className="mt-2 text-slate-700">Reticulo Sport Techonology does not share personal information of any kind with anyone. We will not sell or rent your name or personal information to any third party.</p>

            <p className="mt-2 text-slate-700">We do not sell, rent or provide outside access to our mailing list or any data we store. Any data that a user stores via our website is wholly owned by that user or business.</p>

            <p className="mt-2 text-slate-700">At any time a user or business is free to take their data and leave, or to simply delete their data from our website.</p>

            <p className="mt-2 text-slate-700">Reticulo Sport Techonology only collects such personal information that is necessary for you to access and use our services. This personal information includes, but is not limited to, first and last name, email address, mobile number, billing information, and transaction details.</p>

            <p className="mt-2 text-slate-700">Payment Information: All payment processing is securely managed by a licensed Payment Aggregator. We do not store any card, UPI, or bank details. The payment aggregator complies with RBI and PCI-DSS regulations for secure handling of payment data.</p>

            <p className="mt-2 text-slate-700">Reticulo Sport Techonology may release personal information if required to by law, search warrant, subpoena, court order or fraud investigation.</p>

            <p className="mt-2 text-slate-700">If we change our terms of use we will post those changes on this page. Registered users will be sent an email that outlines changes made to the terms of use.</p>
          </div>
        </section>
      </main>
    </SEOWrapper>
  );
};

export default PrivacyPolicy;
