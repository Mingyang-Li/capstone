import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";

interface ICard {
  loading?: boolean;
  title?: string;
  value?: number;
  unit?: string;
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
            <Typography color="red" variant="h5">
              <CountUp start={0} end={100} delay={0} duration={2.75} />
              {/* {props.value ?? "1000"}
              {props.unit ?? ""} */}
            </Typography>
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
