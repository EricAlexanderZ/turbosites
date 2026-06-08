"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, isPending] = useActionState(sendContactEmail, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 sm:p-10 text-center shadow-2xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eff4ff]">
          <svg className="h-8 w-8 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-[#000d2b] mb-3">Message Sent!</h3>
        <p className="text-gray-500 text-base leading-relaxed">
          Thanks for reaching out. Eric will get back to you within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your Name <span className="text-[#0151fc]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#0151fc] focus:ring-2 focus:ring-[#0151fc]/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address <span className="text-[#0151fc]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#0151fc] focus:ring-2 focus:ring-[#0151fc]/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Business Name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="Acme Co."
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#0151fc] focus:ring-2 focus:ring-[#0151fc]/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#0151fc] focus:ring-2 focus:ring-[#0151fc]/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Tell Us About Your Project <span className="text-[#0151fc]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What kind of website do you need? What does your business do? Any details help!"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#0151fc] focus:ring-2 focus:ring-[#0151fc]/20 resize-none"
        />
      </div>

      {state.status === "error" && (
        <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-[#0151fc] px-8 py-4 text-base font-bold text-white transition hover:bg-[#0040cc] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        Usually respond within a few hours. No spam, ever.
      </p>
    </form>
  );
}
