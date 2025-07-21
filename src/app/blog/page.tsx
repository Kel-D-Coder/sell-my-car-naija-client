"use client";

import Link from "next/link";

export default function Blog() {
  return (
    <main className="bg-white min-h-screen px-4 sm:px-8 md:px-16 py-12 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
          BLOG
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          Sell Your Vehicle the Smart Way with Sell My Car Naija
        </h2>

        <p className="mb-4">
          Looking to sell your vehicle in Nigeria? Whether it’s a car, SUV, or truck, <span className="font-semibold text-green-600">Sell My Car Naija</span> is your trusted partner for fast and secure vehicle sales.
        </p>

        <p className="mb-4 font-semibold text-green-600">
          No stress. No delay. Just results.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-700">
          How It Works:
        </h3>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>Contact us via WhatsApp at <a href="https://wa.me/2347085452979" target="_blank" className="text-green-600 underline">+234 708 545 2979</a></li>
          <li>Send 8+ clear photos of the vehicle (interior & exterior)</li>
          <li>Include full vehicle details – Make, Model, Year, Mileage, Condition, etc.</li>
        </ol>

        <p className="mb-6">
          Our team reviews the information, confirms the details, and gets your vehicle listed on our platform. From there, we help you reach serious buyers across Nigeria.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-700">
          Why Use Sell My Car Naija?
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>✔ Quick response</li>
          <li>✔ Verified buyers</li>
          <li>✔ Nationwide visibility</li>
          <li>✔ Smooth and secure process</li>
        </ul>

        <p className="mb-6">
          Whether you’re selling an old car or an almost-new ride, we make sure you get value for your vehicle without the usual stress.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="font-semibold mb-2">
            Ready to sell your vehicle?
          </p>
          <a
            href="https://wa.me/2347085452979"
            target="_blank"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            📲 Chat with us now on WhatsApp
          </a>
          <p className="mt-2 text-sm text-gray-600">Let’s get your vehicle SOLD—fast and easy!</p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-green-600 font-semibold hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
