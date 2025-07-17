export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-3xl md:text-4xl font-bold text-green-800">About Sell My Car Naija 🇳🇬</h1>

        <p className="text-lg leading-relaxed">
          <strong className="font-semibold text-green-700">Nigeria’s #1 Peer-to-Peer Vehicle Listing & Verification Platform</strong>
        </p>

        <p className="leading-relaxed">
          At Sell My Car Naija, we connect real car owners directly with real buyers—no middlemen, no stress.
        </p>

        <p className="leading-relaxed">
          We are a trusted Nigerian brand focused on making vehicle buying and selling faster, safer, and smarter across the country. Whether you’re buying a car, listing one for sale, or verifying its history, we’ve built the tools you need to move with confidence.
        </p>

        <hr className="border-t border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">🔧 What We Offer:</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li><strong>🚘 Vehicle Listings:</strong> Cars, bikes, keke, vans, trucks — all verified and listed directly by owners.</li>
            <li><strong>🔍 Vehicle Verification (Powered by Frontera):</strong> Check VIN, plate number, chassis number, and vehicle status before you pay.</li>
            <li><strong>🤝 Peer-to-Peer Selling:</strong> You talk directly to buyers. We help you list, promote, and close the deal.</li>
            <li><strong>📲 Social Marketplace:</strong> We operate actively on Instagram and Facebook, with a fast-growing community of buyers and sellers nationwide.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">💡 Why Nigerians Trust Us:</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li>✅ Real vehicles. Real owners. Real buyers.</li>
            <li>🛡 We help prevent fraudulent and stolen vehicle sales.</li>
            <li>⚡ Fast listing process via WhatsApp.</li>
            <li>🇳🇬 100% Nigerian-based, built for our people.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-200" />

        <section className="space-y-4">
          <p className="font-medium text-lg text-green-700">📩 Let’s Get You Rolling</p>
          <p>Need to list your car? Want to verify before you buy?</p>
          <p>📲 <strong>WhatsApp us:</strong> <a href="https://wa.me/2347085452979" className="text-green-700 underline">+234 7085452979</a></p>
          <p>📍 <strong>Follow us on Instagram & Facebook:</strong> <a href="https://instagram.com/SellMyCarNaija" target="_blank" className="text-green-700 underline">@SellMyCarNaija</a></p>
        </section>

        <p className="font-semibold text-center text-green-800 mt-10">
          Sell My Car Naija — Where Nigeria Buys & Sells Vehicles, Safely.
        </p>

      </div>
    </main>
  );
}
