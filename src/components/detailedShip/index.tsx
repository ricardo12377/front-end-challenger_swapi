//styles && theming
import Box from "@mui/material/Box";
import "./style.css";
import { ThemeProvider } from "@mui/material/styles";
import { Container, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";

//requests && hooks
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ShipsType } from "../../types/ships";
import { ContentContext } from "../../auth/contentContext";
import { theme } from "../../theming/themeProvider";

export default function DetailCard() {
  const [ship, setShip] = useState({} as ShipsType);
  const { url } = useContext(ContentContext);

  const router = useNavigate();

  function GetInfos() {
    axios.get(url).then((response) => setShip(response.data));
  }

  useEffect(() => GetInfos(), []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Container fixed className="container">
          <Box
            sx={{
              width: 1,
              height: 1,
              backgroundColor: "primary.secondary",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="items">
              <DesktopDatePicker
                label="Created"
                inputFormat="MM/DD/YYYY"
                value={ship.created}
                onChange={() => {}}
                renderInput={(params) => <TextField {...params} />}
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`MGLT: ${ship.MGLT}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Capacity: ${ship.cargo_capacity}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Consumables: ${ship.consumables}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Cost: ${ship.cost_in_credits}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Crew: ${ship.crew}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </div>

            <div className="items">
              <DesktopDatePicker
                label="Edited at"
                inputFormat="MM/DD/YYYY"
                value={ship.edited}
                onChange={() => {}}
                renderInput={(params) => <TextField {...params} />}
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Hyper-drive: ${ship.hyperdrive_rating}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Length: ${ship.length}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Manufacturer: ${ship.manufacturer}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Atmosphering: ${ship.max_atmosphering_speed}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Model: ${ship.model}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </div>

            <div className="items">
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Name: ${ship.name}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Passengers: ${ship.passengers}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Films: ${ship.films}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Pilots: ${ship.pilots}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`StarShip Class: ${ship.starship_class}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Url: ${ship.url}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </div>
          </Box>
          <Button
            variant="contained"
            onClick={() => router("/")}
            sx={{ ml: "1.5em" }}
          >
            Back
          </Button>
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
