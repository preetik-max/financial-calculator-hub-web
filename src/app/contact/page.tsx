import { Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact Us | Financial Calculator Hub",
  description:
    "Contact Finora Labs for questions, feedback, suggestions, or support regarding Financial Calculator Hub.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold text-blue-600">
              Finora Labs
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Contact Us
            </h1>

            <p className="mt-4 text-slate-600">
              Have a question, suggestion, or feedback about Financial
              Calculator Hub? We would be happy to hear from you.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <a
              href="mailto:contact@financialcalculatorhub.com"
              className="rounded-xl border border-slate-200 p-6 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <Mail className="mb-4 text-blue-600" size={24} />

              <h2 className="font-semibold text-slate-900">
                Email Us
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Send us your questions, feedback, or suggestions.
              </p>

              <p className="mt-3 text-sm font-medium text-blue-600">
                contact@financialcalculatorhub.com
              </p>
            </a>

            <a
              href="https://wa.me/918318950758"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 p-6 transition hover:border-green-300 hover:bg-green-50"
            >
              <MessageCircle className="mb-4 text-green-600" size={24} />

              <h2 className="font-semibold text-slate-900">
                WhatsApp
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Contact Finora Labs through WhatsApp for general enquiries.
              </p>

              <p className="mt-3 text-sm font-medium text-green-600">
                Chat on WhatsApp
              </p>
            </a>
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-5 text-sm text-slate-600">
            <p>
              <strong className="text-slate-900">Finora Labs</strong>
            </p>
            <p className="mt-1">
              Owner and developer of Financial Calculator Hub.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
