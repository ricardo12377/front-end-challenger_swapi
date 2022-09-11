import { UserProvider } from "./auth/loginAuthContext";
import { ContentProvider } from "./auth/contentContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/login";
import Home from "./routes/home";
import DetailCard from "./components/detailedShip";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import DetailCardPerson from "./components/detailedPerson";

const theme = createTheme({
  palette: {
    primary: {
      main: "#202024",
    },
    secondary: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <ContentProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/ship/:id" element={<DetailCard />} />
              <Route path="/person/:id" element={<DetailCardPerson />} />
            </Routes>
          </ContentProvider>
        </UserProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
