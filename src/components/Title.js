import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { MaterialUISwitch } from "./switch";
import { makeStyles } from "@material-ui/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useDispatch } from "react-redux";
import { change } from "../services/switchTheme";
import { Link } from "react-router-dom";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: `${theme.palette.background.paper}`,
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  icon: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  link: {
    textDecoration: "none",
    "&:visited": {
      color: "inherit",
      textDecoration: "none",
    },
  },
}));

export default function Title(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const dispatch = useDispatch();
  function handleChange(event) {
    setChecked(event.target.checked);
    dispatch(change(event.target.checked));
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <Link className={classes.link} to="/">
            {props.home && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <ArrowBackIosOutlinedIcon />
              </IconButton>
            )}
          </Link>
          <a
            className={classes.link}
            rel='noreferrer'
            href="https://github.com/YanParoni"
            target="_blank"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <GitHubIcon />
            </IconButton>
          </a>

          <a
            className={classes.link}
            rel='noreferrer'
            href="https://www.linkedin.com/in/yan-paroni/"
            target="_blank"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <LinkedInIcon />
            </IconButton>
          </a>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Dashboard Project
          </Typography>
          <MaterialUISwitch checked={checked} onChange={handleChange} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
