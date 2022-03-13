export interface ChartProps {
  labels?: (string | undefined)[];
  values?: (number | undefined)[];
  datasets?: DataSet[];
  loading?: boolean;
}

export interface DataSet {
  labels?: string;
  name?: string;
  data: number[] | any;
  borderColor?: string;
  backgroundColor?: string;
}

export interface BarChartProps extends ChartProps {
  type: 'horizontal' | 'vertical';
}