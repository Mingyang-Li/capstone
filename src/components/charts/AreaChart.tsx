import { ChartProps } from 'dto/Charts.dto';
import ReactApexChart from 'react-apexcharts';

const demoSeries = [
  {
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];
const demoOptions = {
  chart: {
    height: 370,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      '2018-09-19',
      '2018-09-20',
      '2018-09-21',
      '2018-09-22',
      '2018-09-23',
      '2018-09-24',
      '2018-09-25',
    ],
  },
};

const AreaChart: React.FC<ChartProps> = ({ datasets, labels }) => {
  if (!datasets || !labels) {
    return (
      <ReactApexChart
        options={demoOptions}
        series={demoSeries}
        height={350}
        type="area"
      />
    );
  }
  const series = datasets;
  const options = {
    chart: {
      height: 400,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: labels,
    },
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      height={350}
      type="area"
    />
  );
};

export default AreaChart;
