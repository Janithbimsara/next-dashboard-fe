"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartData {
  labels: string[];
  data: number[];
}

const PieChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/pie-chart-data/')
      .then((response) => {
        const data: PieChartData = response.data;
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: 'Pie Chart',
              data: data.data,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        });
      })
      .catch((error) => console.error(error));
  }, []);


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '300px' }}>
      {chartData ? <Pie data={chartData} options={options} /> : <p>Loading Pie Chart...</p>}
    </div>
  );
};

export default PieChart;
