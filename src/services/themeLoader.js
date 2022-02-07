import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";


function ThemeLoader(props) {
    const themes = useSelector((state) => state.switch);

    const theme = createTheme({
      palette: {
        type: `${themes}`,
      },
      typography: {
        fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(
          ","
        ),
      },
    });
  
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default ThemeLoader;
