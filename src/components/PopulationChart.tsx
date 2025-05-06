import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Country } from '../types/country';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface PopulationChartProps {
  countries: Country[];
}

export const PopulationChart: React.FC<PopulationChartProps> = ({ countries }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  // Sort and get top 5 most populous countries
  const topCountries = [...countries]
    .sort((a, b) => b.population - a.population)
    .slice(0, 5);

  const labels = topCountries.map(c => c.name.common);
  const dataValues = topCountries.map(c => c.population / 1e6); // in millions

  const data = {
    labels,
    datasets: [
      {
        label: 'Population (in millions)',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: dataValues,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: selectedRegion
          ? `Top 5 Populated Countries in ${selectedRegion}`
          : `Top 5 Populated Countries Worldwide`,
      },
    },
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};