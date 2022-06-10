import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Loading from "../../../components/Loading";
import { ChartProps, xAxis } from "../../../dto/Charts.dto";

const ColumnChart: React.FC<ChartProps> = (props: ChartProps) => {
  if (!props || props.loading) {
    return <Loading />;
  }

  const options: ApexOptions = {
    xaxis: {
      categories: props.labels,
      type: "datetime" as xAxis,
    },
    plotOptions: {
      bar: {
        dataLabels: {
          hideOverflowingLabels: true,
        },
      },
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
