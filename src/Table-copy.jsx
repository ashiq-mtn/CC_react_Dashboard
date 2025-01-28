import { useState, useEffect, useCallback } from "react";
import { fetchWasteData } from "./readData";

function Table() {
  const [wasteData, setWasteData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;
  const INITIAL_INTERVAL = 3000;

  const getData = useCallback(async () => {
    try {
      if (!navigator.onLine) {
        throw new Error('No internet connection');
      }

      const data = await fetchWasteData();
      setWasteData(data);
      setError(null);
      setRetryCount(0);
    } catch (error) {
      console.error("Failed to fetch waste data:", error);
      setError(error.message);
      setRetryCount(prev => prev + 1);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();

    // Calculate interval with exponential backoff
    const intervalTime = error 
      ? Math.min(INITIAL_INTERVAL * Math.pow(2, retryCount), 30000) 
      : INITIAL_INTERVAL;

    // Stop polling if max retries reached
    if (retryCount >= MAX_RETRIES) {
      console.error('Max retries reached, stopping polling');
      return;
    }

    const interval = setInterval(getData, intervalTime);
    return () => clearInterval(interval);
  }, [getData, error, retryCount]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="relative overflow-hidden rounded-sm shadow-md bg-white mt-7">
      <div className="py-5 px-5 text-xl font-normal text-black">
        Realtime Log
      </div>
      <hr className="h-px border-0 bg-gray-100" />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-800">
          <thead className="text-[13px] text-gray-700 border-b-1 border-slate-300 bg-stone-50 dark:bg-slate-100 dark:text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                Bin ID
              </th>
              <th scope="col" className="px-6 py-4">
                Waste Type
              </th>
              <th scope="col" className="px-6 py-4">
                Fill level
              </th>
              <th scope="col" className="px-6 py-4">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              wasteData.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white dark:bg-white-100 dark:border-gray-500 border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-200"
                >
                  <td className="px-6 py-4 font-semibold">{row.binId}</td>
                  <td className="px-6 py-4">{row.wasteType}</td>
                  <td className="px-6 py-4">{row.fillLevel}</td>
                  <td className="px-6 py-4">{formatTime(row.time)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
