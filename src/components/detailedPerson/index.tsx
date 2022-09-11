//styles && theming
import Box from "@mui/material/Box";
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
import { ContentContext } from "../../auth/contentContext";
import { theme } from "../../theming/themeProvider";
import { PeopleType } from "../../types/people";

export default function DetailCardPerson() {
  const [person, setPerson] = useState({} as PeopleType);
  const { personUrl } = useContext(ContentContext);

  const router = useNavigate();

  function GetInfos() {
    axios.get(personUrl).then((response) => setPerson(response.data));
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
                value={person.created}
                onChange={() => {}}
                renderInput={(params) => <TextField {...params} />}
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Birth: ${person.birth_year}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Eye Color: ${person.eye_color}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Films: ${person.films}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Gender: ${person.gender}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Hair Color: ${person.hair_color}`}
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
                value={person.edited}
                onChange={() => {}}
                renderInput={(params) => <TextField {...params} />}
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Height: ${person.height}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Home World: ${person.homeworld}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Mass: ${person.mass}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Name: ${person.name}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Skin Color: ${person.skin_color}`}
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
                value={`Species: ${person.species}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Star Ships: ${person.starships}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Url: ${person.url}`}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                sx={{ width: "350px" }}
                id="filled-read-only-input"
                value={`Vehicles: ${person.vehicles}`}
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
