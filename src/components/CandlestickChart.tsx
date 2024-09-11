"use client";
import React, { useEffect, useRef } from "react";
import axios from "axios";
import { createChart, ISeriesApi, UTCTimestamp } from "lightweight-charts";

interface CandlestickData {
  time: UTCTimestamp;
  open: number;
  high: number;
  low: number;
  close: number;
}

// const CandlestickChart: React.FC = () => {
//   const chartContainerRef = useRef<HTMLDivElement>(null);
//   const candlestickSeriesRef = useRef<ISeriesApi<"Candlestick">>();

//   useEffect(() => {
//     if (chartContainerRef.current) {
//       const chart = createChart(chartContainerRef.current, {
//         width: 600,
//         height: 400,
//       });

//       const candlestickSeries = chart.addCandlestickSeries();
//       candlestickSeriesRef.current = candlestickSeries;

//       axios
//         .get("http://localhost:8000/api/candlestick-data/")
//         .then((response) => {
//           const data = response.data.data
//             .map((item: any) => ({
//               time: (new Date(item.x).getTime() / 1000) as UTCTimestamp,
//               open: item.open,
//               high: item.high,
//               low: item.low,
//               close: item.close,
//             }))
//             .sort((a, b) => a.time - b.time);

//           candlestickSeries.setData(data);
//         })
//         .catch((error) => console.error(error));
//     }

//     return () => {
//       if (chartContainerRef.current) {
//         chartContainerRef.current.innerHTML = "";
//       }
//     };
//   }, []);

//   return <div ref={chartContainerRef} />;
// };

const CandlestickChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<"Candlestick">>();
  const chartRef = useRef<any>();

  useEffect(() => {
    if (chartContainerRef.current) {
      // Create the chart and set dimensions dynamically
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 400,
        timeScale: {
          rightOffset: 12,
          barSpacing: 10,
          fixLeftEdge: true,
          lockVisibleTimeRangeOnResize: true,
        },
      });

      chartRef.current = chart;

      // Create the candlestick series and store it in the ref
      const candlestickSeries = chart.addCandlestickSeries();
      candlestickSeriesRef.current = candlestickSeries;

      // Fetch data from API
      axios
        .get("http://localhost:8000/api/candlestick-data/")
        .then((response) => {
          const data = response.data.data
            .map((item: any) => ({
              time: Math.floor(new Date(item.x).getTime() / 1000) as UTCTimestamp, // Convert time to seconds
              open: item.open,
              high: item.high,
              low: item.low,
              close: item.close,
            }))
            .sort((a, b) => a.time - b.time); // Sort the data by time

          // Set the chart data
          candlestickSeries.setData(data);
          chart.timeScale().fitContent(); // Auto-fit the time scale
        })
        .catch((error) => console.error(error));
    }

    // Clean up on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.remove(); // Remove the chart instance
      }
    };
  }, []);

  // Adjust chart size dynamically if window resizes
  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div ref={chartContainerRef} style={{ width: "100%", height: "400px" }} />;
};

export default CandlestickChart;
