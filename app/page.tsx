// File: pages/index.tsx
"use client";

import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (
      !window.chatbase ||
      window.chatbase("getState") !== "initialized"
    ) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "GdX--a9ZNzcU_fLUKjbxp"; // Your Chatbase chatbot ID
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Migrant Help NZ</title>
        <meta
          name="description"
          content="Empowering New Zealand’s migrant community with support and resources."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 text-gray-900 relative font-sans">
        {/* Hero Section */}
        <header className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
          <div className="md:flex-1 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Welcome to <span className="text-green-600">Migrant Help NZ</span>
            </h1>
            <p className="text-lg max-w-xl">
              Empowering New Zealand’s migrant community, our Auckland-based service
              offers tailored support for a smooth transition.
              Expert guidance on visas, employment, accommodation, and daily life to help
              you settle in confidently.
            </p>
            <a
              href="#faqs"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded shadow transition"
            >
              Explore FAQs
            </a>
          </div>

          <div className="md:flex-1">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Helping hands for migrants in New Zealand"
              className="rounded-lg shadow-lg"
            />
          </div>
        </header>

        {/* FAQs Section */}
        <section id="faqs" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            🇳🇿 AI Chatbot Q&A – Migrants in New Zealand
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Student & Job Starter Questions */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                🎓 Student & Job Starter Questions
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>How can I find my first part-time job as a student in NZ?</li>
                <li>What websites or apps are best for finding jobs in Auckland or Hamilton?</li>
                <li>What is the minimum wage in New Zealand for students?</li>
                <li>Can I work more than 20 hours on a student visa during holidays?</li>
                <li>How do I create a New Zealand-style CV and cover letter?</li>
                <li>Do I need an IRD number to start working? How do I apply for one?</li>
                <li>What are common interview questions in New Zealand and how should I answer them?</li>
              </ol>
            </div>

            {/* Life Setup in NZ */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">🏠 Life Setup in NZ</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>What documents do I need to open a bank account in New Zealand?</li>
                <li>How do I get a New Zealand SIM card and which is the best provider for students?</li>
                <li>How do I register with a doctor (GP) in NZ as a student or migrant?</li>
                <li>How to find cheap or shared accommodation near my college or work?</li>
                <li>Which mobile apps are most useful for life in NZ (flights, food, job alerts)?</li>
              </ol>
            </div>

            {/* Driving License & Transport */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                🛻 Driving License & Transport
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>How can I convert my overseas license to a New Zealand one?</li>
                <li>Which locations in Auckland or NZ have easy driving test routes (open roads, less traffic)?</li>
                <li>What is the cost of getting a learner, restricted, and full license in NZ?</li>
                <li>Can I drive in NZ on my home country license as a student or visitor?</li>
              </ol>
            </div>

            {/* Visa & Legal Stuff */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">📝 Visa & Legal Stuff</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>How do I renew my visa or apply for a post-study work visa?</li>
                <li>Can my partner work in NZ if I’m on a student visa?</li>
                <li>What are the PR pathways in New Zealand after study or work?</li>
                <li>What to do if I lose my passport or important documents in NZ?</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-300">
          © {new Date().getFullYear()} Migrant Help NZ. All rights reserved.
        </footer>
      </div>
    </>
  );
}
// 