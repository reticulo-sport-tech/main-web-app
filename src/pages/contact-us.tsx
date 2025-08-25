import React from "react";
import { SEOWrapper } from "@/components/SEO";
import { useForm } from "react-hook-form";
import { ContactQuery } from "@/data/types";
import { submitContactQuery } from "@/api";
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_LINK, LINKEDIN_PAGE_LINK, TWITTER_LINK } from "../constants";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

export default function Contact() {
  const { register, handleSubmit, reset, formState } = useForm<ContactQuery>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const onSubmit = async (data: ContactQuery) => {
    try {
      await submitContactQuery(data);
      alert("Thanks! We will get back to you.");
      reset();
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <SEOWrapper title="Contact Us | Reticulo">
      <main className="pt-20">
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Contact Us</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              We’d love to hear from you. Fill the form and we’ll get back shortly.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400" {...register("name", { required: true })} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                  <input className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400" {...register("phone")} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400" {...register("subject", { required: true })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400" {...register("message", { required: true })} />
              </div>
              <div>
                <button type="submit" className="rounded-lg bg-indigo-600 text-white px-5 py-3 shadow-soft hover:bg-indigo-700" disabled={formState.isSubmitting}>
                  {formState.isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <div className="font-medium text-slate-900 dark:text-white">Email</div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-900 hover:dark:text-white">{CONTACT_EMAIL}</a>
              </div>
              <div>
                <div className="font-medium text-slate-900 dark:text-white">Phone</div>
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-slate-900 hover:dark:text-white">{CONTACT_PHONE}</a>
              </div>
              {/* <div>
                <div className="font-medium text-slate-900">Address</div>
                <div>{CONTACT_ADDRESS}</div>
              </div> */}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 hover:dark:text-white"
                href={TWITTER_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                title="Twitter"
              >
                <IoLogoTwitter size={18} />
                <span>Twitter</span>
              </a>
              <a
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 hover:dark:text-white"
                href={LINKEDIN_PAGE_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <IoLogoLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 hover:dark:text-white"
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <IoLogoInstagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </SEOWrapper>
  );
}
