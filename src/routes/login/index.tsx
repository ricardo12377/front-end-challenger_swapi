//material ui imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import ApiIcon from "@mui/icons-material/Api";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//requests && hooks
import { useContext, useState } from "react";
import { UserContext } from "../../auth/loginAuthContext";
import { UserType } from "../../types/user";
import { yupSchema } from "../../formValidator/yupValidator";
import { menssagerProvider } from "../../helpers/menssagerProvider";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="github.com/ricardo12377">
        Ricardo Costa Github
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#7e57c2",
    },
    secondary: {
      main: "#202024",
    },
  },
});

export default function Login() {
  const [login, setLogin] = useState<UserType>({ user: "", password: "" });

  const { validateUser } = useContext(UserContext);

  const HandleChange = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    yupSchema.isValid(login).then(function (valid) {
      if (valid) validateUser(login);

      if (!valid) {
        alert(menssagerProvider.invalidLogin);
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ApiIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={(e) => HandleChange(e)}
              margin="normal"
              required
              fullWidth
              id="user"
              label="User Login"
              name="user"
              autoComplete="user"
              autoFocus
            />
            <TextField
              onChange={(e) => HandleChange(e)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
              className="login-button"
            >
              Entrar
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
