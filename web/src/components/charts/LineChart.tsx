import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { CircularProgress } from '@mui/material';
import { ChartProps } from 'dto/Charts.dto';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const demoLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

export const demoData = {
  demoLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: demoLabels.map(() =>
        faker.datatype.number({ min: -1000, max: 1000 }),
      ),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: demoLabels.map(() =>
        faker.datatype.number({ min: -1000, max: 1000 }),
      ),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const LineChart: React.FC<ChartProps> = ({ labels, values, loading }) => {
  if (!labels && !values) return <Line options={options} data={demoData} />;
  else if (!labels || !values) return <CircularProgress />;
  else if (loading) return <CircularProgress />;
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'data',
        data: values,
        backgroundColor: demoData.datasets[0].backgroundColor,
        borderColor: demoData.datasets[0].borderColor,
      },
    ],
  };
  return <Line data={data} />;
};

export default LineChart;
