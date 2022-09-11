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
import Button from "@mui/material/Button";
import { theme } from "../../theming/themeProvider";
import { TextField } from "@mui/material";

//requests && hooks
import { useEffect, useCallback, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { endpoints } from "../../services/endpoints";
import axios from "axios";
import { ShipsType } from "../../types/ships";
import { FetchAllShipsOptions } from "../../services/FetchAllShipsOptions";
import { UserContext } from "../../auth/loginAuthContext";
import { ContentContext } from "../../auth/contentContext";
import { menssagerProvider } from "../../helpers/menssagerProvider";

export default function Ships() {
  const [dense, setDense] = useState(false);
  const [ships, setShips] = useState<ShipsType[]>([]);
  const [filter, setFilter] = useState<string>("");

  const router = useNavigate();

  const { editable } = useContext(UserContext);
  const { setUrl } = useContext(ContentContext);

  function ShowDetails(index: number, url: string) {
    if (editable === false) {
      alert(menssagerProvider.notLoggedUser);
    }

    if (editable === true) {
      setUrl(url);
      router(`ship/${index}`);
    }
  }

  const data = useCallback(() => {
    const myOptions = FetchAllShipsOptions(endpoints.ships);

    axios
      .request(myOptions)
      .then((response) => setShips(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    data();
  }, [ships]);

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
                defaultValue="All Ships"
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
                bgcolor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
              }}
            >
              {ships
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
                        primary={item.starship_class}
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
