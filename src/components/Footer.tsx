import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#03293F] text-white pt-10 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8">

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-[#33BBC8] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#33BBC8]">Home</Link></li>
            <li><Link href="/verify" className="hover:text-[#33BBC8]">Verify</Link></li>
            <li><Link href="/about" className="hover:text-[#33BBC8]">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#33BBC8]">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-[#33BBC8] mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-[#33BBC8]">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#33BBC8]">Terms of Use</Link></li>
            <li><Link href="/return-policy" className="hover:text-[#33BBC8]">Return Policy</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-[#33BBC8] mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://instagram.com/SellMyCarNaija" target="_blank" rel="noopener noreferrer" className="hover:text-[#33BBC8]">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://wa.me/2347085452979" target="_blank" rel="noopener noreferrer" className="hover:text-[#33BBC8]">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:info@sellmycarnaija.com" className="hover:text-[#33BBC8]">
                Email Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#1F4A61] py-4 bg-[#59C4D4] text-center text-sm font-medium text-[#03293F]">
        &copy; {new Date().getFullYear()} Sell My Car Naija. All rights reserved. | Built for Nigerians, by Nigerians 🇳🇬
      </div>
    </footer>
  );
}
