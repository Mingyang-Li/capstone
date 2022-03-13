import { Typography, Card, CardContent } from '@mui/material';

export interface ChartContainerProps {
  title: string;
  component: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  component,
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        {component}
      </CardContent>
    </Card>
  );
};
