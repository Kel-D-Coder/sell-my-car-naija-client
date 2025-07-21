"use client";

import Link from "next/link";

export default function TermsOfUse() {
  return (
    <main className="bg-white min-h-screen px-4 sm:px-8 md:px-16 py-12 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
          Terms of Use
        </h1>

        <p className="mb-4">
          Welcome to <span className="font-semibold text-green-600">sellmycarnaijaverify.com</span> — a platform designed strictly for vehicle and motorcycle verification in Nigeria. By using this site, you agree to the terms below.
        </p>

        <hr className="my-6 border-t" />

        <h2 className="text-xl font-semibold mb-3 text-green-700">✅ What We Do</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>VIN & plate number checks</li>
          <li>Motorcycle & vehicle history reports</li>
          <li>Stolen and salvage record verification</li>
          <li>Document and image review</li>
        </ul>

        <hr className="my-6 border-t" />

        <h2 className="text-xl font-semibold mb-3 text-green-700">🔒 Your Responsibility</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>You must be 18+ and authorized to verify the vehicle.</li>
          <li>Submit correct VINs, plate numbers, and clear photos.</li>
          <li>
            Providing wrong or fake details may lead to invalid results — we are not responsible for errors from false submissions.
          </li>
        </ul>

        <hr className="my-6 border-t" />

        <h2 className="text-xl font-semibold mb-3 text-green-700">🚫 No Car Listings or Sales</h2>
        <p className="mb-6">
          This site is for verification only. We do not handle sales, pricing, or buyer contact.
        </p>

        <hr className="my-6 border-t" />

        <h2 className="text-xl font-semibold mb-3 text-green-700">📄 Data Usage</h2>
        <p className="mb-6">
          Your info is used only for verification. We don’t share your data with unauthorized third parties. See our <Link href="/privacy-policy" className="text-green-600 underline font-medium">Privacy Policy</Link> for more.
        </p>

        <hr className="my-6 border-t" />

        <h2 className="text-xl font-semibold mb-3 text-green-700">📧 Contact Us</h2>
        <p className="mb-2">
          Support: <a href="mailto:support@sellmycarnaija.com" className="text-green-600 underline">support@sellmycarnaija.com</a>
        </p>
        <p className="mb-6">
          Info: <a href="mailto:info@sellmycarnaija.com" className="text-green-600 underline">info@sellmycarnaija.com</a>
        </p>

        <div className="mt-10 text-center">
          <Link href="/" className="text-green-600 font-semibold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
