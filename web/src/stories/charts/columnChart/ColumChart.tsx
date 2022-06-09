import ReactApexChart from "react-apexcharts";
import Loading from "../../../components/Loading";
import { ChartProps, xAxis } from "../../../dto/Charts.dto";

const ColumnChart: React.FC<ChartProps> = (props: ChartProps) => {
  if (!props || props.loading) {
    return <Loading />;
  }

  const options = {
    xaxis: {
      categories: props.labels,
      type: "datetime" as xAxis,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={props.series}
      type="bar"
      height={350}
    />
  );
};

export default ColumnChart;
