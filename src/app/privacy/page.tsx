"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-green-700 mb-6">Privacy Policy</h1>

        <p className="mb-4 text-gray-700 font-medium">sellmycarnaijaverify.com</p>

        <p className="mb-6 text-gray-700">
          At sellmycarnaijaverify.com, we take your privacy seriously. This policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-lg font-semibold text-green-600 mb-2">What We Collect</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Vehicle details (VIN, plate number, make, model)</li>
          <li>Photos of your vehicle</li>
          <li>Personal information (name, contact info)</li>
          <li>Ownership documents (if required)</li>
        </ul>

        <h2 className="text-lg font-semibold text-green-600 mb-2">How We Use Your Data</h2>
        <p className="mb-4 text-gray-700">
          Your information is used only for:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Vehicle verification</li>
          <li>Cross-checking stolen/salvage records</li>
          <li>Contacting you about your verification status</li>
        </ul>
        <p className="mb-6 text-gray-700">
          We do not sell, share, or expose your personal information to third parties without your permission.
        </p>

        <h2 className="text-lg font-semibold text-green-600 mb-2">Data Security</h2>
        <p className="mb-6 text-gray-700">
          We use secure systems to store and protect your data. Only authorized team members have access.
        </p>

        <h2 className="text-lg font-semibold text-green-600 mb-2">No Third-Party Ads</h2>
        <p className="mb-6 text-gray-700">
          We do not display ads or track you for marketing purposes.
        </p>

        <h2 className="text-lg font-semibold text-green-600 mb-2">Your Responsibility</h2>
        <p className="mb-6 text-gray-700">
          Please ensure all submitted data is accurate. We are not responsible for errors caused by false or incorrect information.
        </p>

        <h2 className="text-lg font-semibold text-green-600 mb-2">Retention</h2>
        <p className="mb-6 text-gray-700">
          We keep verification records for internal tracking only. You may request deletion of your data by contacting us.
        </p>

        <h2 className="text-lg font-semibold text-green-600 mb-2">Contact Us</h2>
        <p className="mb-6 text-gray-700">
          Have questions or want your data removed?
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Email: support@sellmycarnaija.com</li>
          <li>Email: info@sellmycarnaija.com</li>
        </ul>

        <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
