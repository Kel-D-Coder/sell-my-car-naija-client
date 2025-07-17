import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-4 sm:px-6"
      style={{
        backgroundImage: `url('./images/WhatsApp Image 2025-07-05 at 16.02.35_a08b0542.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl text-center px-4 pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8 md:-mt-10">
          Before you buy it, verify it. <br />
          Real Vehicles. <br />
          Total Trust.
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-md mx-auto text-white/80">
          Sell My Car Naija — Nigeria’s First Peer-to-Peer Vehicle Platform with Built-In Verification
        </p>

        <Link
          href="/verify"
          className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Start Verification
        </Link>

        {/* Our Services Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-green-300 uppercase tracking-wide mb-6 text-center">
            Our Services
          </h2>

          <div className="space-y-4">
            {[
              'Basic VIN Check – Get key vehicle details in seconds',
              'Premium VIN Check – Full history + accident records + auction photos',
              'Motorcycle VIN Decode – Instantly verify motorcycle details',
              'Plate Number Check – Retrieve info using just the registration plate',
              'Market Value Check – Know the real price before you buy or sell',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✔</span>
                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/20 pt-4 text-sm text-white/50 text-center">
            Built for Nigerians — Fast, Reliable, and Trusted.
          </div>
        </div>
      </div>
    </main>
  );
}
