import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Loading from "../../../components/Loading";
import { ChartProps } from "../../../dto/Charts.dto";

const DoughnutChart: React.FC<ChartProps> = (props: ChartProps) => {
  if (!props || props.loading) {
    return <Loading />;
  }

  const series = [44, 55, 41, 17, 15];

  const options: ApexOptions = {
    chart: {
      type: "donut",
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
      series={series}
      type={"donut"}
      height={350}
    />
  );
};

export default DoughnutChart;
