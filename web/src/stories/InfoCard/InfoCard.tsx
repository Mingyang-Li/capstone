import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";

interface ICard {
  loading?: boolean;
  title?: string;
  value?: number;
  unit?: string;
  countUp?: React.ReactNode;
  icon?: React.ReactNode;
  iconColor?: any;
}

const InfoCard = (props: ICard) => {
  return (
    <Card sx={{ height: "auto" }} variant="outlined">
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {props.title ?? "Card title"}
            </Typography>
            <Typography variant="h5">{props.countUp ?? "1000"}</Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: props.iconColor ?? "pink",
                height: 46,
                width: 46,
              }}
            >
              {props.icon ?? <ArrowCircleDownIcon />}
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default InfoCard;
