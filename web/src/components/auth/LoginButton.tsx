import { useAuth0 } from "@auth0/auth0-react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { blue } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));

const LoginButton: React.FC = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const login = useCallback(() => {
    loginWithRedirect().then(() => navigate("/dashboard"));
  }, [navigate, loginWithRedirect]);
  return (
    <ColorButton
      onClick={() => login()}
      fullWidth
      variant="contained"
      color="success"
      startIcon={<LoginIcon />}
    >
      Log In
    </ColorButton>
  );
};

export default LoginButton;
