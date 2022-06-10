import ReactApexChart from "react-apexcharts";
import { ChartProps } from "../../../dto/Charts.dto";
import Loading from "../../../components/Loading";
import { ApexOptions } from "apexcharts";

export const demoSeries = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];
export const demoOptions = {
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

const LineChart: React.FC<ChartProps> = (props: ChartProps) => {
  if (!props || props.loading) {
    return <Loading />;
  }

  const options: ApexOptions = {
    chart: {
      height: 400,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      categories: props.labels,
      labels: {
        datetimeUTC: true,
      },
    },
  };
  return (
    <ReactApexChart
      options={options}
      series={props.series}
      height={350}
      type="line"
    />
  );
};

export default LineChart;
