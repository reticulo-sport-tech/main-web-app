import { SEOWrapper } from "@/components/SEO";

const CancellationPolicy = () => {
  return (
    <SEOWrapper title="Reticulo Cancellation and Refund Policy">
      <main className="pt-20">
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold">Our Cancellation Policy</h1>
            <h2 className="mt-6 text-xl font-semibold">Cancellation (Radlo Subscription Fees)</h2>

            <p className="mt-2 text-slate-700">If you wish to cancel your subscription, you may do so at any time by contacting our support team. Your cancellation will take effect at the end of your current billing period. We do not offer refunds for any unused portion of your subscription.</p>

            <h2 className="mt-6 text-xl font-semibold">Refunds for Radlo Subscription Fees</h2>

            <p className="mt-2 text-slate-700">All app fee payments are final and non-refundable. Exceptions may be made at our sole discretion in the following cases: Duplicate charges or technical billing errors; technical issues preventing access to our platform that we cannot resolve. Refund requests must be made within 7 days of the transaction.</p>

            <h2 className="mt-6 text-xl font-semibold">Coach Fee Refunds</h2>

            <p className="mt-2 text-slate-700">Fees paid to coaches are handled directly between the player and coach. We are not responsible for coaching service quality, cancellations, no-shows, or refunds. Players must resolve all coach fee-related issues with the coach directly.</p>

            <h2 className="mt-6 text-xl font-semibold">Exceptions</h2>

            <p className="mt-2 text-slate-700">In rare cases, we may consider offering a refund at our sole discretion. These exceptions may include technical issues that we are unable to resolve or circumstances beyond your control that prevent you from using our product. However, any such refund would be at our sole discretion and not a guarantee.</p>

            <p className="mt-2 text-slate-700">We reserve the right to modify this policy at any time without prior notice. Your continued use of our product after any such changes indicates your acceptance of the updated policy.</p>

            <p className="mt-2 text-slate-700">Thank you for your understanding of our policy. If you have any questions or concerns, please feel free to contact our support team for assistance.</p>
          </div>
        </section>
      </main>
    </SEOWrapper>
  );
};

export default CancellationPolicy;
