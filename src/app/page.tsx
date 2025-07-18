import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center sm:bg-cover bg-no-repeat text-white flex flex-col items-center justify-center px-4 sm:px-6"
      style={{
        backgroundImage: `url('./images/WhatsApp Image 2025-07-05 at 16.02.35_a08b0542.jpg')`,
        backgroundSize: '100% 100%',
        // backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl text-center px-4 pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8 md:-mt-10">
          Before you buy it, verify it. <br />
          Real Vehicles. <br />
          Total Trust.
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-md mx-auto text-white/80">
          Nigeria’s First Peer-to-Peer Vehicle Platform — Verified & Trusted by Car Buyers.
        </p>

        <Link
          href="/verify"
          className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Start Verification
        </Link>

        {/* Services / Benefits */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold text-green-400 uppercase tracking-wide mb-4 text-center">
            Why Choose Us?
          </h2>

          <div className="space-y-6">
            {[
              '✔ Know the Real Identity of Any Vehicle Instantly — Basic VIN Check.',
              '✔ Get Full Vehicle History Reports — Accidents, Auctions, and More.',
              '✔ Instantly Verify Bikes and Motorcycles Too.',
              '✔ Find Out Who Really Owns That Car — Plate Number Look-Up.',
              '✔ Know the True Market Value Before You Pay — Avoid Overpaying.',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-md p-4 border border-white/20 hover:border-green-400 transition text-sm sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/20 pt-4 text-xs text-white/60 text-center">
            100% Nigerian. Built for Buyers & Sellers Nationwide.
          </div>
        </div>
      </div>
    </main>
  );
}
