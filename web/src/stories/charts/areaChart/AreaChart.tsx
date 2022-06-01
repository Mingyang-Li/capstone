import ReactApexChart from "react-apexcharts";
import { ChartProps } from "../../../dto/Charts.dto";
import Loading from '../../../components/Loading';

const demoSeries = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
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
      "2018-09-19",
      "2018-09-20",
      "2018-09-21",
      "2018-09-22",
      "2018-09-23",
      "2018-09-24",
      "2018-09-25",
    ],
  },
};

const AreaChart: React.FC<ChartProps> = (props: ChartProps) => {
  if (!props || props.loading) {
    return <Loading />
  }
  const series = [{
    name: 'Calories',
    data: props.values as number[],
  }];

  const options = {
    chart: {
      height: 400,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: props.labels,
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
