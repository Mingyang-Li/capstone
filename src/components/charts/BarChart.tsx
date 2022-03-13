import { CircularProgress } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { BarChartProps } from 'dto/Charts.dto';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const demoOptions = {
  indexAxis: 'x' as const, // y = horizontal, x or undefined is vertical
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = [
  'Type 1',
  'Type 2',
  'Type 3',
  'Type 4',
  'Type 5',
  'Type 6',
  'Type 7',
];

export const demoData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [21, 62, 3, 4, 5, 21, 13],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [11, 22, 63, 24, 15, 43, 15],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const BarChart: React.FC<BarChartProps> = ({
  labels,
  values,
  loading,
  type,
}) => {
  if (!labels && !values) return <Bar options={demoOptions} data={demoData} />;
  else if (!labels || !values) return <CircularProgress />;
  else if (loading) return <CircularProgress />;
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: demoData.datasets[0].backgroundColor,
      },
    ],
  };

  const chartAxis = type === 'vertical' ? 'x' : 'y';

  switch (chartAxis) {
    case 'x':
      const xOptions = {
        indexAxis: 'x' as const,
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
        },
      };
      return <Bar data={data} options={xOptions} />;
    case 'y':
      const yOptions = {
        indexAxis: 'y' as const,
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
        },
      };
      return <Bar data={data} options={yOptions} />;
  }
};

export default BarChart;
