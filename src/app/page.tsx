import Link from 'next/link';
import { FaCar, FaMotorcycle, FaCheckCircle, FaMoneyBillWave, FaClipboardList, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Home() {
  const services = [
    { icon: <FaCar className="text-green-400 w-5 h-5" />, text: 'Basic VIN Check – Get key vehicle details in seconds' },
    { icon: <FaClipboardList className="text-green-400 w-5 h-5" />, text: 'Premium VIN Check – Full history + accident records + auction photos' },
    { icon: <FaMotorcycle className="text-green-400 w-5 h-5" />, text: 'Motorcycle VIN Decode – Instantly verify motorcycle details' },
    { icon: <FaCheckCircle className="text-green-400 w-5 h-5" />, text: 'Plate Number Check – Retrieve info using just the registration plate' },
    { icon: <FaMoneyBillWave className="text-green-400 w-5 h-5" />, text: 'Market Value Check – Know the true value before you pay, avoid overpaying' },
  ];

  return (
    <>
    <main
      className="relative min-h-screen bg-cover bg-center sm:bg-cover bg-no-repeat text-white flex flex-col items-center justify-center px-4 sm:px-6"
      style={{
        backgroundImage: `url('./images/WhatsApp Image 2025-07-20 at 19.37.39_2e1b6b05.jpg')`,
        backgroundSize: '100% 100%',
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

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-md mx-auto text-white/80 font-semibold">
          Nigeria’s First Peer-to-Peer Vehicle Platform — Verified & Trusted by Car Buyers.
        </p>

        <Link
          href="/verify"
          className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Start Verification
        </Link>

          {/* What Makes Us Different Section */}
<div className="mt-16 bg-white text-gray-800 rounded-lg shadow-md px-6 py-8 max-w-2xl mx-auto text-center">
  <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
    &quot;What Makes Us Different&quot;
  </h2>
  <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-600">
    At <span className="font-semibold">Sell My Car Naija Verify</span>, we give you peace of mind before you buy.
  </p>

  <div className="text-left mt-6 space-y-3 text-gray-700 text-sm sm:text-base font-medium">
    <p> <span className='rounded-full border text-center px-0.5 pb-0.5'>✔️</span> <span className="font-semibold">Covers all vehicles</span> – Cars, motorcycles, tricycles & more</p>
    <p> <span className='rounded-full border text-center px-0.5 pb-0.5'>✔️</span> <span className="font-semibold">Premium VIN check</span> – Includes photos, full history & stolen report</p>
    <p> <span className='rounded-full border text-center px-0.5 pb-0.5'>✔️</span> Plate number, chassis, and ownership verification</p>
    <p> <span className='rounded-full border text-center px-0.5 pb-0.5'>✔️</span> Fast, simple & secure results</p>
  </div>

  <p className="mt-6 text-green-600 font-semibold">Verify first. Buy with confidence.</p>
</div>


    {/* Services / Benefits */}
    <div className="mt-12 max-w-2xl mx-auto">
      <h2 className="text-lg font-bold text-green-400 uppercase tracking-wide mb-4 text-center">
        Vehicle Check Services
      </h2>

      <div className="space-y-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white/10 rounded-md p-4 border border-white/20 hover:border-green-400 transition text-sm font-semibold sm:text-base"
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
    </div>
            
    {/* Social Icons */}
    <div className="flex justify-center items-center space-x-4 mt-6">
      <a href="https://instagram.com/SellMyCarNaija" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-6 h-6 text-pink-400 hover:text-pink-500 transition" />
      </a>
      <a href="https://www.facebook.com/share/1RuWduw1h8/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="w-6 h-6 text-blue-500 hover:text-blue-600 transition" />
      </a>
    </div>

    <div className="mt-8 border-t border-white/20 pt-4 text-xs text-white/60 text-center">
      100% Nigerian. Built for Buyers & Sellers Nationwide.
    </div>
  </div>
</div>
</main>

    {/* Trusted By Section */}
<div className="mt-16 px-4">
  <h3 className="text-center font-semibold mb-6 text-sm uppercase tracking-wide text-gray-600">
    Trusted By
  </h3>

  <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAA_hN6kbhHOiXn1w_ktHmQB8hyFRK9r-FCA&s"
      alt="Ministry of Communication"
      className="h-12 md:h-20 object-contain opacity-90"
    />
    <img
      src="https://legitcar.ng/assets/img/news/ministry-of-communication-technology.png"
      alt="Nigeria Sovereign Investment Authority"
      className="h-12 md:h-20 object-contain opacity-90"
    />
    <img
      src="https://crossriverwatch.com/wp-content/uploads/2021/08/3CFD8DC3-3789-46A3-87B4-C29E9FC141DC.jpeg"
      alt="HiiL"
      className="h-12 md:h-20 object-contain opacity-90"
    />
    <img
      src="https://pbs.twimg.com/media/GLsa19PXMAE_7_F.jpg"
      alt="Tony Elumelu Foundation"
      className="h-12 md:h-20 object-contain opacity-90"
    />
  </div>
</div>

    </>
  );
}