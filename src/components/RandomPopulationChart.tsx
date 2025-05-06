import React from 'react';
import { Bar } from 'react-chartjs-2';
import type { Country } from '../types/country';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface RandomPopulationChartProps {
  allCountries: Country[];
}

export const RandomPopulationChart: React.FC<RandomPopulationChartProps> = ({ allCountries }) => {
  // Get 12 random countries
  const getRandomCountries = (arr: Country[], n: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  const randomCountries = getRandomCountries(allCountries, 12);
  
  // Find top populated country in the list
  const topCountry = randomCountries.reduce((prev, curr) =>
    curr.population > prev.population ? curr : prev
  );

  const labels = randomCountries.map(c => c.name.common);
  const dataValues = randomCountries.map(c => c.population);

  const colors = [
    'rgba(75, 192, 192, 0.6)',  // teal
    'rgba(255, 99, 132, 0.6)',  // red
    'rgba(255, 206, 86, 0.6)',  // yellow
    'rgba(54, 162, 235, 0.6)',  // blue
    'rgba(153, 102, 255, 0.6)', // purple
    'rgba(255, 159, 64, 0.6)',   // orange
    'rgba(199, 199, 199, 0.6)', // gray
    'rgba(83, 102, 255, 0.6)',  // indigo
    'rgba(255, 99, 255, 0.6)',  // pink
    'rgba(100, 200, 100, 0.6)', // green
    'rgba(200, 100, 100, 0.6)', // light red
    'rgba(100, 100, 200, 0.6)', // light blue
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Population',
        backgroundColor: (context: any) =>
          colors[context.dataIndex] || 'rgba(75, 192, 192, 0.6)',
        borderColor: (context: any) =>
          colors[context.dataIndex]?.replace('0.6)', '1)'),
        borderWidth: 1,
        data: dataValues,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Population of 12 Random Countries',
      },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.raw.toLocaleString()} people`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (tickValue: string | number) => {
            const value = typeof tickValue === 'number' ? tickValue : parseFloat(tickValue);
            return isNaN(value) ? '' : `${(value / 1e6).toFixed(1)}M`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">

      {/* Highlight Top Country */}
      <div className="mb-6 flex items-center gap-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <img
          src={topCountry.flags.png}
          alt={`Flag of ${topCountry.name.common}`}
          className="h-10 w-auto rounded"
        />
        <div>
          <p className="font-bold text-lg">{topCountry.name.common}</p>
          <p className="text-sm text-gray-600">
            Population: {(topCountry.population / 1e6).toFixed(1)} million
          </p>
        </div>
      </div>

      {/* Chart */}
      <div style={{ height: '400px' }}>
        <Bar data={data} options={options} />
      </div>

      <p className="text-sm text-gray-500 mt-4">
        *Data updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};