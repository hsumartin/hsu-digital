import React from "react";

export default function Contact() {
  return (
    <main className="bg-navy-900 text-neutral-50 min-h-screen px-8 md:px-20 py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gold-500 mb-4">
          Kontakt aufnehmen
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-200">
          Du möchtest über Projekte, Kooperationen oder Ideen sprechen?  
          Ich freue mich über jede Nachricht — präzise, offen und inspirierend.
        </p>
      </header>

      <section className="max-w-2xl mx-auto bg-navy-800 border border-navy-700 rounded-xl p-8 shadow-gold/20">
        <form
          action="https://formspree.io/f/maylformid" // ✅ Platzhalter für Formspree
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-gold-400 mb-2 tracking-wide"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-md bg-navy-900 border border-navy-700 text-neutral-50 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gold-400 mb-2 tracking-wide"
            >
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-md bg-navy-900 border border-navy-700 text-neutral-50 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-gold-400 mb-2 tracking-wide"
            >
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="w-full px-4 py-3 rounded-md bg-navy-900 border border-navy-700 text-neutral-50 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full border border-gold-500 text-gold-400 px-6 py-3 rounded-md transition-all duration-300 hover:bg-gold-500 hover:text-navy-900"
          >
            Nachricht senden
          </button>
        </form>

        <p className="text-center text-neutral-400 text-xs mt-6">
          oder direkt per E-Mail an{" "}
          <a
            href="mailto:kontakt@martinhsu.digital"
            className="text-gold-400 hover:text-gold-300"
          >
            kontakt@martinhsu.digital
          </a>
        </p>
      </section>
    </main>
  );
}
