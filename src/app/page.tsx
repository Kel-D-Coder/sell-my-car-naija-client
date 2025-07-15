import Link from 'next/link';
import backgroundImage from '../../public/images/WhatsApp Image 2025-07-05 at 16.02.35_a08b0542.jpg'

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center text-white flex items-center px-6"
      style={{ backgroundImage: `url('./images/WhatsApp Image 2025-07-05 at 16.02.35_a08b0542.jpg')` }} // Put your image in /public folder
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl py-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Before you buy it, verify it. <br />
          Real Vehicles. <br />
          Total Trust.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-md">
          Sell My Car Naija — Nigeria’s First Peer-to-Peer Vehicle Platform with Built-In Verification
        </p>
        <Link
          href="/verify"
          className="bg-white text-green-800 font-semibold px-6 py-3 rounded-md hover:bg-green-100 transition"
        >
          Start Verification
        </Link>
      </div>
    </main>
  );
}
