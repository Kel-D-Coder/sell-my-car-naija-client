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
      'status',
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
      'Basic Specs (e.g. doors, engine size, etc.)',
    ],
    link: '/verify/vin-check',
    badge: 'FREE',
    background: 'bg-white',
    text: 'text-green-700',
    icon: 'https://fullcarchecks.co.uk/images/Car-Checklist.svg?v=1.0.2',
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
      'Complete Vehicle Specs & Build Sheet',
    ],
    link: '/verify/vehicle-history',
    badge: 'RECOMMENDED',
    background: 'bg-blue-50',
    text: 'text-blue-800',
    icon: 'https://www.autodna.com/assets/images/example-reports/report-list-icons/vehicle-technical-information.svg?c=1723539665',
  },
  {
    title: 'Real market price check',
    price: '₦500/report',
    features: [
      'Market Value',
      'Basic',
      'Condition',
      "Trade in",
      "Dealer retail",
      "Private party price",
      'Real market price',
    ],
    link: '/verify/market-value',
    badge: 'NEW',
    background: 'bg-gray-50',
    text: 'text-gray-800',
    icon: 'https://t4.ftcdn.net/jpg/01/29/40/83/360_F_129408389_XnhdlJNowRogIcPUtDjs99E5wznr5WqT.jpg',
  },
  {
    title: 'Motorcycle VIN check',
    price: '₦500/report',
    features: [
      'Status',
      'Year',
      'Make',
      "Model",
      "Dealer retail",
      "Price",
      'Dimensions',
      "Measurements",
      "Specifications"
    ],
    link: '/verify/motorcycle-check',
    badge: 'NEW',
    background: 'bg-gray-50',
    text: 'text-gray-800',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/8e/ca/e9/8ecae980-3eff-46ae-9ff2-beb28c1583b4/source/256x256bb.jpg',
  },
];

export default function VerifyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-800">
          Choose a Verification Option
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Get started with trusted vehicle reports in Nigeria.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            onClick={() => router.push(pkg.link)}
            className={`${pkg.background} rounded-lg shadow-md p-5 sm:p-6 cursor-pointer hover:shadow-lg transition duration-300 flex flex-col justify-between capitalize`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={pkg.icon}
                    alt={pkg.title}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h2 className={`text-lg font-semibold ${pkg.text}`}>
                    {pkg.title}
                  </h2>
                </div>
                <span className="bg-yellow-300 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                  {pkg.badge}
                </span>
              </div>

              <p className="text-base font-bold mb-4">{pkg.price}</p>

              <ul className="text-sm text-gray-700 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white capitalize py-2 rounded-md font-medium">
              Start {pkg.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
