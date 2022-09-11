//styles && theming
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Container from "@mui/material/Container";
import { Button, TextField } from "@mui/material";
import "./style.css";

//requests && hooks
import { useEffect, useCallback, useState, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { FetchAllPersonsOptions } from "../../services/FetchAllPersonsOptions";
import { endpoints } from "../../services/endpoints";
import axios from "axios";
import { PeopleType } from "../../types/people";
import { theme } from "../../theming/themeProvider";
import { UserContext } from "../../auth/loginAuthContext";
import { menssagerProvider } from "../../helpers/menssagerProvider";
import { useNavigate } from "react-router-dom";
import { ContentContext } from "../../auth/contentContext";

export default function Persons() {
  const [dense, setDense] = useState(false);
  const [persons, setPersons] = useState<PeopleType[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useNavigate();

  const { editable } = useContext(UserContext);
  const { setPersonUrl } = useContext(ContentContext);

  function ShowDetails(index: number, url: string) {
    if (editable === false) {
      alert(menssagerProvider.notLoggedUser);
    }

    if (editable === true) {
      setPersonUrl(url);
      router(`person/${index}`);
    }
  }

  const data = useCallback(() => {
    setLoading(true);
    const myOptions = FetchAllPersonsOptions(endpoints.peoples);

    axios
      .request(myOptions)
      .then((response) => setPersons(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    data();
  }, [persons]);

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "60vh" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{ minHeight: "60vh", minWidth: "80vw" }}
          >
            <Typography
              sx={{
                mt: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: "2em",
              }}
              variant="h6"
              component="div"
            >
              <TextField
                id="filled-read-only-input"
                label="API List"
                defaultValue="All Persons"
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                id="standard-basic"
                label="Procure pelo nome"
                variant="filled"
                onChange={(e) => setFilter(e.target.value)}
              />
            </Typography>

            <List
              dense={dense}
              className="list"
              sx={{
                flexGrow: 1,
                maxWidth: 1,
                height: "500px",
                bgcolor: "primary.main",
                color: "secondary.main",
              }}
            >
              {persons
                .filter((item) => {
                  if (filter === "") {
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(filter.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item, index) => {
                  return (
                    <ListItem className="item-list" key={index}>
                      <ListItemAvatar>
                        <Avatar>
                          <PeopleAltOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.name} sx={{ width: 1 / 3 }} />
                      <ListItemText
                        primary={item.gender}
                        sx={{ width: 1 / 3 }}
                      />
                      <ListItemText
                        primary={item.height}
                        sx={{ width: 1 / 3 }}
                      />

                      <Button
                        variant="contained"
                        onClick={() => ShowDetails(index, item.url)}
                        sx={{
                          backgroundColor: "secondary.main",
                          color: "primary.main",
                        }}
                      >
                        Details
                      </Button>
                    </ListItem>
                  );
                })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
