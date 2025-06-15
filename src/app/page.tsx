"use client";
import { useState, useEffect } from "react";
import { useApi } from "@/hooks/useApi";

// Utility to extract vehicle details from the HTML string
function extractVehicleDetails(html: string) {
  const makeMatch = html.match(/Vehicle Make\s*<\/td>\s*<td>\s*<span>(.*?)<\/span>/i);
  const colorMatch = html.match(/Vehicle Color\s*<\/td>\s*<td>\s*<span>(.*?)<\/span>/i);
  return {
    make: makeMatch ? makeMatch[1] : "",
    color: colorMatch ? colorMatch[1] : "",
  };
}

export default function Home() {
  const [plate, setPlate] = useState("");
  const { data, loading, error, request, reset } = useApi();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plate.trim()) return;
    const apiUrl = process.env.NEXT_PUBLIC_URL ?? "";
    request(`${apiUrl}/verification/verify-plate`, {
      method: "POST",
      data: { plateNumber: plate },
      headers: { "Content-Type": "application/json" },
    });
  };

  let details = null;
  if (typeof data === "string") {
    details = extractVehicleDetails(data);
  }


  useEffect(() => {
    reset(); // Reset state on component mount
  }, [plate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-300 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Vehicle Verification
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="plate">
            Plate Number
          </label>
          <input
            id="plate"
            type="text"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter plate number"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition hover:cursor-pointer"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
        {error ? (
          <div className="mt-4 w-full">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          </div>
        ) : details && (
          <div className="mt-6 w-full">
            <div className="bg-white border border-green-400 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-t-xl">
                Valid and assigned to the vehicle details below
              </div>
              <div className="px-6 py-4">
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium text-gray-700">Vehicle Make</td>
                      <td className="py-2 text-gray-900">{details.make}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-700">Vehicle Color</td>
                      <td className="py-2 text-gray-900">{details.color}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
