'use client';

import { useState } from 'react';
import axios from 'axios';

function PlateNumberCheck() {
  const [plateNumber, setPlateNumber] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/verification/verify-plate`, {
        vehicle_number: plateNumber,
      },
      {
          headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.data;
      
      setResult(data);
    //   if (res.status != 200) {
    //   } else {
    //     setError(data.error || 'Something went wrong');
    //   }
    } catch (err: any) {
        setError(err.message || 'Network error');
        console.error('Error verifying plate number:', err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Plate Number Verification</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Plate Number (e.g. ABC123YZ)"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
          />

          <button
            onClick={handleCheck}
            disabled={loading || !plateNumber.trim()}
            className="w-full bg-green-700 text-white py-3 rounded-md font-medium hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Verify Plate Number'}
          </button>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}

        {result && (
         <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Result Summary</h3>
            <table className="w-full text-left border border-gray-300 rounded overflow-hidden">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="bg-gray-50 px-4 py-2 w-1/3 font-medium text-gray-600">Message</th>
                  <td className="px-4 py-2">{result.message}</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 px-4 py-2 font-medium text-gray-600">Verification Status</th>
                  <td className="px-4 py-2">{result.verification?.status || 'N/A'}</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 px-4 py-2 font-medium text-gray-600">Vehicle Number</th>
                  <td className="px-4 py-2">{result.data?.vehicle_number || 'N/A'}</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 px-4 py-2 font-medium text-gray-600">Vehicle Name</th>
                  <td className="px-4 py-2">{result.data?.vehicle_name || 'N/A'}</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 px-4 py-2 font-medium text-gray-600">Vehicle Color</th>
                  <td className="px-4 py-2">{result.data?.vehicle_color || 'N/A'}</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 px-4 py-2 font-medium text-gray-600">License</th>
                  <td className="px-4 py-2">{result.data?.vehicle_license || 'Not Available'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlateNumberCheck;
