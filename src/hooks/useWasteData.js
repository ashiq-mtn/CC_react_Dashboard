import { useState, useEffect, useRef } from 'react';
import { fetchWasteData } from './readData';

export function useWasteData() {
  const [data, setData] = useState({
    tableData: [],
    totalBins: 0,
    totalWaste: 0,
    commonWaste: '',
    filledBins: 0,
    isLoading: true,
    error: null,
    pieChartData: {
      values: []
    },
    newHighFillBins: [] // Add this to track newly filled bins
  });
  
  const previousHighFillBins = useRef(new Set());

  useEffect(() => {
    const getData = async () => {
      try {
        if (!navigator.onLine) {
          throw new Error('No internet connection');
        }

        const wasteData = await fetchWasteData();
        
        // Get latest reading for each bin
        const latestBinReadings = new Map();
        wasteData.forEach(reading => {
          const currentTime = new Date(reading.time).getTime();
          if (!latestBinReadings.has(reading.binId) || 
              currentTime > new Date(latestBinReadings.get(reading.binId).time).getTime()) {
            latestBinReadings.set(reading.binId, reading);
          }
        });

        // Calculate metrics
        const uniqueBins = latestBinReadings.size;
        // const totalWaste = wasteData.reduce((acc, curr) => acc + parseFloat(curr.fillLevel), 0);
        const totalWaste = wasteData.length;
        const wasteTypes = wasteData.reduce((acc, curr) => {
          acc[curr.wasteType] = (acc[curr.wasteType] || 0) + 1;
          return acc;
        }, {});
        const commonWaste = Object.entries(wasteTypes).sort((a,b) => b[1] - a[1])[0]?.[0] || '';
        
        // Count unique bins with fill level > 80
        const filledBins = Array.from(latestBinReadings.values())
          .filter(bin => parseFloat(bin.fillLevel) > 80).length;

        // Get high fill level bins
        const highFillBins = Array.from(latestBinReadings.values())
          .filter(bin => parseFloat(bin.fillLevel) > 80)
          .map(bin => ({
            binId: bin.binId,
            fillLevel: bin.fillLevel,
            wasteType: bin.wasteType
          }));

        // Check for newly filled bins
        const currentHighFillBinIds = new Set(highFillBins.map(bin => bin.binId));
        const newlyFilledBins = highFillBins.filter(
          bin => !previousHighFillBins.current.has(bin.binId)
        );
        
        previousHighFillBins.current = currentHighFillBinIds;

        // Calculate waste type distribution for pie chart
        const pieChartData = {
          wasteTypes: Object.keys(wasteTypes),
          values: Object.values(wasteTypes)
        };

        setData({
          tableData: wasteData,
          totalBins: uniqueBins,
          totalWaste: totalWaste,
          commonWaste,
          filledBins,
          highFillBins, // Add this to state
          isLoading: false,
          error: null,
          pieChartData,
          newHighFillBins: newlyFilledBins
        });
      } catch (error) {
        setData(prev => ({ 
          ...prev, 
          error: error.message, 
          isLoading: false 
        }));
      }
    };

    getData();
    const interval = setInterval(getData, 5000);
    return () => clearInterval(interval);
  }, []);

  return data;
}