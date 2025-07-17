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
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl text-center py-16 sm:py-20 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Before you buy it, verify it. <br />
          Real Vehicles. <br />
          Total Trust.
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-md mx-auto">
          Sell My Car Naija — Nigeria’s First Peer-to-Peer Vehicle Platform with Built-In Verification
        </p>

        <Link
          href="/verify"
          className="inline-block bg-white text-green-800 font-semibold px-6 py-3 rounded-md hover:bg-green-100 transition"
        >
          Start Verification
        </Link>

        {/* New Feature List */}
        <div className="mt-10 bg-white/90 rounded-lg shadow-lg p-6 max-w-xl mx-auto text-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              'Basic VIN Check – Get key vehicle details in seconds',
              'Premium VIN Check – Full history + accident records + auction photos',
              'Motorcycle VIN Decode – Instantly verify motorcycle details',
              'Plate Number Check – Retrieve info using just the registration plate',
              'Market Value Check – Know the real price before you buy or sell',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="text-green-600 text-lg mt-1">✔</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
