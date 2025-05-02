import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type PopulationChartProps = {
  country: {
    name: { common: string };
    population: number;
  } | null;
  allCountries: { name: { common: string }; population: number }[];
};

export const PopulationChart = ({ country, allCountries }: PopulationChartProps) => {
  if (!country) return null;

  const topCountries = [...allCountries]
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
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: `Top Populated Countries vs ${country.name.common}`,
      },
    },
  };

  return <Bar data={data} options={options} />;
};