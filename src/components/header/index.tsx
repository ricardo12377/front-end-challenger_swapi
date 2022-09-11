//styles && theming
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import "./styles.css";
import { theme } from "../../theming/themeProvider";

//requests and hooks
import { useContext } from "react";
import { UserContext } from "../../auth/loginAuthContext";
import { ContentContext } from "../../auth/contentContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { logged, setLogged, setEditable } = useContext(UserContext);
  const { setPage } = useContext(ContentContext);
  const router = useNavigate();

  function Redirect() {
    router("/login");
  }

  function LogOut() {
    setLogged(false);
    setEditable(false);
    localStorage.removeItem("user");
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className="header" sx={{ textAlign: "center" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "flex", gap: "1em" }}
            >
              <p onClick={() => setPage(false)}>Persons</p>
              <p onClick={() => setPage(true)}>Ships</p>
            </Typography>
            <Button color="inherit">
              {logged ? (
                <div onClick={() => LogOut()}>logout</div>
              ) : (
                <div onClick={Redirect}>Login</div>
              )}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
