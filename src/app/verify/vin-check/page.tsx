'use client';

import { useState } from 'react';
import axios from 'axios';

export default function VinCheckPage() {
  const [vin, setVin] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/verification/verify-vin`, { vin });
      setResult(res.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">VIN Verification</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter VIN (e.g. 1HGCM82633A123456)"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
          />

          <button
            onClick={handleCheck}
            disabled={loading || !vin.trim()}
            className="w-full bg-green-700 text-white py-3 rounded-md font-medium hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Verify VIN'}
          </button>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-8 space-y-6">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
              {result.verification?.status || 'UNKNOWN'}
            </div>

            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-medium">Vehicle Name</p>
                <p className="text-black font-bold">{result.data?.vehicle_name?.trim()}</p>
              </div>
              <div>
                <p className="font-medium">Vehicle Age</p>
                <p className="text-black font-bold">{result.data?.vehicle_age}</p>
              </div>
              <div>
                <p className="font-medium">Vehicle Made In</p>
                <p className="text-black font-bold">{result.data?.vehicle_made_in?.trim()}</p>
              </div>
            </div>

            <details className="bg-gray-100 rounded p-4">
              <summary className="cursor-pointer font-semibold text-gray-800">Vehicle Warranty</summary>
              <div className="mt-2 text-sm text-gray-700 space-y-4">
                {result.data?.vehicle_warranty?.length > 0 ? (
                  result.data.vehicle_warranty.map((item: any, index: number) => (
                    <div key={index} className="space-y-1">
                      <p><strong>Type:</strong> {item.type || 'N/A'}</p>
                      <p><strong>Warranty:</strong> {item.warranty || 'N/A'}</p>
                      <p><strong>Estimated Remaining:</strong> {item.estimated_remainings || 'N/A'}</p>
                    </div>
                  ))
                ) : (
                  <p>N/A</p>
                )}
              </div>
            </details>

            <details className="bg-gray-100 rounded p-4">
              <summary className="cursor-pointer font-semibold text-gray-800">Market Analysis</summary>
              <div className="mt-2 text-gray-700">
                <p><strong>Time Period:</strong> {result.data?.market_analysis?.time_period || 'N/A'}</p>
                <p><strong>Certainty:</strong> {result.data?.market_analysis?.certainty || 'N/A'}</p>
              </div>
            </details>

            <details className="bg-gray-100 rounded p-4">
              <summary className="cursor-pointer font-semibold text-gray-800">Vehicle Specification</summary>
              <div className="mt-2">
                {result.data?.vehicle_specification?.map((item: any, index: number) => {
                  const key = Object.keys(item)[0];
                  const value = item[key];
                  return (
                    <div key={index} className="flex justify-between py-1 border-b border-gray-200">
                      <span className="capitalize text-gray-600">{key.replace(/_/g, ' ')}</span>
                      <span className="font-medium text-gray-800">{String(value) || 'N/A'}</span>
                    </div>
                  );
                })}
              </div>
            </details>

            <details className="bg-gray-100 rounded p-4">
              <summary className="cursor-pointer font-semibold text-gray-800">Fuel Details</summary>
              <div className="mt-2 text-sm text-gray-700">
                {Object.entries(result.data?.fuel_details || {}).map(([key, value], index) => (
                  <div key={index} className="flex justify-between border-b border-gray-200 py-1">
                    <span className="capitalize">{key.replace(/_/g, ' ')}</span>
                    <span className="font-medium">{String(value) || 'N/A'}</span>
                  </div>
                ))}
              </div>
            </details>

            <details className="bg-gray-100 rounded p-4">
              <summary className="cursor-pointer font-semibold text-gray-800">Vehicle Equipments</summary>
              <div className="mt-2">
                {result.data?.vehicle_equipments?.map((equip: any, index: number) => (
                  <div key={index} className="mb-4">
                    <p className="font-medium text-gray-700 mb-2">{equip.section}</p>
                    {equip.details?.length ? (
                      equip.details.map((detail: any, idx: number) => {
                        const key = Object.keys(detail)[0];
                        const value = detail[key];
                        return (
                          <div key={idx} className="flex justify-between border-b border-gray-200 text-sm">
                            <span className="text-gray-600">{key.replace(/_/g, ' ')}</span>
                            <span className="text-gray-800 font-medium">{String(value) || 'N/A'}</span>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-sm text-gray-600">No details available</p>
                    )}
                  </div>
                ))}
              </div>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}
