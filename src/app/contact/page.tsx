'use client';

import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Need help listing your car? Have questions about vehicle verification? Reach out anytime.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg hover:bg-green-100 transition">
            <FaWhatsapp className="text-green-500 w-6 h-6" />
            <a href="https://wa.me/2347084542979" target="_blank" rel="noopener noreferrer" className="text-green-700 font-medium">
              WhatsApp Us: +234 7085452979
            </a>
          </div>

          <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg hover:bg-green-100 transition">
            <FaPhoneAlt className="text-green-500 w-5 h-5" />
            <span className="text-green-700 font-medium">Phone: +234 7085452979</span>
          </div>

          <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg hover:bg-green-100 transition">
            <FaEnvelope className="text-green-500 w-5 h-5" />
            <span className="text-green-700 font-medium">Email: support@sellmycarnaija.com</span>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <a href="https://instagram.com/SellMyCarNaija" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-600 transition" />
            </a>
            <a href="https://www.facebook.com/share/1RuWduw1h8/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-700 transition" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          Sell My Car Naija — Your Trusted Vehicle Marketplace in Nigeria.
        </p>
      </div>
    </div>
  );
}
