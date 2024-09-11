"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarChartData {
  labels: string[];
  data: number[];
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/bar-chart-data/')
      .then((response) => {
        const data: BarChartData = response.data;
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: 'Bar Chart',
              data: data.data,
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
              borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return chartData ? <Bar data={chartData} /> : <p>Loading Bar Chart...</p>;
};

export default BarChart;
