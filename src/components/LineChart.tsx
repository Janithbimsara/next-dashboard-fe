"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface LineChartData {
  labels: string[];
  data: number[];
}

const LineChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/line-chart-data/')
      .then((response) => {
        const data: LineChartData = response.data;
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: 'Line Chart',
              data: data.data,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
            },
          ],
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return chartData ? <Line data={chartData} /> : <p>Loading Line Chart...</p>;
};

export default LineChart;
