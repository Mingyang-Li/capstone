import { ThemeProvider } from "@emotion/react";
import {
  Grid,
  CssBaseline,
  Paper,
  Box,
  Avatar,
  Typography,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthenticationButton from "../components/auth/AuthenticationButton";

const theme = createTheme();

export const Login: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              // eslint-disable-next-line max-len
              "url(https://onechelofanadventure.com/wp-content/uploads/2017/05/New-Zealand-South-Island-Things-to-Do.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              HealthKit
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <AuthenticationButton />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
