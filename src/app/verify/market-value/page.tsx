'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MarketValue() {
  const [vin, setVin] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [usdToNgn, setUsdToNgn] = useState<number>(0);

  // Fetch USD to NGN conversion rate
  useEffect(() => {
    const fetchRate = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
            ids: 'usd',
            vs_currencies: 'ngn'
        }
        });
        
        const data = await response.data

        setUsdToNgn(data.usd.ngn);
    } catch (err) {
        setUsdToNgn(1500); // fallback value if API fails
        console.log(err)
    }
    };
    
      fetchRate();
  }, []);
    

  const handleCheck = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/verification/market-value`, { vin });

      if (data.status === 'success') {
        setResult(data.data);
      } else {
        setError('Failed to fetch market value.');
      }
    } catch (err: any) {
      setError(err.response?.data?.msg);
    }

    setLoading(false);
  };

  const convertToNaira = (usdPrice: string) => {
    const cleaned = usdPrice.replace(/[^0-9.]/g, '');
    const dollars = parseFloat(cleaned);

    if (isNaN(dollars)) return '₦0';

    const naira = dollars * usdToNgn;
    return `₦${naira.toLocaleString('en-NG', { maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Market Value Check</h2>

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
            {loading ? 'Checking...' : 'Check Market Value'}
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
              {result.intro?.vin || 'VIN Unknown'}
            </div>

            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-medium">Make</p>
                <p className="text-black font-bold">{result.basic?.make || 'N/A'}</p>
              </div>
              <div>
                <p className="font-medium">Model</p>
                <p className="text-black font-bold">{result.basic?.model || 'N/A'}</p>
              </div>
              <div>
                <p className="font-medium">Year</p>
                <p className="text-black font-bold">{result.basic?.year || 'N/A'}</p>
              </div>
              <div>
                <p className="font-medium">Trim</p>
                <p className="text-black font-bold">{result.basic?.trim || 'N/A'}</p>
              </div>
            </div>

            <details className="bg-gray-100 rounded p-4">
              <summary className="cursor-pointer font-semibold text-gray-800">Market Value Data</summary>
              <div className="mt-2 text-sm text-gray-700 space-y-4">
                {result.market_value?.market_value_data?.map((item: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <p className="font-bold text-gray-800">{item.trim}</p>

                    {item['market value']?.map((conditionData: any, idx: number) => (
                      <div key={idx} className="border border-gray-300 rounded p-2">
                        <p><strong>Condition:</strong> {conditionData.Condition}</p>
                        <p><strong>Trade-In:</strong> {conditionData['Trade-In']} <br /><span className="text-green-700 font-bold">{convertToNaira(conditionData['Trade-In'])}</span></p>
                        <p><strong>Private Party:</strong> {conditionData['Private Party']} <br /><span className="text-green-700 font-bold">{convertToNaira(conditionData['Private Party'])}</span></p>
                        <p><strong>Dealer Retail:</strong> {conditionData['Dealer Retail']} <br /><span className="text-green-700 font-bold">{convertToNaira(conditionData['Dealer Retail'])}</span></p>
                      </div>
                    ))}
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
