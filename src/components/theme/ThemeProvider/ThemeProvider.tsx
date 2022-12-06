import React from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import { ColorScheme } from "@/constants";

//import useColorScheme from "@/hooks/useColorScheme";

import typography from "./typography";
import shadows from "./shadows";

const theme = {
  [ColorScheme.Light]: createTheme({
    palette: {
      mode: ColorScheme.Light,
    },
    typography,
    shadows,
  }),
  [ColorScheme.Dark]: createTheme({
    palette: {
      mode: ColorScheme.Dark,
    },
    typography,
    shadows,
  }),
};

const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const { children } = props;

  //  const [colorScheme] = useColorScheme();

  return (
    //    <MuiThemeProvider theme={theme[colorScheme]}>
    <MuiThemeProvider theme={theme["light"]}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
