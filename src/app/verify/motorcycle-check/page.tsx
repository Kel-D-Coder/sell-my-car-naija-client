'use client';

import { useState } from 'react';
import axios from 'axios';

export default function MotorcycleVinCheckPage() {
  const [vin, setVin] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/verification/motorcycle-check`,
        { vin }
      );

      const data = await res.data;

      if (res.status === 200) {
        setResult(data);
      } else {
        setError(data.msg || 'Motorcycle details not found.');
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Motorcycle VIN Check</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Motorcycle VIN"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
          />

          <button
            onClick={handleCheck}
            disabled={loading || !vin.trim()}
            className="w-full bg-green-700 text-white py-3 rounded-md font-medium hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? 'Fetching Details...' : 'Check Motorcycle'}
          </button>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}

        {result?.data && (
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded p-4 text-sm text-gray-800 space-y-2">
            <p><strong>Year:</strong> {result.data.year || 'N/A'}</p>
            <p><strong>Make:</strong> {result.data.make || 'N/A'}</p>
            <p><strong>Model:</strong> {result.data.model || 'N/A'}</p>
            <p><strong>Trim:</strong> {result.data.trim || 'N/A'}</p>
            <p><strong>Category:</strong> {result.data.vehicle?.category || 'N/A'}</p>
            <p><strong>Base Price (USD):</strong> {result.data.price?.base_msrp ? `$${result.data.price.base_msrp}` : 'N/A'}</p>

            {result.data.dimensions && (
              <div className="mt-4">
                <strong>Dimensions:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {result.data.dimensions.map((section: any, index: number) => (
                    <li key={index}>
                      <span className="font-semibold">{section.section}</span>
                      <ul className="pl-4 list-disc">
                        {section.measurements.map((measure: any, i: number) => (
                          <li key={i}>
                            {measure.name}: {measure.values?.[0]?.value} {measure.values?.[0]?.unit}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
