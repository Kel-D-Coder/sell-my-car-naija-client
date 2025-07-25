'use client';

import { useState } from 'react';
import axios from 'axios';

export default function VehicleHistoryPage() {
  const [vin, setVin] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/verification/vehicle-history`, { vin });

        const data = await res.data;

      if (res.status == 200) {
        setResult(data);
      } else {
        setError(data.msg || 'Vehicle history not found.');
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong');
      console.error(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium VIN Check Report</h2>

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
            {loading ? 'Fetching history...' : 'Check History'}
          </button>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}

        {result?.data?.html && (
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto">
            <div
              className="prose prose-sm max-w-none text-sm text-gray-800"
              dangerouslySetInnerHTML={{ __html: result.data.html }}
            />
          </div>
        )}
      </div>
    </div>
  );
}