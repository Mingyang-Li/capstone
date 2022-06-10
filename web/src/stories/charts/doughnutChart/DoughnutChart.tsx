import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Loading from "../../../components/Loading";
import { ChartProps } from "../../../dto/Charts.dto";

const DoughnutChart: React.FC<ChartProps> = (props: ChartProps) => {
  if (!props || props.loading) {
    return <Loading />;
  }

  const options: ApexOptions = {
    labels: props.labels as string[],
    chart: {
      type: "donut",
      height: 350,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={props.values as number[]}
      type={"donut"}
    />
  );
};

export default DoughnutChart;
