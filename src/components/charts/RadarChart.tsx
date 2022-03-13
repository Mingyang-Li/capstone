import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { CircularProgress } from '@mui/material';
import { ChartProps } from 'dto/Charts.dto';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export const demoData = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [22, 89, 70, 80, 60, 49],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: '# of Votes',
      data: [72, 15, 33, 25, 52, 63],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(66, 215, 245)',
      borderWidth: 1,
    },
  ],
};

const RadarChart: React.FC<ChartProps> = ({ labels, values, loading }) => {
  if (!labels && !values) return <Radar data={demoData} />;
  else if (!labels || !values) return <CircularProgress />;
  else if (loading) return <CircularProgress />;
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: demoData.datasets[0].backgroundColor,
        borderColor: demoData.datasets[0].borderColor,
        borderWidth: demoData.datasets[0].borderWidth,
      },
    ],
  };
  return <Radar data={data} />;
};

export default RadarChart;
