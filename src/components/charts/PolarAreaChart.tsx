import { CircularProgress } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';
import { ChartProps } from 'dto/Charts.dto';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const demoData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PolarAreaChart: React.FC<ChartProps> = ({ labels, values, loading }) => {
  if (!labels && !values) return <PolarArea data={demoData} />;
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
  return <PolarArea data={data} />;
};

export default PolarAreaChart;
