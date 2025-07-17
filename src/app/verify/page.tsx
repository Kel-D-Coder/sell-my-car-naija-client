'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const packages = [
  {
    title: 'Plate Number Check',
    price: 'Free',
    features: [
      'Vehicle name',
      'Vehicle number',
      'Vehicle color',
      'status'
    ],
    link: '/verify/plate-check',
    badge: 'FREE',
    background: 'bg-white',
    text: 'text-green-700',
    icon: 'https://d1nxzqpcg2bym0.cloudfront.net/google_play/nigeria.plate.number.verification/889e7bb0-d5ae-11ea-ac72-25f57d44689b/128x128',
  },
  {
    title: 'Basic Check (VIN)',
    price: 'Free',
    features: [
      'Vehicle Make, Model & Year',
      ' Engine Type & Transmission',
      'Trim Level & Body Style',
      "Country of Origin",
      "VIN Validation (Check if it’s correct or fake)",
      'Manufacturer Info',
      'Fuel Type & Drive Type',
      'Basic Specs (e.g. doors, engine size, etc.)'
    ],
    link: '/verify/vin-check',
    badge: 'FREE',
    background: 'bg-white',
    text: 'text-green-700',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5a/15/26/5a152660-c88b-f767-ec81-c001daeeb34a/AppIcon-0-0-1x_U007epad-0-1-85-220.png/256x256bb.jpg',
  },
  {
    title: 'Premium VIN Check',
    price: '₦1000/report',
    features: [
      "Real Auction Photos (See the car's true past condition)",
      'Accident & Damage Records',
      'Mileage History & Odometer Tampering Check',
      'Service & Maintenance Logs',
      'Theft/Stolen Status',
      'Flood, Fire, and Salvage Damage',
      'Airbag Deployment & Recall Data',
      'Previous Ownership Info',
      'Country of Origin & Import Records',
      'Complete Vehicle Specs & Build Sheet'
    ],
    link: '/verify/vehicle-history',
    badge: 'RECOMMENDED',
    background: 'bg-blue-50',
    text: 'text-blue-800',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5a/15/26/5a152660-c88b-f767-ec81-c001daeeb34a/AppIcon-0-0-1x_U007epad-0-1-85-220.png/256x256bb.jpg',
  },
  {
    title: 'Market Valuation',
    price: '₦500/report',
    features: [
      'Market Value',
      'Basic',
      'Condition',
      'Real market price'
    ],
    link: '/verify/market-value',
    badge: 'NEW',
    background: 'bg-gray-50',
    text: 'text-gray-800',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxsAzGOZQO2zt3QOikxoGX2BGZBqz42SNBQ&s', // You can replace with actual valuation icon
  },
  // {
  //   title: 'Motorcycle check',
  //   price: '₦500/report',
  //   features: [
  //     'Price',
  //     'Year of manufacture',
  //     'Dimensions',
  //   ],
  //   link: '/verify/motorcycle-check',
  //   badge: 'NEW',
  //   background: 'bg-gray-50',
  //   text: 'text-gray-800',
  //   icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/8e/ca/e9/8ecae980-3eff-46ae-9ff2-beb28c1583b4/source/256x256bb.jpg', // You can replace with actual valuation icon
  // },
];

export default function VerifyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-green-800">Choose a Verification Option</h1>
        <p className="text-gray-600 mt-2">Get started with trusted vehicle reports in Nigeria.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            onClick={() => router.push(pkg.link)}
            className={`${pkg.background} rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Image src={pkg.icon} alt={pkg.title} width={40} height={40} className="rounded-full" />
                <h2 className={`text-xl font-semibold ${pkg.text}`}>{pkg.title}</h2>
              </div>
              <span className="bg-yellow-300 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                {pkg.badge}
              </span>
            </div>

            <p className="text-lg font-bold mb-4">{pkg.price}</p>

            <ul className="text-sm text-gray-700 space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md font-medium">
              Start {pkg.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
